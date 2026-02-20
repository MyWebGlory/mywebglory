import { memo } from "react";
import { motion } from "framer-motion";

// Viewbox dimensions
const VW = 1440;
const VH = 900;

interface Node {
  id: number;
  x: number;
  y: number;
  label: string;
  iconId: string;
  r: number; // radius
  colorClass: "primary" | "secondary" | "accent" | "icp";
}

interface Edge {
  id: string;
  from: number;
  to: number;
  dur: number; // animation duration for traveling dot
  delay: number;
}

// Content block safe zone (approx viewbox coords):
// x: 330–1110 (text is centered, ~700px wide in 1440vw)
// y: 145–745 (content block, below navbar ~80px, above logos)
// Nodes orbit OUTSIDE this zone, between navbar (y≈80) and logos (y≈790)
const nodes: Node[] = [
  // ── Top — staggered heights, not a clean arc ──
  { id: 1,  x: 200,  y: 180, label: "ICP Study",    iconId: "icon-search",    r: 13, colorClass: "primary"   },
  { id: 2,  x: 490,  y: 125, label: "Creatives",    iconId: "icon-palette",   r: 12, colorClass: "secondary"  },
  { id: 3,  x: 960,  y: 130, label: "Outreach",     iconId: "icon-send",      r: 12, colorClass: "primary"   },
  { id: 4,  x: 1250, y: 175, label: "Ads",          iconId: "icon-megaphone", r: 13, colorClass: "accent"    },
  // === ICP Persona nodes ===
    { id: 201, x: 720,  y: 120, label: "CEOs",       iconId: "icon-crown",    r: 13, colorClass: "icp" }, // top center, moved up
    { id: 202, x: 220,  y: 340, label: "Directors",  iconId: "icon-user-tie", r: 12, colorClass: "icp" }, // left, closer to center
    { id: 203, x: 1220, y: 300, label: "Founders",   iconId: "icon-rocket",   r: 12, colorClass: "icp" }, // right, closer to center
  // ── Left side — varied x, not a straight column ──
  { id: 5,  x: 240,  y: 280, label: "SMS",          iconId: "icon-sms",       r: 12, colorClass: "accent"    },
  { id: 6,  x: 115,  y: 470, label: "Automation",   iconId: "icon-zap",       r: 15, colorClass: "primary"   },
  { id: 7,  x: 210,  y: 660, label: "Posts",        iconId: "icon-posts",     r: 12, colorClass: "secondary"  },
  // ── Right side — varied x, not a straight column ──
  { id: 8,  x: 1310, y: 340, label: "Reminders",    iconId: "icon-bell",      r: 12, colorClass: "secondary"  },
  { id: 9,  x: 1200, y: 490, label: "Registrants",  iconId: "icon-userplus",  r: 15, colorClass: "primary"   },
  { id: 10, x: 1350, y: 650, label: "Landing Page", iconId: "icon-landing",   r: 12, colorClass: "accent"    },
  // ── Bottom — staggered heights, not a clean arc ──
  { id: 11, x: 230,  y: 830, label: "Emails",       iconId: "icon-mail",      r: 13, colorClass: "primary"   },
  { id: 12, x: 530,  y: 870, label: "Follow-ups",   iconId: "icon-repeat",    r: 12, colorClass: "accent"    },
  { id: 13, x: 920,  y: 865, label: "Analytics",    iconId: "icon-barchart",  r: 12, colorClass: "secondary"  },
  { id: 14, x: 1230, y: 825, label: "Retargeting",  iconId: "icon-target",    r: 13, colorClass: "primary"   },

];

