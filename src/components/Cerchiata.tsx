// Una parola cerchiata a penna, come su un quaderno. Il cerchio si disegna una volta all'apertura.
export function Cerchiata({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block whitespace-nowrap">
      {children}
      <svg
        className="cerchio-penna pointer-events-none absolute -left-[0.22em] -top-[0.22em] h-[calc(100%+0.44em)] w-[calc(100%+0.44em)] overflow-visible"
        viewBox="0 0 120 40"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M104 8C88 1 34 0 14 8 0 14 1 30 22 35c26 6 72 5 88-3 12-7 6-20-14-25-14-3-40-4-56-1"
          fill="none"
          stroke="var(--senape)"
          strokeWidth="2.6"
          strokeLinecap="round"
          pathLength={1}
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </span>
  );
}
