import { useState } from 'react'
import { motion } from 'framer-motion'
import { BloomLogo } from './Logo'
import { IMAGES } from '../data/images'

const STEPS = [
  {
    title: 'What Bloom ingests',
    body: 'Spot prices. Customer orders. Weather feeds. Seasonal patterns. Your ERP data.',
  },
  {
    title: 'How it thinks',
    body: 'Our models connect supply, demand and margin variables in real time to show you a recommendation.',
  },
  {
    title: 'What you get',
    body: 'A clear recommendation: what to produce, when, at what volume — with the margin impact calculated.',
  },
]

const NODES = [
  { label: 'Weather', img: IMAGES.techSatellite, style: { top: '6%', right: '8%' } },
  { label: 'Production', img: IMAGES.techFactory, style: { top: '40%', left: '2%' } },
  { label: 'Market', img: IMAGES.techMarket, style: { top: '58%', right: '4%' } },
]

export default function Technology() {
  const [active, setActive] = useState(2)

  return (
    <section id="technology" className="relative w-full bg-cream px-5 py-25 md:px-7.5 md:py-30">
      <div className="mx-auto flex w-full max-w-363 flex-col gap-3 md:flex-row md:items-start md:justify-between md:gap-10">
        <div className="flex flex-col gap-3">
          <p className="font-body text-sm uppercase tracking-wide text-green-deep md:text-base">Technology</p>
          <h2 className="max-w-118.5 font-display text-2xl font-light leading-tight tracking-wide text-lime md:text-[42px]">
            We meet you at your current data maturity.
          </h2>
        </div>
        <p className="max-w-139 font-body text-sm text-green-deep md:text-base">
          Bloom analyses the scattered data points you might not otherwise have the time or tools to monitor, and
          turns noise into your competitive advantage.
        </p>
      </div>

      <div className="mx-auto mt-16 flex w-full max-w-363 flex-col items-stretch gap-10 md:flex-row md:items-center">
        {/* Central visual */}
        <div className="relative order-2 mx-auto aspect-19/10 w-full max-w-250 flex-1 md:order-2">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex aspect-square w-[44%] max-w-95 items-center justify-center rounded-[18%] bg-lime shadow-xl">
              <BloomLogo stacked markClassName="h-9 w-9 text-green-deep" ClassName="h-5 text-xl text-green-deep" className="text-green-deep" />
            </div>
          </div>

          {NODES.map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="absolute hidden w-32.5 flex-col items-center gap-2 md:flex"
              style={node.style}
            >
              <img
                src={node.img}
                alt={node.label}
                className="h-16 w-16 rounded-full border-2 border-lime object-cover"
              />
              <span className="rounded-full bg-green-deep px-3 py-1 text-xs text-cream">{node.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Stepper — all steps always visible, active one highlighted */}
        <ol className="order-1 flex w-full shrink-0 flex-col gap-6 md:order-1 md:w-75">
          {STEPS.map((step, i) => {
            const isActive = active === i
            return (
              <li key={step.title} className="flex w-full items-start gap-4">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className={`flex size-11 shrink-0 items-center justify-center rounded-full border-2 font-display text-lg transition-colors duration-300 ${
                    isActive
                      ? 'border-lime bg-lime text-cream'
                      : 'border-lime/50 bg-transparent text-lime/60 hover:border-lime hover:text-lime'
                  }`}
                >
                  {i + 1}
                </button>
                <div className="flex flex-1 flex-col justify-center pt-1.5 text-left">
                  <p
                    className={`font-body text-base transition-colors duration-300 ${
                      isActive ? 'font-medium text-green-deep' : 'text-green-deep/40'
                    }`}
                  >
                    {step.title}
                  </p>
                  <p
                    className={`mt-1 font-body text-sm leading-snug transition-colors duration-300 ${
                      isActive ? 'text-green-deep/75' : 'text-green-deep/30'
                    }`}
                  >
                    {step.body}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
