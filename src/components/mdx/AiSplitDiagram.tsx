export function AiSplitDiagram() {
  return (
    <figure className="not-prose my-12">
      <svg
        viewBox="0 0 640 200"
        width="640"
        height="200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        role="img"
        aria-label="The 80/20 AI split: 80% of the problem is solved with deterministic rules (filters, queries, state machines) — fast, free, auditable. The remaining 20% where judgment matters goes to AI (pattern recognition, personalized scoring, NLU) — slower, costs money, but handles nuance."
      >
        {/* 80% bar */}
        <rect x="10" y="20" width="480" height="70" fill="#111113" stroke="#1A1A1F" strokeWidth="1" />
        <rect x="10" y="20" width="480" height="3" fill="#F5F5F0" />
        <text x="250" y="48" textAnchor="middle" fontFamily="Inter, system-ui" fontSize="20" fontWeight="700" fill="#F5F5F0">80%</text>
        <text x="250" y="66" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgba(255,255,255,0.5)">Deterministic rules</text>
        <text x="250" y="82" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.35)">Filters · Queries · State machines</text>

        {/* 20% bar */}
        <rect x="500" y="20" width="130" height="70" fill="#111113" stroke="#E8A838" strokeWidth="1" />
        <rect x="500" y="20" width="130" height="3" fill="#E8A838" />
        <text x="565" y="48" textAnchor="middle" fontFamily="Inter, system-ui" fontSize="20" fontWeight="700" fill="#E8A838">20%</text>
        <text x="565" y="66" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#E8A838">AI</text>
        <text x="565" y="82" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(232,168,56,0.6)">Judgment calls</text>

        {/* Properties row */}
        <text x="30" y="120" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.4)">Fast · Free · Auditable · Predictable</text>
        <text x="510" y="120" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(232,168,56,0.4)">Slower · Costs $ · Handles nuance</text>

        {/* CasaHunter example */}
        <text x="10" y="155" fontFamily="Inter, system-ui" fontSize="10" fontWeight="600" fill="rgba(255,255,255,0.5)">CasaHunter example:</text>
        <text x="30" y="175" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.35)">Pass 1: price, size, location → eliminates 80%</text>
        <text x="510" y="175" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(232,168,56,0.35)">Pass 2-3: AI scores survivors</text>
      </svg>
    </figure>
  );
}
