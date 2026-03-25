export function MetricsTriangleDiagram() {
  return (
    <figure className="not-prose my-12">
      <svg
        viewBox="0 0 600 280"
        width="600"
        height="280"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        role="img"
        aria-label="Every metric needs three things: the number (what happened), the mechanism (why it happened), and the counter-metric (what you're paying for it). Without all three, you're making decisions with one eye closed."
      >
        {/* Triangle connecting the three concepts */}
        <path d="M 300 30 L 520 220 L 80 220 Z" fill="none" stroke="#1A1A1F" strokeWidth="1" />

        {/* The Number — top */}
        <circle cx="300" cy="30" r="8" fill="#E8A838" />
        <text x="300" y="60" textAnchor="middle" fontFamily="Inter, system-ui" fontSize="13" fontWeight="600" fill="#F5F5F0">The Number</text>
        <text x="300" y="78" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgba(255,255,255,0.5)">What happened</text>
        <text x="300" y="94" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.35)">&quot;DAU up 23%&quot;</text>

        {/* The Mechanism — bottom left */}
        <circle cx="80" cy="220" r="8" fill="#E8A838" />
        <text x="80" y="250" textAnchor="middle" fontFamily="Inter, system-ui" fontSize="13" fontWeight="600" fill="#F5F5F0">The Mechanism</text>
        <text x="80" y="268" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgba(255,255,255,0.5)">Why it happened</text>

        {/* The Counter-Metric — bottom right */}
        <circle cx="520" cy="220" r="8" fill="#E8A838" />
        <text x="520" y="250" textAnchor="middle" fontFamily="Inter, system-ui" fontSize="13" fontWeight="600" fill="#F5F5F0">Counter-Metric</text>
        <text x="520" y="268" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgba(255,255,255,0.5)">What you&apos;re paying</text>

        {/* Center label */}
        <text x="300" y="175" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#E8A838" fontWeight="600">Decision</text>
        <text x="300" y="192" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.35)">All three required</text>

        {/* Edge labels */}
        <text x="175" y="120" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgba(255,255,255,0.3)" transform="rotate(-42, 175, 120)">push notifications</text>
        <text x="425" y="120" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgba(255,255,255,0.3)" transform="rotate(42, 425, 120)">3x opt-out rate</text>
        <text x="300" y="232" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="8" fill="rgba(255,255,255,0.3)">caused by → traded off by</text>
      </svg>
    </figure>
  );
}
