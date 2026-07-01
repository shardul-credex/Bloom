import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingDown, Zap, Coins } from 'lucide-react'

const CARDS = [
  {
    number: '1.',
    label: 'Smarter Forecasting',
    stat: '80%',
    statSub: 'reduction in margin of error',
    icon: TrendingDown,
    detailTitle: '80% reduction in forecast inaccuracy',
    detail:
      'Make confident, data-driven decisions that minimize waste, streamline your supply chain, and ensure you always meet demand.',
  },
  {
    number: '2.',
    label: 'Improved Efficiency',
    stat: '10x',
    statSub: 'faster workflows by using full capabilities',
    icon: Zap,
    detailTitle: '10x faster workflows by using full capabilities',
    detail:
      'Eliminate bottlenecks and automate your most repetitive tasks so your team can focus on high-value, strategic work.',
  },
  {
    number: '3.',
    label: 'Proven Profitability',
    stat: '5x',
    statSub: 'return on investment',
    icon: Coins,
    detailTitle: '5x return on investment',
    detail:
      'Experience rapid time-to-value with an intelligent platform designed to lower operational costs and drive your bottom line.',
  },
]

export default function Industries() {
  const [hovered, setHovered] = useState(null)
  const inert = (e) => e.preventDefault()

  return (
    <section id="industries" className="relative w-full overflow-hidden bg-beige-warm px-5 py-22.5 md:px-7.5 md:py-20 lg:py-30">
      <div className="mx-auto flex w-full max-w-363 flex-col gap-8 md:gap-14">
        <div className="flex flex-col items-center gap-2 text-center md:gap-4">
          <p className="font-body text-sm uppercase tracking-wide text-green-deep md:text-xl md:normal-case md:tracking-normal">
            WHY BLOOM?
          </p>
          <h2 className="max-w-167.75 font-display text-2xl font-light leading-tight tracking-wide text-lime md:text-[42px]">
            The outcomes of using BLOOM.
          </h2>
        </div>

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-10">
          {CARDS.map((card, i) => {
            const Icon = card.icon
            const isHovered = hovered === i
            return (
              <li key={card.label}>
                <a
                  href="#"
                  onClick={inert}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="group relative block aspect-428/293 w-full overflow-hidden rounded-2xl bg-green-deep outline-none transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  <div className="absolute left-5 top-4 z-10 font-body text-base text-cream md:text-xl">
                    <span>{card.number}</span> <span>{card.label}</span>
                  </div>

                  <motion.div
                    animate={{ opacity: isHovered ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 pt-10"
                  >
                    <Icon size={40} className="text-lime" strokeWidth={1.5} />
                    <p className="font-display text-4xl font-light leading-none tracking-wide text-lime md:text-5xl">
                      {card.stat}
                    </p>
                    <p className="max-w-55 text-center font-display text-base font-light leading-tight tracking-wide text-lime md:text-xl">
                      {card.statSub}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={false}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="pointer-events-none absolute inset-x-5 bottom-5 top-16 hidden flex-col gap-4 md:flex"
                  >
                    <h3 className="font-display text-2xl font-light leading-tight tracking-wide text-lime md:text-[32px]">
                      {card.detailTitle}
                    </h3>
                    <p className="font-body text-sm font-light leading-snug text-cream md:text-base">
                      {card.detail}
                    </p>
                  </motion.div>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
