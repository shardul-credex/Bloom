import { ArrowUpRight } from 'lucide-react'
import { IMAGES } from '../data/images'

const ARTICLES = [
  { date: 'April 26, 2026', title: 'Bloom Mission Story.', img: IMAGES.newsMission },
  { date: 'April 22, 2026', title: 'Kerry Dairy reduces margin of error by up to 60%.', img: IMAGES.newsKerry },
  { date: 'March 15, 2026', title: "Why we're spending our heartbeats building Bloom.", img: IMAGES.newsWhy },
]

export default function News() {
  const inert = (e) => e.preventDefault()

  return (
    <section id="news" className="relative w-full overflow-hidden bg-green-deep">
      <img src={IMAGES.newsBg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-15" />
      <div className="absolute inset-0 bg-green-deep/40" />

      <div className="relative py-20 md:py-25 lg:py-30">
        <div className="mx-auto mb-10 flex w-full max-w-335 flex-col gap-3 px-5 sm:px-7.5 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-body text-xs uppercase tracking-[2px] text-lime">Articles</p>
            <h2 className="font-display text-[34px] font-light leading-tight tracking-wide text-cream md:text-[52px]">
              From the team
            </h2>
          </div>
          <a
            href="#"
            onClick={inert}
            className="inline-flex items-center gap-2 self-start font-body text-sm text-cream/80 transition-colors hover:text-lime md:self-end"
          >
            <span>See all articles</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <ul className="mx-auto flex w-full max-w-335 snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:gap-6 sm:px-7.5 lg:gap-8 scrollbar-none">
          {ARTICLES.map((article) => (
            <li key={article.title} className="w-[82%] flex-none snap-start sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-32px)/3)]">
              <a href="#" onClick={inert} className="group relative block w-full">
                <article className="relative aspect-4/3 w-full overflow-hidden rounded-3xl bg-green-deep md:rounded-[30px]">
                  <img
                    src={article.img}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-green-deep/85 via-green-deep/30 to-transparent" />
                  <div className="absolute right-5 top-5 flex size-10 items-center justify-center rounded-full bg-green-deep text-cream transition-colors duration-500 group-hover:bg-lime group-hover:text-green-deep">
                    <ArrowUpRight size={18} />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-end gap-2 p-6">
                    <p className="font-body text-sm leading-none text-lime">{article.date}</p>
                    <h3 className="font-display text-[22px] font-light leading-tight tracking-wide text-cream md:text-[26px]">
                      {article.title}
                    </h3>
                  </div>
                </article>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