// Edges with hasDot=true get animated dots; outgoing/web lines don't
const edges: Edge[] = [
  // ICP persona — each connected to their nearest main node only
  { id: "e2-201",  from: 2,  to: 201, dur: 2.8, delay: 0.3 }, // CEOs ← Creatives (top center)
  { id: "e5-202",  from: 5,  to: 202, dur: 2.8, delay: 0.4 }, // Directors ← SMS (upper-left)
  { id: "e8-203",  from: 8,  to: 203, dur: 2.8, delay: 0.5 }, // Founders ← Reminders (upper-right)
  // Top arc chain
  { id: "e1-2",    from: 1,  to: 2,   dur: 3.5, delay: 0    },
  { id: "e2-3",    from: 2,  to: 3,   dur: 3.0, delay: 0.4  },
  { id: "e3-4",    from: 3,  to: 4,   dur: 3.5, delay: 0.8  },
  // Left side chain
  { id: "e1-5",    from: 1,  to: 5,   dur: 2.8, delay: 0.2  },
  { id: "e5-6",    from: 5,  to: 6,   dur: 3.2, delay: 0.6  },
  { id: "e6-7",    from: 6,  to: 7,   dur: 3.2, delay: 1.0  },
  { id: "e7-11",   from: 7,  to: 11,  dur: 2.8, delay: 1.4  },
  // Right side chain
  { id: "e4-8",    from: 4,  to: 8,   dur: 2.8, delay: 0.3  },
  { id: "e8-9",    from: 8,  to: 9,   dur: 3.2, delay: 0.7  },
  { id: "e9-10",   from: 9,  to: 10,  dur: 3.2, delay: 1.1  },
  { id: "e10-14",  from: 10, to: 14,  dur: 2.8, delay: 1.5  },
  // Bottom arc chain
  { id: "e11-12",  from: 11, to: 12,  dur: 3.5, delay: 1.6  },
  { id: "e12-13",  from: 12, to: 13,  dur: 3.0, delay: 2.0  },
  { id: "e13-14",  from: 13, to: 14,  dur: 3.5, delay: 2.4  },
  // A few selected skip/diagonal links (trimmed)
  { id: "e1-6",    from: 1,  to: 6,   dur: 4.0, delay: 0.5  },
  { id: "e4-9",    from: 4,  to: 9,   dur: 4.0, delay: 0.9  },
  { id: "e3-8",    from: 3,  to: 8,   dur: 4.5, delay: 1.3  },
  { id: "e7-12",   from: 7,  to: 12,  dur: 4.3, delay: 2.2  },
  // Outgoing lines to outside (no dots — web texture only)
  { id: "e6-out",  from: 6,  to: 1002, dur: 5.5, delay: 1.1 },
  { id: "e8-out",  from: 8,  to: 1004, dur: 5.5, delay: 0.8 },
  { id: "e9-out",  from: 9,  to: 1005, dur: 5.5, delay: 1.2 },
  { id: "e4-1009", from: 4,  to: 1009, dur: 5.5, delay: 1.0 },
  { id: "e4-1010", from: 4,  to: 1010, dur: 5.5, delay: 1.2 },
  { id: "e10-1011",from: 10, to: 1011, dur: 5.5, delay: 1.3 },
  { id: "e14-1013",from: 14, to: 1013, dur: 5.5, delay: 1.4 },
  { id: "e7-1015", from: 7,  to: 1015, dur: 5.5, delay: 1.7 },
];

// Edges that get animated traveling dots (main structural lines only)
const dotEdgeIds = new Set([
  "e1-2", "e2-3", "e3-4",
  "e1-5", "e5-6", "e6-7", "e7-11",
  "e4-8", "e8-9", "e9-10", "e10-14",
  "e11-12", "e12-13", "e13-14",
  "e2-201", "e5-202", "e8-203",
]);
// Out-of-bounds ghost nodes for outgoing web lines
const outNodes: Node[] = [
  { id: 1002, x: -60,  y: 480, label: '', iconId: '', r: 0, colorClass: 'primary'   }, // off left (from Automation)
  { id: 1004, x: 1500, y: 320, label: '', iconId: '', r: 0, colorClass: 'secondary'  }, // off right (from Reminders)
  { id: 1005, x: 1500, y: 500, label: '', iconId: '', r: 0, colorClass: 'primary'   }, // off right (from Registrants)
  { id: 1009, x: 1380, y: 20,  label: '', iconId: '', r: 0, colorClass: 'accent'    }, // off top-right (from Ads)
  { id: 1010, x: 1480, y: 180, label: '', iconId: '', r: 0, colorClass: 'accent'    }, // off right (from Ads)
  { id: 1011, x: 1480, y: 670, label: '', iconId: '', r: 0, colorClass: 'accent'    }, // off right (from Landing Page)
  { id: 1013, x: 1300, y: 940, label: '', iconId: '', r: 0, colorClass: 'primary'   }, // off bottom (from Retargeting)
  { id: 1015, x: 60,   y: 860, label: '', iconId: '', r: 0, colorClass: 'secondary'  }, // off bottom-left (from Posts)
];

