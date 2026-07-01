import { motion } from 'framer-motion'
import { IMAGES } from '../data/images'

export default function Hero() {
  return (
    <section className="relative h-svh min-h-150 w-full overflow-hidden bg-green-deep md:min-h-175">
      <div className="absolute inset-0">
        <img
          src={IMAGES.heroBg}
          alt="Food processing facility"
          className="h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-t from-green-deep via-green-deep/60 to-green-deep/20" />
      </div>

      <div className="absolute inset-x-0 bottom-[8%] mx-auto flex w-full max-w-363 flex-col gap-6 px-5 md:px-7.5 lg:flex-row lg:items-end lg:gap-5">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="font-display font-light leading-[1.1] text-lime text-[36px] sm:text-[44px] md:text-[52px] lg:flex-1 lg:text-[64px]"
        >
          Predict Supply.
          <br />
          Forecast Demand.
          <br />
          Plan Production.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6 lg:flex-1 lg:gap-5"
        >
          <p className="max-w-86 font-body text-[15px] leading-snug text-cream md:text-base">
            Reduce forecasting inaccuracy by up to 80% to drive accurate production plans and accelerate S&amp;OP readiness.
          </p>
          <a
            href="#demo"
            className="inline-flex min-h-11 items-center justify-center whitespace-nowrap rounded-full border border-cream bg-green-deep px-5 py-3 text-[15px] text-cream transition-colors hover:bg-green-deep-2 md:px-4 md:py-2 md:text-sm"
          >
            Book a demo
          </a>
        </motion.div>
      </div>
    </section>
  )
}
