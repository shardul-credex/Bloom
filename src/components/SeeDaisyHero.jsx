import { motion } from 'framer-motion'
import { IMAGES } from '../data/images'

// Small reusable mock dashboard, built in CSS/SVG so it always renders crisp
// inside the device frames regardless of screen size.
function DashboardScreen({ variant = 'desktop' }) {
  const isDesktop = variant === 'desktop'
  return (
    <div className="flex h-full w-full bg-white text-[6px]">
      {/* Sidebar */}
      <div className="flex w-[22%] flex-col gap-2 bg-green-deep p-2">
        <p className="font-display text-cream" style={{ fontSize: isDesktop ? '7px' : '6px' }}>
          Bloom
        </p>
        <div className="mt-2 flex flex-col gap-1.5">
          {['Demand', 'Supply', 'Pre-S&OP', 'Master Sched.'].map((label, i) => (
            <div
              key={label}
              className={`rounded px-1 py-1 ${i === 1 ? 'bg-lime text-green-deep' : 'text-cream/70'}`}
            >
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Main panel */}
      <div className="flex flex-1 flex-col gap-1.5 p-2">
        <div className="flex items-center justify-between">
          <span className="font-medium text-green-deep">Supply</span>
          <span className="rounded bg-beige-warm px-1 text-green-deep/60">Export</span>
        </div>

        {/* Big chart */}
        <div className="relative h-[38%] w-full overflow-hidden rounded bg-cream">
          <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="h-full w-full">
            <defs>
              <linearGradient id="dashLime" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#a6d850" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#a6d850" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="dashBeige" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#deddbc" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#deddbc" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 40 Q 40 10 90 18 T 200 15 L 200 60 L 0 60 Z" fill="url(#dashBeige)" />
            <path d="M0 40 Q 40 10 90 18 T 130 16" fill="none" stroke="#a6d850" strokeWidth="1.5" />
            <path d="M0 40 Q 40 10 90 18" fill="url(#dashLime)" opacity="0.6" />
          </svg>
        </div>

        {/* Three small charts */}
        <div className="flex gap-1.5">
          {['Fat', 'Protein', 'Lactose'].map((label) => (
            <div key={label} className="flex-1 rounded bg-cream p-1">
              <span className="text-green-deep/60">{label}</span>
              <svg viewBox="0 0 60 24" className="h-4 w-full">
                <path d="M0 18 Q 20 4 35 10 T 60 6" fill="none" stroke="#205038" strokeWidth="1" />
              </svg>
            </div>
          ))}
        </div>

        {/* Bottom rows */}
        <div className="flex flex-1 gap-1.5">
          <div className="flex-1 rounded bg-cream p-1">
            <span className="text-green-deep/60">Demand Growth</span>
            <div className="mt-1 flex flex-col gap-1">
              {[80, 55, 65, 40].map((w, i) => (
                <div key={i} className="h-1 rounded bg-beige-warm">
                  <div className="h-1 rounded bg-lime" style={{ width: `${w}%` }} />
                </div>
              ))}
            </div>
          </div>
          {isDesktop && (
            <div className="flex-1 rounded bg-cream p-1">
              <span className="text-green-deep/60">Farm Network</span>
              <div className="mt-1 h-full w-full rounded bg-beige-warm/60" />
            </div>
          )}
        </div>
      </div>

      {/* Optional side notes panel for the laptop variant */}
      {!isDesktop && (
        <div className="w-[26%] border-l border-cream/40 bg-white p-1.5">
          <p className="mb-1 font-medium text-green-deep">Production Change Drivers</p>
          <div className="flex flex-col gap-1 text-green-deep/60">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-1 w-full rounded bg-beige-warm/70" />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function IMac() {
  return (
    <div className="relative w-full max-w-117.5">
      {/* Screen */}
      <div className="overflow-hidden rounded-[10px] border-[3px] border-green-deep bg-white shadow-2xl" style={{ aspectRatio: '16 / 10' }}>
        <DashboardScreen variant="desktop" />
      </div>
      {/* Stand neck */}
      <div className="mx-auto h-8 w-10 bg-linear-to-b from-neutral-200 to-neutral-300 md:h-10 md:w-14" />
      {/* Stand base */}
      <div className="mx-auto h-2.5 w-28 rounded-full bg-linear-to-b from-neutral-200 to-neutral-300 md:h-3 md:w-40" />
    </div>
  )
}

function MacBook() {
  return (
    <div className="relative w-full max-w-95">
      {/* Screen */}
      <div className="overflow-hidden rounded-t-[10px] border-[3px] border-b-0 border-neutral-800 bg-white shadow-2xl" style={{ aspectRatio: '16 / 10.5' }}>
        <DashboardScreen variant="laptop" />
      </div>
      {/* Base / keyboard deck */}
      <div className="relative">
        <div className="h-3 w-full rounded-b-md bg-linear-to-b from-neutral-300 to-neutral-400 md:h-4" />
        <div className="mx-auto -mt-0.5 h-1.5 w-16 rounded-b-full bg-neutral-400 md:h-2 md:w-20" />
      </div>
    </div>
  )
}

export default function SeeDaisyHero() {
  return (
    <section id="see-daisy" className="relative w-full overflow-hidden bg-green-deep">
      <img
        src={IMAGES.seeDaisyBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        style={{ filter: 'blur(2px) saturate(0.9)' }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-green-deep/50 via-transparent to-green-deep/60" />

      <div className="relative mx-auto flex w-full max-w-363 flex-col items-center gap-12 px-5 py-20 md:px-7.5 md:py-25">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <h2 className="font-display text-[32px] font-light leading-tight tracking-wide text-cream md:text-[56px]">
            See Bloom in action.
          </h2>
          <p className="font-body text-sm text-green-deep-2 md:text-base" style={{ color: '#a9c2b3' }}>
            Ready to implement in 2 weeks
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative flex w-full max-w-275 items-center justify-center"
        >
          <div className="w-[58%] max-w-117.5">
            <IMac />
          </div>
          <div className="ml-[-8%] mt-[8%] w-[46%] max-w-95">
            <MacBook />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
