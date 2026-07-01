import { BloomLogo } from './Logo'

const COMPANY_LINKS = ['Articles', 'Our story']
const RESOURCE_LINKS = ['Contact', 'LinkedIn']
const LEGAL_LINKS = ['Legal notice', 'Security', 'Cookies']

export default function Footer() {
  const inert = (e) => e.preventDefault()

  return (
    <footer className="relative w-full bg-green-deep px-5 pb-8 pt-15 text-cream md:px-7.5 md:pb-10 md:pt-20 lg:px-15">
      <div className="mx-auto flex w-full max-w-348 flex-col items-start gap-10 sm:flex-row sm:justify-between sm:gap-6 md:gap-15">
        <div className="flex flex-col gap-5 lg:gap-6">
          <a href="#" onClick={inert} className="text-cream" aria-label="Bloom home">
            <BloomLogo markClassName="h-16 w-16 md:h-20 md:w-20" wordmarkClassName="h-12 text-[2.5rem] md:text-[3rem]" />
          </a>
        </div>

        <div className="flex flex-row gap-10 sm:gap-15 md:gap-20">
          <div className="flex flex-col gap-3 md:gap-4">
            <p className="font-body text-xs uppercase tracking-wide text-lime">Company</p>
            {COMPANY_LINKS.map((link) => (
              <a key={link} href="#" onClick={inert} className="font-body text-sm text-cream/75 transition-colors hover:text-lime">
                {link}
              </a>
            ))}
          </div>
          <div className="flex flex-col gap-3 md:gap-4">
            <p className="font-body text-xs uppercase tracking-wide text-lime">Resources</p>
            {RESOURCE_LINKS.map((link) => (
              <a key={link} href="#" onClick={inert} className="font-body text-sm text-cream/75 transition-colors hover:text-lime">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex w-full max-w-348 flex-col gap-3 border-t border-cream/15 pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-15">
        <p className="font-body text-xs text-cream/60">Copyright © 2026 Bloom. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-body text-xs text-cream/60">
          {LEGAL_LINKS.map((link) => (
            <a key={link} href="#" onClick={inert} className="transition-colors hover:text-lime">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
