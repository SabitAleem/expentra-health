import { rcmStages } from "@/data/content";

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

function labelAnchor(angle: number): "start" | "middle" | "end" {
  if (angle > -50 && angle < 50) return "start";
  if (angle > 130 || angle < -130) return "end";
  return "middle";
}

export function RcmDiagram() {
  const size = 420;
  const cx = size / 2;
  const cy = size / 2;
  const ringRadius = 118;
  const nodeRadius = 26;

  return (
    <div className="relative mx-auto w-full max-w-[min(100%,420px)]">
      <div className="relative aspect-square w-full">
        <svg
          viewBox={`0 0 ${size} ${size}`}
          className="h-full w-full drop-shadow-lg"
          role="img"
          aria-label="Complete Revenue Cycle Management diagram with six stages: Scheduling, Benefits and auth, Coding, Claim scrubbing, Billing, and AR and denials"
        >
          <defs>
            <linearGradient id="rcm-ring" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.15" />
            </linearGradient>
            <filter id="node-shadow" x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.25" />
            </filter>
          </defs>

          <circle
            cx={cx}
            cy={cy}
            r={ringRadius + 22}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth="1"
          />

          <circle
            cx={cx}
            cy={cy}
            r={ringRadius}
            fill="none"
            stroke="url(#rcm-ring)"
            strokeWidth="2"
            strokeDasharray="4 8"
          />

          <circle
            cx={cx}
            cy={cy}
            r={58}
            fill="rgba(255,255,255,0.14)"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="1.5"
          />
          <circle cx={cx} cy={cy} r={48} fill="white" />
          <text
            x={cx}
            y={cy - 8}
            textAnchor="middle"
            style={{ fontSize: 13, fontWeight: 700, fill: "#102F63" }}
          >
            Complete
          </text>
          <text
            x={cx}
            y={cy + 12}
            textAnchor="middle"
            style={{ fontSize: 15, fontWeight: 800, fill: "#2161D9" }}
          >
            RCM
          </text>

          {rcmStages.map((stage) => {
            const pos = polarToCartesian(cx, cy, ringRadius, stage.angle);
            const labelPos = polarToCartesian(
              cx,
              cy,
              ringRadius + 46,
              stage.angle,
            );
            const anchor = labelAnchor(stage.angle);

            return (
              <g key={stage.id} className="rcm-node">
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={nodeRadius}
                  fill="white"
                  filter="url(#node-shadow)"
                />
                <circle
                  cx={pos.x}
                  cy={pos.y}
                  r={nodeRadius}
                  fill="none"
                  stroke="#2161D9"
                  strokeWidth="2"
                />
                <text
                  x={pos.x}
                  y={pos.y + 5}
                  textAnchor="middle"
                  style={{ fontSize: 14, fontWeight: 800, fill: "#102F63" }}
                >
                  {stage.number}
                </text>
                <text
                  x={labelPos.x}
                  y={labelPos.y}
                  textAnchor={anchor}
                  dominantBaseline="middle"
                  style={{ fontSize: 11, fontWeight: 600, fill: "white" }}
                >
                  {stage.label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
