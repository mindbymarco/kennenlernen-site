export default function BrandGeometry({ className }: { className?: string }) {
  // Nested squares follow the Fibonacci sequence: 377, 233, 144, 89, 55, 34, 21, 13, 8, 5.
  return <svg className={className} viewBox="0 0 660 660" fill="none" aria-hidden="true" focusable="false"><circle cx="330" cy="330" r="305" /><path d="M25 140H635V517H25Z M402 140V517 M402 284H635 M491 140V284 M402 229H491 M457 229V284 M457 250H491 M470 229V250 M457 242H470 M465 242V250" /><path className="brand-spiral" d="M25 140 A377 377 0 0 0 402 517 A233 233 0 0 0 635 284 A144 144 0 0 0 491 140 A89 89 0 0 0 402 229 A55 55 0 0 0 457 284 A34 34 0 0 0 491 250 A21 21 0 0 0 470 229 A13 13 0 0 0 457 242 A8 8 0 0 0 465 250 A5 5 0 0 0 470 245" /><path d="M330 10V40 M315 25H345 M610 610V640 M595 625H625" /></svg>;
}
