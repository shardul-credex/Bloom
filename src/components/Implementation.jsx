import { motion } from 'framer-motion'
import { IMAGES } from '../data/images'

const PHASES = [
  {
    day: 'Day 1',
    title: 'Integration & Ingestion',
    img: IMAGES.implDay1,
    items: [
      { h: 'Connect your data', p: 'Import ERP data directly into Bloom.' },
      { h: 'Add external inputs', p: 'We bring in market, weather and demand drivers.' },
      { h: 'Start the engine', p: 'Your custom AI models begin training immediately.' },
    ],
  },
  {
    day: 'Day 7',
    title: 'Testing & Tuning',
    img: IMAGES.implDay7,
    items: [
      { h: 'Bloom learns your business', p: 'We test models against real-world scenarios.' },
      { h: 'Fill the gaps', p: 'We identify missing inputs and close key gaps.' },
      { h: 'Refine and validate', p: 'Forecasts are tuned to your plant and products.' },
    ],
  },
  {
    day: 'Day 14',
    title: "Ask why you didn't switch sooner",
    img: IMAGES.implDay14,
    items: [
      { h: 'Automate production', p: 'Generate more accurate production schedules and forecasts.' },
      { h: 'Tailor your experience', p: 'Your dashboard is tailored to your team through onboarding.' },
      { h: 'Keep final control', p: 'Your planners stay in charge of final decisions.' },
    ],
  },
]

export default function Implementation() {
  return (
    <section id="implementation" className="relative w-full overflow-hidden bg-cream px-5 py-25 md:px-7.5 md:py-20">
      <div className="mx-auto flex w-full max-w-363 flex-col items-center gap-10">
        <div className="flex flex-col items-center text-center">
          <p className="font-body text-lg text-green-deep md:text-xl">IMPLEMENTATION</p>
          <h2 className="mt-2 max-w-162.5 font-display text-2xl font-light leading-tight tracking-wide text-lime md:text-[42px]">
            Less than a month
            <br />
            to feel the results
          </h2>
        </div>

        {/* Desktop timeline */}
        <div className="hidden w-full grid-cols-3 gap-8 md:grid">
          {PHASES.map((phase, i) => (
            <motion.div
              key={phase.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex w-full flex-col items-center gap-4"
            >
              <div className="flex w-full items-center justify-center rounded-full border border-cream bg-green-deep py-2.5 text-cream">
                <div className="flex flex-col items-center text-center">
                  <p className="mb-3 font-display text-[28px] font-light leading-none tracking-wide md:mb-5 md:text-4xl">
                    {phase.day}
                  </p>
                  <p className="px-3 font-body text-sm leading-snug md:text-base">{phase.title}</p>
                </div>
              </div>

              <div className="group relative flex h-105 w-full max-w-99 flex-col items-center gap-4 overflow-hidden rounded-2xl p-6">
                <img
                  src={phase.img}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex w-full flex-col gap-3">
                  {phase.items.map((item) => (
                    <div key={item.h} className="w-full bg-lime p-3">
                      <p className="font-body text-green-deep">
                        <span className="block text-lg leading-snug">{item.h}</span>
                        <span className="mt-1 block text-sm leading-snug">{item.p}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="relative flex w-full flex-col md:hidden">
          <div aria-hidden="true" className="pointer-events-none absolute left-4.75 top-0 bottom-0 w-px bg-lime/40" />
          {PHASES.map((phase, i) => (
            <div key={phase.day} className="relative flex gap-4 pb-7 last:pb-0">
              <div className="relative z-1 mt-1.5 size-3.5 shrink-0 rounded-full border-2 border-lime bg-cream" />
              <div className="flex flex-1 flex-col gap-3">
                <div className="inline-flex w-fit items-baseline gap-2.5 rounded-full border border-lime/60 px-4 py-2.5 text-lime">
                  <span className="font-display text-xl font-light leading-none tracking-wide">{phase.day}</span>
                  <span className="font-body text-xs leading-none">{phase.title}</span>
                </div>
                <div className="flex flex-col gap-2.5">
                  {phase.items.map((item) => (
                    <div key={item.h} className="w-full bg-lime p-3">
                      <p className="font-body text-green-deep">
                        <span className="block text-[15px] leading-tight">{item.h}</span>
                        <span className="mt-1 block text-[13px] leading-snug">{item.p}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
