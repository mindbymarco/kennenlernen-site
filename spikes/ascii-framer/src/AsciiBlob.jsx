import { motion } from "framer-motion";

const BLOB_LINES = [
  "                                   .-'''''-.                                    ",
  "                               .''           ''.                                ",
  "                            .''                 ''.                            ",
  "                          .'                       '.                          ",
  "                         .'                         '.                         ",
  "                         .                           .                         ",
  "                        .                             .                        ",
  "                       .                               .                       ",
  "                       .                               .                       ",
  "                      .                                 .                      ",
  "                      .              ..::.              .                      ",
  "                     .            .-'     '-.            .                     ",
  "                     .           '           '           .                     ",
  "                    .            .            .          .                     ",
  "                    .           .              .         .                     ",
  "                    .           .              .         .                     ",
  "                    .            .            .          .                     ",
  "                     .           '            '          .                     ",
  "                     .            '-._     _.-'          .                     ",
  "                      .              '~-.-~'             .                     ",
  "                      .                                 .                      ",
  "                       .                               .                       ",
  "                       .                               .                       ",
  "                        .                             .                        ",
  "                         .                           .                         ",
  "                         .'                         '.                         ",
  "                          '.                       .'                          ",
  "                           ''.                   .''                            ",
  "                              ''.               .'                             ",
  "                                 '-.._____..-'                                ",
];

export default function AsciiBlob() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
      <motion.div
        className="font-mono text-[#4A4A48] text-[15px] leading-[1.08] whitespace-pre select-none"
        animate={{
          opacity: [0.20, 0.35, 0.20],
          scale: [1, 1.01, 1],
        }}
        transition={{
          duration: 8,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        {BLOB_LINES.join("\n")}
      </motion.div>
    </div>
  );
}