import { useEffect, useState } from 'react'
import { ProductMenu, FavoritesPage } from './Favorites'
import './App.css'
import {
  FooterDetails,
  FreshnessNote,
  HeroDetails,
  ShopNavigation,
  ShopSections,
} from './ShopSections'

const copyrightYear = new Date().getFullYear()

// Shared illustrations for the logo and story section.
function Art({ kind = 'brand', className = '' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {kind === 'cup' ? (
        <>
          <ellipse cx="47" cy="35" rx="30" ry="9" />
          <path d="M17 35c2 30 10 40 30 40s27-12 30-40M77 40c24-7 20 22-6 22" />
          <ellipse cx="47" cy="80" rx="37" ry="7" />
          <path d="M29 35c7-13 12 12 19-2s12 12 18 0M38 20c-8-8 8-9 0-17M54 20c-8-8 8-9 0-17" />
        </>
      ) : kind === 'bake' ? (
        <>
          <path d="M10 70C3 49 30 20 49 22c22-5 44 17 42 38l-17 9-11-8-14 9-13-2-11 12Z" />
          <path d="M22 43c15 0 24 14 27 27M36 29c16 5 25 17 27 32M51 24c19 10 22 22 23 45M12 57c14-2 22 5 24 11M65 28c14 9 15 22 17 36" />
        </>
      ) : kind === 'chair' ? (
        <>
          <path d="M25 53V26c0-16 50-16 50 0v27M24 39C7 30 9 61 14 77h72c6-23 6-45-11-38M25 53h50v13H25zM25 43v23M75 43v23M18 77v14h6l3-14M74 77l3 14h5V77" />
        </>
      ) : (
        <>
          <ellipse cx="49" cy="20" rx="23" ry="8" />
          <path d="m26 20 7 61c2 9 31 9 33 0l7-61M31 42c11 9 24 0 38 4M38 29l4 40M26 23C8 28 10 79 31 88M74 23c14 12 11 45-2 58" />
          <ellipse cx="49" cy="20" rx="15" ry="4" />
          <path d="M51 87c-2-19 18-22 23-17-1 17-10 23-23 17Zm0 0 18-12M48 85c-20-15-23 5-14 9 7 4 13 0 14-9Z" />
        </>
      )}
    </svg>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)
  const [isFavoritesPage, setIsFavoritesPage] = useState(
    () => window.location.hash === '#/favorites',
  )
  useEffect(() => {
    function updatePage() {
      setIsFavoritesPage(window.location.hash === '#/favorites')
      setOpen(false)
    }
    window.addEventListener('hashchange', updatePage)
    return () => window.removeEventListener('hashchange', updatePage)
  }, [])
  useEffect(() => {
    document.title = isFavoritesPage
      ? 'Daily Favorites ? AYRA Juice Bar'
      : 'AYRA Juice Bar ? Unwind in Every Sip'
    if (isFavoritesPage) window.scrollTo(0, 0)
    else if (window.location.hash) {
      document.getElementById(window.location.hash.slice(1))?.scrollIntoView()
    }
  }, [isFavoritesPage])
  if (isFavoritesPage) return <FavoritesPage />
  return (
    <>
      <header className="site-header">
        <div className="header wrap">
          <a href="#home" className="brand" aria-label="Ayra Juice Bar home">
            <Art />
            <strong>AYRA</strong>
            <span>JUICE BAR</span>
          </a>
          <ShopNavigation open={open} onNavigate={() => setOpen(false)} />
          <div className="header-actions">
            <button
              className="menu-toggle"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              aria-controls="navigation"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                '\u00d7'
              ) : (
                <>
                  <i />
                  <i />
                </>
              )}
            </button>
          </div>
        </div>
      </header>
      <section className="hero" id="home">
        <div className="hero-photo" />
        <main className="hero-content wrap">
          <div className="hero-copy">
            <span className="eyebrow">HANDCRAFTED. UNHURRIED. ALL YOURS.</span>
            <h1>
              Unwind in
              <br />
              <em>every sip.</em>
            </h1>
            <p>
              A little indulgence. A moment to yourself.
              <br />
              Discover handcrafted drinks that brighten your day.
            </p>
            <HeroDetails />
          </div>
        </main>
        <div className="hero-bottom wrap">
          <span>GOOD DRINKS. BETTER MOMENTS.</span>
          <a href="#story">
            Take a little scroll <span>&darr;</span>
          </a>
        </div>
      </section>
      <section className="story" id="story">
        <div className="wrap">
          <div className="story-intro">
            <div>
              <span className="eyebrow">WELCOME TO YOUR HAPPY PLACE</span>
              <h2>
                Your daily
                <br />
                <em>cozy escape.</em>
              </h2>
            </div>
            <p>
              Built on a simple love for good drinks, AYRA is a warm little sanctuary for
              your everyday. From your first morning coffee to an afternoon treat, every
              glass is made with care. Come as you are, settle in, and savor the simple
              moments.
            </p>
          </div>
          <div className="features">
            {[
              {
                icon: 'cup',
                title: 'Crafted with care',
                text: 'Thoughtfully chosen ingredients. Beautifully balanced flavors. A little love in every pour.',
              },
              {
                icon: 'bake',
                title: 'Fresh little pleasures',
                text: 'From comforting classics to something new, find the perfect companion to your day.',
              },
              {
                icon: 'chair',
                title: 'Make yourself at home',
                text: 'Warm welcomes, soft corners, and all the time you need. This is your place to unwind.',
              },
            ].map((f) => (
              <article key={f.title}>
                <Art kind={f.icon} />
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
          <FreshnessNote />
        </div>
      </section>
      <section className="selection" id="menu">
        <div className="wrap">
          <div className="section-heading">
            <span className="eyebrow">A LITTLE SOMETHING YOU’LL LOVE</span>
            <h2>
              More to <em>savor.</em>
            </h2>
            <p>
              Our daily favorites: fresh juices, milkshakes, coffee, BBQ, and quick bites.
            </p>
          </div>
          <ProductMenu preview />
          <p className="menu-footnote">
            A good day starts with your favorite drink. <em>What’s yours?</em>
          </p>
          <p className="sample-note">
            Sample menu & prices. Ask at the bar for today’s availability.
          </p>
        </div>
      </section>
      <ShopSections />
      <footer>
        <FooterDetails />
        <div className="wrap footer-inner">
          <a className="footer-brand" href="#home">
            AYRA <span>JUICE BAR</span>
          </a>
          <p>Made with care. Enjoyed slowly.</p>
          <span>© {copyrightYear} AYRA. All rights reserved.</span>
          <a href="#home" className="back-top" aria-label="Back to top">
            ?
          </a>
        </div>
      </footer>
    </>
  )
}
