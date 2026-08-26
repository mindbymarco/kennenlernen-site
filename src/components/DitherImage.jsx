"use client";
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Renders an image through a Bayer-dither canvas (pixel-gradient look).
 * Lazy: processes once when scrolled into view. Static result.
 */
export default function DitherImage({ src, cols = 150, levels = 10 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '200px' })
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!inView || done) return
    const canvas = ref.current
    if (!canvas) return

    const BAYER = [
      [0, 8, 2, 10],
      [12, 4, 14, 6],
      [3, 11, 1, 9],
      [15, 7, 13, 5],
    ]

    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.src = src
    img.onload = () => {
      const rows = Math.max(2, Math.round((cols * img.height) / img.width))
      const off = document.createElement('canvas')
      off.width = cols
      off.height = rows
      const octx = off.getContext('2d')
      octx.drawImage(img, 0, 0, cols, rows)
      let data
      try {
        data = octx.getImageData(0, 0, cols, rows)
      } catch {
        // tainted canvas fallback: show plain image
        canvas.parentElement.replaceWith(Object.assign(document.createElement('img'), { src, style: 'width:100%;height:100%;object-fit:cover;' }))
        return
      }

      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          const i = (y * cols + x) * 4
          const th = (BAYER[y & 3][x & 3] / 16 - 0.5) / levels
          data.data[i] = Math.min(255, Math.max(0, Math.floor((data.data[i] / 255 + th) * levels) / (levels - 1) * 255))
          data.data[i + 1] = Math.min(255, Math.max(0, Math.floor((data.data[i + 1] / 255 + th) * levels) / (levels - 1) * 255))
          data.data[i + 2] = Math.min(255, Math.max(0, Math.floor((data.data[i + 2] / 255 + th) * levels) / (levels - 1) * 255))
        }
      }
      octx.putImageData(data, 0, 0)

      canvas.width = cols
      canvas.height = rows
      const ctx = canvas.getContext('2d')
      ctx.imageSmoothingEnabled = false
      ctx.drawImage(off, 0, 0)
      setDone(true)
    }
  }, [inView, done, src, cols, levels])

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${done ? 'opacity-100' : 'opacity-0'}`}
      style={{ imageRendering: 'pixelated', objectFit: 'cover', display: 'block' }}
    />
  )
}