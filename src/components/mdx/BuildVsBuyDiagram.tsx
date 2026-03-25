export function BuildVsBuyDiagram() {
  return (
    <figure className="not-prose my-12">
      <svg
        viewBox="0 0 720 320"
        width="720"
        height="320"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
        role="img"
        aria-label="Build vs Buy decision framework: four sequential questions — constraint (time, money, capability), differentiator (core vs commodity), total cost of ownership over 3-5 years, and reversibility within 6 months"
      >
        <defs>
          <marker id="bvb-arrow" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill="#E8A838" />
          </marker>
        </defs>

        {/* Question 1 */}
        <rect x="10" y="20" width="160" height="80" fill="transparent" stroke="#1A1A1F" strokeWidth="1" />
        <rect x="10" y="20" width="160" height="3" fill="#E8A838" />
        <text x="90" y="48" textAnchor="middle" fontFamily="Inter, system-ui" fontSize="11" fontWeight="600" fill="#F5F5F0">Q1: Constraint</text>
        <text x="90" y="68" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.5)">Time? Money?</text>
        <text x="90" y="82" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.5)">Capability?</text>

        {/* Arrow 1→2 */}
        <path d="M 170 60 L 190 60" stroke="#E8A838" strokeWidth="1.5" fill="none" markerEnd="url(#bvb-arrow)" />

        {/* Question 2 */}
        <rect x="192" y="20" width="160" height="80" fill="transparent" stroke="#1A1A1F" strokeWidth="1" />
        <rect x="192" y="20" width="160" height="3" fill="#E8A838" />
        <text x="272" y="48" textAnchor="middle" fontFamily="Inter, system-ui" fontSize="11" fontWeight="600" fill="#F5F5F0">Q2: Differentiator?</text>
        <text x="272" y="68" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.5)">Core = build</text>
        <text x="272" y="82" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.5)">Commodity = buy</text>

        {/* Arrow 2→3 */}
        <path d="M 352 60 L 372 60" stroke="#E8A838" strokeWidth="1.5" fill="none" markerEnd="url(#bvb-arrow)" />

        {/* Question 3 */}
        <rect x="374" y="20" width="160" height="80" fill="transparent" stroke="#1A1A1F" strokeWidth="1" />
        <rect x="374" y="20" width="160" height="3" fill="#E8A838" />
        <text x="454" y="48" textAnchor="middle" fontFamily="Inter, system-ui" fontSize="11" fontWeight="600" fill="#F5F5F0">Q3: TCO 3-5 years</text>
        <text x="454" y="68" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.5)">Labor + risk +</text>
        <text x="454" y="82" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.5)">opportunity cost</text>

        {/* Arrow 3→4 */}
        <path d="M 534 60 L 554 60" stroke="#E8A838" strokeWidth="1.5" fill="none" markerEnd="url(#bvb-arrow)" />

        {/* Question 4 */}
        <rect x="556" y="20" width="160" height="80" fill="transparent" stroke="#1A1A1F" strokeWidth="1" />
        <rect x="556" y="20" width="160" height="3" fill="#E8A838" />
        <text x="636" y="48" textAnchor="middle" fontFamily="Inter, system-ui" fontSize="11" fontWeight="600" fill="#F5F5F0">Q4: Reversible?</text>
        <text x="636" y="68" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.5)">No = raise the bar</text>
        <text x="636" y="82" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="9" fill="rgba(255,255,255,0.5)">Yes = lower it</text>

        {/* Example: CasaHunter — BUILD */}
        <rect x="10" y="140" width="345" height="70" fill="#111113" stroke="#1A1A1F" strokeWidth="1" />
        <text x="25" y="163" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#E8A838" fontWeight="600">CasaHunter → BUILD</text>
        <text x="25" y="180" fontFamily="Inter, system-ui" fontSize="10" fill="rgba(255,255,255,0.5)">Time ✓ · Core differentiator ✓ · Low TCO ✓ · Reversible ✓</text>
        <text x="25" y="198" fontFamily="Inter, system-ui" fontSize="10" fill="rgba(255,255,255,0.4)">Ranking algorithm is the product — must own it</text>

        {/* Example: OneCashless — BUY */}
        <rect x="370" y="140" width="345" height="70" fill="#111113" stroke="#1A1A1F" strokeWidth="1" />
        <text x="385" y="163" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="#E8A838" fontWeight="600">OneCashless → BUY (Amusement Connect)</text>
        <text x="385" y="180" fontFamily="Inter, system-ui" fontSize="10" fill="rgba(255,255,255,0.5)">No time ✗ · Not differentiator ✗ · €300K TCO ✗ · Reversible ✓</text>
        <text x="385" y="198" fontFamily="Inter, system-ui" fontSize="10" fill="rgba(255,255,255,0.4)">Cashless is not the core product — partner delivers more</text>

        {/* Bottom rule */}
        <text x="360" y="260" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="10" fill="rgba(255,255,255,0.35)">Not from conviction. From constraint.</text>
      </svg>
    </figure>
  );
}
