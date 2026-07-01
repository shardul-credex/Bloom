import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { BloomLogo } from './Logo'

const NAV_LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'Articles', href: '#news' },
  { label: 'Our story', href: '#' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const inert = (e) => e.preventDefault()

  return (
    <>
      {/* Solid bar — appears once scrolled past the hero */}
      <header
        className={`fixed inset-x-0 top-6 z-40 transition-all duration-300 ${
          scrolled ? 'translate-y-0 bg-green-deep shadow-lg opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="mx-auto flex h-16 w-full max-w-378 items-center justify-between px-5 md:h-18 md:px-7.5">
          <a href="#" onClick={inert} className="flex items-center gap-2.5 text-cream" aria-label="Bloom home">
            <BloomLogo markClassName="h-7 w-7" wordmarkClassName="h-6 text-[1.5rem]" />
          </a>
          <nav className="hidden items-center gap-8 font-body text-sm text-cream lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} onClick={link.href === '#' ? inert : undefined} className="transition-opacity hover:opacity-80">
                {link.label}
              </a>
            ))}
            <a href="#" onClick={inert} className="rounded-full bg-cream px-4 py-2 text-sm leading-none text-green-deep transition-colors hover:bg-cream-muted">
              Login
            </a>
          </nav>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex size-11 items-center justify-center rounded-full text-cream transition-colors hover:bg-cream/10 lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Floating pill nav — sits over the transparent top of the hero */}
      <header className={`absolute inset-x-0 top-0 z-40 h-24 md:h-25 ${scrolled ? 'pointer-events-none opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
        <div className="relative mx-auto h-full w-full max-w-378">
          <a href="#" onClick={inert} className="absolute left-4 top-5 flex items-center gap-2.5 text-cream md:left-9.5 md:top-6" aria-label="Bloom home">
            <BloomLogo markClassName="h-9 w-9" wordmarkClassName="h-7 text-2xl md:text-[28px]" />
          </a>

          <nav
            className="absolute left-1/2 top-6 hidden -translate-x-1/2 rounded-full border border-cream px-7 py-2 lg:block"
            aria-label="Primary"
          >
            <ul className="flex items-center gap-10 font-body text-sm text-cream">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a href={link.href} onClick={link.href === '#' ? inert : undefined} className="transition-opacity hover:opacity-80">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#"
            onClick={inert}
            className="absolute right-4 top-5 hidden rounded-full bg-cream px-4 py-2 text-sm leading-none text-green-deep transition-colors hover:bg-cream-muted md:right-9.5 md:top-6 lg:block"
          >
            Login
          </a>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full text-cream transition-colors hover:bg-cream/10 md:right-7.5 lg:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-x-0 top-0 z-50 border-t border-cream/10 bg-green-deep px-5 py-6 lg:hidden">
          <div className="mb-4 flex justify-end">
            <button type="button" aria-label="Close menu" onClick={() => setMobileOpen(false)} className="flex size-11 items-center justify-center rounded-full text-cream hover:bg-cream/10">
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col gap-5 font-body text-base text-cream">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} onClick={link.href === '#' ? inert : () => setMobileOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="#" onClick={inert} className="w-fit rounded-full bg-cream px-4 py-2 text-green-deep">
              Login
            </a>
          </nav>
        </div>
      )}
    </>
  )
}
