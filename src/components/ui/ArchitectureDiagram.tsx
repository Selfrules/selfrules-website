'use client';

import { useEffect, useRef } from 'react';

export function ArchitectureDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    // Responsive sizing logic
    const updateDimensions = () => {
      if (!containerRef.current || !svgRef.current) return;

      const width = containerRef.current.offsetWidth;
      const isSmall = width < 640;

      if (isSmall) {
        // Vertical layout for mobile
        svgRef.current.setAttribute('viewBox', '0 0 280 1100');
        svgRef.current.setAttribute('width', '280');
        svgRef.current.setAttribute('height', '1100');
      } else if (width < 1024) {
        // Medium layout for tablet
        svgRef.current.setAttribute('viewBox', '0 0 640 400');
        svgRef.current.setAttribute('width', '640');
        svgRef.current.setAttribute('height', '400');
      } else {
        // Horizontal layout for desktop
        svgRef.current.setAttribute('viewBox', '0 0 1200 250');
        svgRef.current.setAttribute('width', '1200');
        svgRef.current.setAttribute('height', '250');
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-x-auto my-12">
      <svg
        ref={svgRef}
        viewBox="0 0 1200 250"
        width="1200"
        height="250"
        xmlns="http://www.w3.org/2000/svg"
        className="mx-auto"
        style={{ minWidth: '100%', height: 'auto' }}
      >
        {/* Define styles */}
        <defs>
          <style>{`
            .box-border { stroke: #1A1A1F; stroke-width: 1; fill: transparent; }
            .box-text { font-family: Inter, system-ui, sans-serif; font-size: 12px; fill: #F5F5F0; text-anchor: middle; }
            .box-label { font-family: "JetBrains Mono", monospace; font-size: 10px; fill: rgba(255,255,255,0.6); text-anchor: middle; }
            .arrow { stroke: #E8A838; stroke-width: 2; fill: none; marker-end: url(#arrowhead); }
            .arrow-label { font-family: "JetBrains Mono", monospace; font-size: 9px; fill: #E8A838; }
          `}</style>
          <marker
            id="arrowhead"
            markerWidth="10"
            markerHeight="10"
            refX="9"
            refY="3"
            orient="auto"
          >
            <polygon points="0 0, 10 3, 0 6" fill="#E8A838" />
          </marker>
        </defs>

        {/* Desktop/Horizontal Layout (0-900px width) */}
        <g className="desktop-layout">
          {/* Stage 1: Scrapers */}
          <rect x="10" y="40" width="90" height="60" className="box-border" />
          <text x="55" y="68" className="box-text" fontWeight="600">
            8 Scrapers
          </text>
          <text x="55" y="85" className="box-label">
            collect
          </text>

          {/* Arrow 1 */}
          <path d="M 100 70 L 140 70" className="arrow" />
          <text x="120" y="60" className="arrow-label">
            raw data
          </text>

          {/* Stage 2: Dedup & Normalize */}
          <rect x="140" y="40" width="100" height="60" className="box-border" />
          <text x="190" y="68" className="box-text" fontWeight="600">
            Dedup &amp;
          </text>
          <text x="190" y="82" className="box-text" fontWeight="600">
            Normalize
          </text>

          {/* Arrow 2 */}
          <path d="M 240 70 L 280 70" className="arrow" />
          <text x="260" y="60" className="arrow-label">
            clean
          </text>

          {/* Stage 3: Pass 1 */}
          <rect x="280" y="40" width="100" height="60" className="box-border" />
          <text x="330" y="68" className="box-text" fontWeight="600">
            Pass 1:
          </text>
          <text x="330" y="82" className="box-text" fontWeight="600">
            Hard Filter
          </text>
          <text x="330" y="97" className="box-label">
            (80% filtered)
          </text>

          {/* Arrow 3 */}
          <path d="M 380 70 L 420 70" className="arrow" />

          {/* Stage 4: Pass 2 */}
          <rect x="420" y="40" width="100" height="60" className="box-border" />
          <text x="470" y="68" className="box-text" fontWeight="600">
            Pass 2:
          </text>
          <text x="470" y="82" className="box-text" fontWeight="600">
            AI Scoring
          </text>

          {/* Arrow 4 */}
          <path d="M 520 70 L 560 70" className="arrow" />

          {/* Stage 5: Pass 3 */}
          <rect x="560" y="40" width="100" height="60" className="box-border" />
          <text x="610" y="68" className="box-text" fontWeight="600">
            Pass 3:
          </text>
          <text x="610" y="82" className="box-text" fontWeight="600">
            AI Analysis
          </text>

          {/* Arrow 5 */}
          <path d="M 660 70 L 700 70" className="arrow" />

          {/* Stage 6: Final Score */}
          <rect x="700" y="40" width="90" height="60" className="box-border" />
          <text x="745" y="68" className="box-text" fontWeight="600">
            Final Score
          </text>
          <text x="745" y="85" className="box-label">
            0–100
          </text>

          {/* Arrow 6 */}
          <path d="M 790 70 L 830 70" className="arrow" />

          {/* Stage 7: Telegram Bot */}
          <rect x="830" y="40" width="90" height="60" className="box-border" />
          <text x="875" y="68" className="box-text" fontWeight="600">
            Telegram
          </text>
          <text x="875" y="85" className="box-label">
            alert
          </text>

          {/* Annotations */}
          <text x="330" y="150" className="box-label" style={{ textAnchor: 'start' }}>
            • Location, price, size
          </text>
          <text x="330" y="165" className="box-label" style={{ textAnchor: 'start' }}>
            • Hard yes/no
          </text>

          <text x="470" y="150" className="box-label" style={{ textAnchor: 'start' }}>
            • Transport, light, floor
          </text>
          <text x="470" y="165" className="box-label" style={{ textAnchor: 'start' }}>
            • Weighted scoring
          </text>

          <text x="610" y="150" className="box-label" style={{ textAnchor: 'start' }}>
            • Red/green flags
          </text>
          <text x="610" y="165" className="box-label" style={{ textAnchor: 'start' }}>
            • Text analysis
          </text>

          <text x="745" y="150" className="box-label" style={{ textAnchor: 'start' }}>
            • Composite score
          </text>

          <text x="875" y="150" className="box-label" style={{ textAnchor: 'start' }}>
            • score &gt; threshold
          </text>
        </g>
      </svg>
    </div>
  );
}