const nodeMap = Object.fromEntries([...nodes, ...outNodes].map(n => [n.id, n]));

// Center of the viewbox (where hero content sits — avoid this area)
const CX = VW / 2;
const CY = VH / 2;

function getPathD(from: Node, to: Node) {
  const mx = (from.x + to.x) / 2;
  const my = (from.y + to.y) / 2;
  // Push control point AWAY from center so curves hug the outside
  const dx = mx - CX;
  const dy = my - CY;
  const dist = Math.sqrt(dx * dx + dy * dy) || 1;
  const push = 45; // how far to push outward
  const cx1 = mx + (dx / dist) * push;
  const cy1 = my + (dy / dist) * push;
  return `M ${from.x} ${from.y} Q ${cx1} ${cy1} ${to.x} ${to.y}`;
}

const colorVars = {
  primary:   { fill: "rgba(109,40,217,0.18)", stroke: "rgba(139,92,246,0.55)", glow: "rgba(139,92,246,0.25)", dot: "#a78bfa" },
  secondary: { fill: "rgba(124,58,237,0.14)", stroke: "rgba(167,139,250,0.5)", glow: "rgba(167,139,250,0.2)", dot: "#c4b5fd" },
  accent:    { fill: "rgba(91,33,182,0.15)",  stroke: "rgba(196,181,253,0.4)", glow: "rgba(196,181,253,0.2)", dot: "#ddd6fe" },
  icp:       { fill: "rgba(255,215,0,0.18)", stroke: "rgba(255,215,0,0.55)", glow: "rgba(255,215,0,0.25)", dot: "#ffe066" },
};

// Pre-compute all path strings once at module level — avoids repeated trig per render
const pathCache: Record<string, string> = {};
for (const e of edges) {
  pathCache[e.id] = getPathD(nodeMap[e.from], nodeMap[e.to]);
}

