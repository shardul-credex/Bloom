import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IMAGES } from '../data/images'

const TABS = [
  {
    id: 'demand',
    label: 'Demand Planning',
    desc: 'Anticipate how much supply you will receive and identify exact purchasing gaps based on real-time data.',
    bg: IMAGES.productDemand,
  },
  {
    id: 'supply',
    label: 'Supply Forecasting',
    desc: 'Forecast incoming raw material volumes so purchasing and production never fall out of sync.',
    bg: IMAGES.techFarm,
  },
  {
    id: 'schedule',
    label: 'Master Schedule',
    desc: 'Turn forecasts into a production schedule that respects capacity, shelf life and changeovers.',
    bg: IMAGES.techFactory,
  },
  {
    id: 'preSop',
    label: 'Pre - S&OP',
    desc: 'Walk into your S&OP meeting with one shared, margin-aware plan instead of five spreadsheets.',
    bg: IMAGES.seeBloomScreen,
  },
]

const ROWS = [
  { name: 'Cheddar Mild', vals: ['6.4k', '6.4k', '6.7k'] },
  { name: 'Cheddar Mature', vals: ['2.3k', '2.3k', '2.2k'] },
  { name: 'Butter Unsalted', vals: ['5.6k', '5.4k', '5.2k'] },
  { name: 'SMP Medium Heat', vals: ['3.8k', '3.5k', '3.5k'] },
]

export default function Product() {
  const [activeId, setActiveId] = useState('demand')
  const active = TABS.find((t) => t.id === activeId)

  return (
    <section id="product" className="relative w-full overflow-hidden bg-cream px-5 py-25 md:px-7.5 md:py-30">
      <div className="mx-auto flex w-full max-w-363 flex-col gap-6 2xl:flex-row 2xl:items-center 2xl:justify-between 2xl:gap-10">
        <div className="flex flex-col gap-6 2xl:w-150 2xl:shrink-0">
          <div className="flex flex-col gap-3">
            <p className="font-body text-lg text-green-deep md:text-xl">PRODUCT</p>
            <h2 className="max-w-118.5 font-display text-2xl font-light leading-tight tracking-wide text-lime md:text-[42px]">
              The decision layer for food processors
            </h2>
          </div>

          <ul className="-mx-5 flex snap-x snap-mandatory items-stretch gap-2 overflow-x-auto px-5 pb-1 md:-mx-7.5 md:px-7.5 2xl:mx-0 2xl:flex-col 2xl:gap-4 2xl:overflow-visible 2xl:p-0 scrollbar-none" role="tablist">
            {TABS.map((tab) => (
              <li key={tab.id} className="shrink-0 snap-start 2xl:w-full">
                <button
                  type="button"
                  role="tab"
                  aria-selected={activeId === tab.id}
                  onClick={() => setActiveId(tab.id)}
                  className={`flex w-full items-center whitespace-nowrap rounded-full border border-lime px-4 py-2.5 text-left font-body text-sm transition-colors duration-300 2xl:min-h-25 2xl:flex-col 2xl:items-start 2xl:justify-center 2xl:gap-2 2xl:whitespace-normal 2xl:rounded-none 2xl:px-5 2xl:py-4 2xl:text-lg ${
                    activeId === tab.id ? 'bg-lime text-green-deep' : 'bg-cream text-lime hover:bg-lime/10'
                  }`}
                >
                  <span>{tab.label}</span>
                  {activeId === tab.id && (
                    <span className="hidden font-body text-sm font-normal leading-snug text-green-deep 2xl:block">
                      {tab.desc}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative h-82.5 w-full overflow-hidden rounded-3xl sm:h-107.5 md:h-132.5 lg:h-162.5 2xl:h-175 2xl:w-175 2xl:shrink-0 2xl:rounded-[20px]">
          <AnimatePresence mode="wait">
            <motion.img
              key={active.bg}
              src={active.bg}
              alt={active.label}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-green-deep/35" />

          <div className="absolute left-4 top-4 flex size-12 items-center justify-center rounded-2xl bg-lime md:left-5 md:top-5 md:size-17.5">
            <span className="font-display text-lg text-green-deep md:text-2xl">B</span>
          </div>

          {/* Floating mock data card */}
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute bottom-6 left-1/2 w-[88%] max-w-95 -translate-x-1/2 rounded-2xl bg-white/10 p-5 backdrop-blur-md md:bottom-10 md:left-10 md:translate-x-0"
          >
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded bg-cream px-2 py-0.5 font-body text-[10px] uppercase text-green-deep">
                {active.label}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {ROWS.map((row) => (
                <div key={row.name} className="flex items-center justify-between border-b border-white/15 pb-2">
                  <span className="rounded bg-lime px-2 py-1 font-body text-[10px] uppercase text-green-deep">
                    {row.name}
                  </span>
                  <div className="flex gap-1.5">
                    {row.vals.map((v, i) => (
                      <span
                        key={v + i}
                        className="rounded bg-white/10 px-1.5 py-1 font-body text-[10px] text-cream"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 flex justify-between font-body text-[9px] uppercase tracking-wide text-cream/70">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
