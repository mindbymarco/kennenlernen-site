"use client";
import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

/**
 * Photo that pixelates on hover and resolves back to full resolution.
 * Canvas-based; static image when not hovered / no JS animation wanted.
 */
export default function PhotoPixelate({ src, alt, className = '', startBlocks = 26, duration = 650 }) {
  const canvasRef = useRef(null)
  const imgRef = useRef(null)
  const rafRef = useRef(0)
  const [ready, setReady] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const img = new Image()
    img.src = src
    img.onload = () => {
      imgRef.current = img
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(rect.width * dpr)
      canvas.height = Math.round(rect.height * dpr)
      setReady(true)
      // initial full-res draw
      ctx.imageSmoothingEnabled = true
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
  }, [src])

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  const drawAt = (blocks) => {
    const canvas = canvasRef.current
    const img = imgRef.current
    if (!canvas || !img) return
    const ctx = canvas.getContext('2d')
    const off = document.createElement('canvas')
    const bw = Math.max(1, blocks)
    off.width = bw
    off.height = Math.max(1, Math.round((bw * img.height) / img.width))
    const octx = off.getContext('2d')
    octx.imageSmoothingEnabled = true
    octx.drawImage(img, 0, 0, off.width, off.height)
    ctx.imageSmoothingEnabled = false
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(off, 0, 0, canvas.width, canvas.height)
  }

  const onEnter = () => {
    if (reduced || !imgRef.current) return
    cancelAnimationFrame(rafRef.current)
    const t0 = performance.now()
    const tick = (t) => {
      const p = Math.min(1, (t - t0) / duration)
      // pixelate fast to max, then resolve back to sharp
      const blocks = p < 0.4
        ? Math.round(startBlocks - (startBlocks - 40) * (p / 0.4))
        : Math.round(40 - (40 - 1) * ((p - 0.4) / 0.6))
      drawAt(Math.max(1, blocks))
      if (p < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
  }

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={alt}
      onMouseEnter={onEnter}
      onFocus={onEnter}
      tabIndex={0}
      className={`${className} ${ready ? '' : 'opacity-0'} transition-opacity duration-300 cursor-crosshair`}
    />
  )
}