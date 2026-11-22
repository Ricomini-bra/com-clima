const orbitItems = [
  "Manutenção Preventiva",
  "Manutenção Corretiva",
  "PMOC's",
  "Instalações",
  "Automação",
];

const equipmentItems = ["Chiller's", "VRF's", "Self's", "Splitões", "Splits"];

const CIRCLE_RADIUS = 30;
const DOT_RADIUS = 41;
const LABEL_RADIUS = 50;

export function ServiceRing() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[23rem] sm:max-w-[27rem] lg:max-w-[30rem]">
      <div className="pointer-events-none absolute inset-[18%] rounded-full bg-cyan/20 blur-2xl" />

      <div className="absolute inset-[14%] animate-orbit rounded-full border border-dashed border-cyan/35" />
      <div className="absolute inset-[18%] rounded-full border border-cyan/20" />

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" aria-hidden>
        <defs>
          <linearGradient id="orbit-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0077b6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#00b4d8" />
          </linearGradient>
        </defs>
        {orbitItems.map((label, index) => {
          const angle = (index / orbitItems.length) * Math.PI * 2 - Math.PI / 2;
          const x1 = 50 + CIRCLE_RADIUS * Math.cos(angle);
          const y1 = 50 + CIRCLE_RADIUS * Math.sin(angle);
          const x2 = 50 + DOT_RADIUS * Math.cos(angle);
          const y2 = 50 + DOT_RADIUS * Math.sin(angle);

          return (
            <line
              key={label}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#orbit-line)"
              strokeWidth="0.85"
              strokeLinecap="round"
            />
          );
        })}
      </svg>

      <div className="absolute inset-[20%] flex items-center justify-center rounded-full border border-white/80 bg-white/70 shadow-[0_12px_40px_rgba(11,31,58,0.12)] backdrop-blur-sm">
        <div className="px-3 text-center">
          <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.22em] text-cyan-deep sm:text-[10px]">
            Equipamentos
          </p>
          <ul className="space-y-0.5 text-[11px] font-semibold leading-snug text-navy sm:text-sm">
            {equipmentItems.map((item) => (
              <li key={item} className="flex items-center justify-center gap-1.5">
                <span className="h-1 w-1 rounded-full bg-cyan" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {orbitItems.map((label, index) => {
        const angle = (index / orbitItems.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + DOT_RADIUS * Math.cos(angle);
        const y = 50 + DOT_RADIUS * Math.sin(angle);
        const lx = 50 + LABEL_RADIUS * Math.cos(angle);
        const ly = 50 + LABEL_RADIUS * Math.sin(angle);
        const align =
          Math.cos(angle) > 0.35 ? "left" : Math.cos(angle) < -0.35 ? "right" : "center";

        return (
          <div key={label}>
            <span
              className="absolute z-10 h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-cyan shadow-[0_0_0_4px_rgba(0,180,216,0.18)]"
              style={{ left: `${x}%`, top: `${y}%` }}
            />
            <span
              className={`absolute z-10 max-w-[9rem] -translate-y-1/2 rounded-full border border-cyan/20 bg-white/90 px-2.5 py-1 text-[10px] font-bold leading-tight text-navy shadow-sm backdrop-blur-sm sm:text-xs ${
                align === "left"
                  ? "translate-x-0 text-left"
                  : align === "right"
                    ? "-translate-x-full text-right"
                    : "-translate-x-1/2 text-center"
              }`}
              style={{ left: `${lx}%`, top: `${ly}%` }}
            >
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