const NetworkBackground = memo(function NetworkBackground() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${VW} ${VH}`}
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        {/* Gradient for wires */}
        <linearGradient id="wireGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="rgba(139,92,246,0)"   />
          <stop offset="40%"  stopColor="rgba(139,92,246,0.45)"/>
          <stop offset="60%"  stopColor="rgba(167,139,250,0.45)"/>
          <stop offset="100%" stopColor="rgba(167,139,250,0)"  />
        </linearGradient>

        {/* Glow filter for nodes */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <filter id="glowStrong" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="7" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        {/* === Icon Symbols (24x24 viewBox each) === */}
        {/* Search — ICP Study */}
        <symbol id="icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </symbol>

        {/* Palette — Creatives */}
        <symbol id="icon-palette" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/>
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/>
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/>
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
        </symbol>

          {/* Crown — CEOs */}
          <symbol id="icon-crown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 7l5 5 5-9 5 9 5-5" />
            <path d="M2 19h20" />
            <path d="M7 19v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
          </symbol>
          {/* User-tie — Directors */}
          <symbol id="icon-user-tie" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="7" r="4" />
            <path d="M6 21l3-7 3 2 3-2 3 7" />
          </symbol>
          {/* Rocket — Founders */}
          <symbol id="icon-rocket" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 13a8 8 0 0 1 8-8v0a8 8 0 0 1 8 8v3a2 2 0 0 1-2 2h-2l-2 3-2-3H6a2 2 0 0 1-2-2z" />
            <circle cx="12" cy="9" r="2" />
          </symbol>
        {/* Send — Outreach */}
        <symbol id="icon-send" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
          <path d="m21.854 2.147-10.94 10.939" />
        </symbol>

        {/* Message Square — SMS */}
        <symbol id="icon-sms" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          <path d="M8 10h.01" />
          <path d="M12 10h.01" />
          <path d="M16 10h.01" />
        </symbol>

        {/* Zap — Automation */}
        <symbol id="icon-zap" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </symbol>

        {/* Bell — Reminders */}
        <symbol id="icon-bell" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
        </symbol>

        {/* Megaphone — Ads */}
        <symbol id="icon-megaphone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 11 18-5v12L3 13" />
          <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </symbol>

        {/* UserPlus — Registrants */}
        <symbol id="icon-userplus" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <line x1="19" x2="19" y1="8" y2="14" />
          <line x1="22" x2="16" y1="11" y2="11" />
        </symbol>

        {/* FileText — Posts */}
        <symbol id="icon-posts" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v4a2 2 0 0 0 2 2h4" />
          <path d="M10 9H8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </symbol>

        {/* Mail — Emails */}
        <symbol id="icon-mail" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </symbol>

        {/* Monitor — Landing Page */}
        <symbol id="icon-landing" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <path d="M8 21h8" />
          <path d="M12 17v4" />
          <path d="M7 8h3" />
          <path d="M7 12h8" />
        </symbol>

        {/* Repeat — Follow-ups */}
        <symbol id="icon-repeat" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="m17 2 4 4-4 4" />
          <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
          <path d="m7 22-4-4 4-4" />
          <path d="M21 13v1a4 4 0 0 1-4 4H3" />
        </symbol>

        {/* BarChart — Analytics */}
        <symbol id="icon-barchart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3v16h18" />
          <path d="M7 16V11" />
          <path d="M11 16V8" />
          <path d="M15 16V5" />
          <path d="M19 16v-3" />
        </symbol>

        {/* Target — Retargeting */}
        <symbol id="icon-target" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </symbol>

        {/* Define path refs for animateMotion — uses pre-computed cache */}
        {edges.map(e => (
          <path
            key={`path-def-${e.id}`}
            id={`path-${e.id}`}
            d={pathCache[e.id]}
            fill="none"
          />
        ))}
      </defs>

      {/* === Wires (edges) — uses pre-computed path cache === */}
      {edges.map((e, i) => (
        <motion.path
          key={`wire-${e.id}`}
          d={pathCache[e.id]}
          fill="none"
          stroke="url(#wireGrad)"
          strokeWidth="0.8"
          opacity={0.41}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.41 }}
          transition={{ duration: 1.6, delay: 0.4 + i * 0.08, ease: "easeOut" }}
        />
      ))}

      {/* === Traveling dots — main structural edges only === */}
      {edges.filter(e => dotEdgeIds.has(e.id)).map(e => {
        const c = colorVars[nodeMap[e.from].colorClass];
        return (
          <circle key={`dot-${e.id}`} r="2" fill={c.dot} opacity="0.75">
            <animateMotion
              dur={`${e.dur * 1.7}s`}
              begin={`${e.delay}s`}
              repeatCount="indefinite"
              rotate="none"
            >
              <mpath href={`#path-${e.id}`} />
            </animateMotion>
          </circle>
        );
      })}

      {/* === Nodes === */}
      {nodes.map((node, i) => {
        const c = colorVars[node.colorClass];
        const iconSize = node.r * 0.95;
        return (
          <motion.g
            key={`node-${node.id}`}
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 0.85, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 + i * 0.1, ease: "backOut" }}
            style={{ transformOrigin: `${node.x}px ${node.y}px` }}
          >
            {/* Outer pulse ring — SMIL animation: GPU-only, no JS loop */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + 6}
              fill="none"
              stroke={c.glow}
              strokeWidth="0.7"
            >
              <animate attributeName="r" values={`${node.r + 6};${node.r + 12};${node.r + 6}`} dur={`${3.5 + i * 0.3}s`} begin={`${i * 0.4}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
              <animate attributeName="opacity" values="0.23;0;0.23" dur={`${3.5 + i * 0.3}s`} begin={`${i * 0.4}s`} repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
            </circle>
            {/* Inner glow circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r + 3}
              fill={c.glow}
              filter="url(#glow)"
              opacity={0.41}
            />
            {/* Main node circle */}
            <circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={c.fill}
              stroke={c.stroke}
              strokeWidth="0.9"
              filter="url(#glow)"
              opacity={0.85}
            />
            {/* Icon */}
            <use
              href={`#${node.iconId}`}
              x={node.x - iconSize / 2}
              y={node.y - iconSize / 2}
              width={iconSize}
              height={iconSize}
              color={c.dot}
              opacity="0.74"
            />
            {/* Label */}
            <text
              x={node.x}
              y={node.y + node.r + 8}
              textAnchor="middle"
              fill={c.dot}
              opacity="0.47"
              fontSize="7.2"
              fontFamily="system-ui, sans-serif"
              letterSpacing="0.4"
              style={{ userSelect: 'none', pointerEvents: 'none' }}
            >
              {node.label.toUpperCase()}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
});

export default NetworkBackground;
