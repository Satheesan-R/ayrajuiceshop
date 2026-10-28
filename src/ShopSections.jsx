import { useState } from 'react'
import { directionsUrl, gallery, reviews, shop } from './shopData'
import './ShopSections.css'

const links = [
  ['Home', 'home'],
  ['Menu', 'menu'],
  ['Gallery', 'gallery'],
  ['Location', 'location'],
  ['Contact', 'contact'],
]

export function ShopNavigation({ open = false, onNavigate }) {
  return (
    <nav
      id="navigation"
      className={`shop-navigation${open ? ' is-open' : ''}`}
      aria-label="Main navigation"
    >
      {links.map(([label, id]) => (
        <a key={id} href={`#${id}`} onClick={onNavigate}>
          {label}
        </a>
      ))}
    </nav>
  )
}

export function HeroDetails() {
  return (
    <div className="hero-details">
      <p>Fresh Juice &amp; Night BBQ on the A9, Pallai</p>
      <span>
        Open daily · {shop.openingTime} – {shop.closingTime}
      </span>
      <div className="hero-extra-actions">
        <a href="#menu" className="button">
          View menu
        </a>
        <a
          href={shop.mapsUrl || directionsUrl}
          target="_blank"
          rel="noreferrer"
          className="button button-outline"
        >
          Get directions ↗
        </a>
      </div>
    </div>
  )
}

function ContactLink({ type, children, className = 'button' }) {
  const value = type === 'whatsapp' ? shop.whatsapp : shop.phone
  const href = type === 'whatsapp' ? `https://wa.me/${value}` : `tel:${value}`
  return (
    <a className={className} href={value ? href : '#contact'}>
      {children}
    </a>
  )
}

export function MobileContact() {
  return (
    <div className="mobile-contact">
      <ContactLink type="phone">Call the shop</ContactLink>
      <ContactLink type="whatsapp">WhatsApp ↗</ContactLink>
    </div>
  )
}

export function FreshnessNote() {
  return (
    <div className="freshness-note">
      <span>FRESH FRUIT. WARM WELCOMES.</span>
      <p>
        Stop by on your journey along the A9 for a fresh juice, a quick bite, or a relaxed
        evening BBQ. Made from fresh local fruit, prepared in a clean kitchen.
      </p>
    </div>
  )
}

export function ShopSections() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  return (
    <>
      <section className="gallery-section section-space" id="gallery">
        <div className="wrap">
          <div className="section-heading">
            <span className="eyebrow">LITTLE MOMENTS AT AYRA</span>
            <h2>
              A taste of <em>the place.</em>
            </h2>
            <p>Fresh pours, sizzling evenings, and room to slow down.</p>
          </div>
          <div className="photo-grid">
            {gallery.map((item, index) => (
              <figure key={item.title}>
                {item.src ? (
                  <button
                    aria-label={`Enlarge ${item.title}`}
                    onClick={() => setSelectedPhoto(item)}
                  >
                    <img src={item.src} alt={item.title} loading="lazy" />
                  </button>
                ) : (
                  <div className="photo-placeholder">
                    <span>0{index + 1}</span>
                    <p>Shop photo coming soon</p>
                  </div>
                )}
                <figcaption>{item.title}</figcaption>
              </figure>
            ))}
          </div>
          {shop.videoUrl && (
            <div className="bbq-video">
              <video
                controls
                preload="metadata"
                src={shop.videoUrl}
                aria-label="BBQ sizzling at AYRA"
              />
              <p>A little glimpse of our evening grill.</p>
            </div>
          )}
        </div>
      </section>
      <section className="hours-section section-space" id="hours">
        <div className="wrap hours-layout">
          <div>
            <span className="eyebrow">TAKE A BREAK FROM THE ROAD</span>
            <h2>
              Daytime refreshment.
              <br />
              <em>Evening comfort.</em>
            </h2>
            <p className="late-label">Open late for travellers</p>
          </div>
          <div className="hours-card">
            <div>
              <span>Monday – Sunday</span>
              <strong>
                {shop.openingTime} – {shop.closingTime}
              </strong>
            </div>
            <div>
              <span>Daytime service</span>
              <span>
                {shop.openingTime
                  ? `From ${shop.openingTime}`
                  : 'Opening time to be confirmed'}
              </span>
            </div>
            <div>
              <span>Night BBQ</span>
              <span>{shop.bbqHours || 'Evening serving hours to be confirmed'}</span>
            </div>
            <p>Planning a late stop or a group visit? Get in touch before you travel.</p>
            <ContactLink type="whatsapp">Message us ↗</ContactLink>
          </div>
        </div>
      </section>
      <section className="location-section section-space" id="location">
        <div className="wrap location-layout">
          <div>
            <span className="eyebrow">FIND US ALONG THE A9</span>
            <h2>
              Your next
              <br />
              <em>favorite stop.</em>
            </h2>
            <address>{shop.address}</address>
            <p>Easy parking for cars, vans, buses, and lorries.</p>
            <a
              className="button"
              href={shop.mapsUrl || directionsUrl}
              target="_blank"
              rel="noreferrer"
            >
              Get directions ↗
            </a>
            <p className="map-note">
              Map shows the shared Pachchilapalli location. Exact shop pin to be added.
            </p>
          </div>
          <iframe
            title="Google Map of the shared Pachchilapalli location"
            src={shop.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>
      <section className="reviews-section section-space" id="reviews">
        <div className="wrap">
          <div className="section-heading">
            <span className="eyebrow">FROM OUR LITTLE COMMUNITY</span>
            <h2>
              Good sips. <em>Kind words.</em>
            </h2>
          </div>
          {reviews.length ? (
            <div className="review-grid">
              {reviews.map((review) => (
                <blockquote key={review.name + review.text}>
                  <p>“{review.text}”</p>
                  <footer>
                    <strong>{review.name}</strong>
                    <a href={review.url} target="_blank" rel="noreferrer">
                      {review.source}
                    </a>
                  </footer>
                </blockquote>
              ))}
            </div>
          ) : (
            <div className="review-empty">
              <p>Your experience is part of our story.</p>
              <span>Verified customer reviews will appear here soon.</span>
            </div>
          )}
          {shop.reviewUrl ? (
            <a className="button" href={shop.reviewUrl} target="_blank" rel="noreferrer">
              Leave us a Google review ↗
            </a>
          ) : (
            <p className="review-pending">Google review link coming soon.</p>
          )}
        </div>
      </section>
      <section className="contact-section section-space" id="contact">
        <div className="wrap contact-layout">
          <div>
            <span className="eyebrow">A QUICK HELLO GOES A LONG WAY</span>
            <h2>
              Let’s make it
              <br />
              <em>something special.</em>
            </h2>
            <p>Party and bulk orders, call or message us.</p>
          </div>
          <div className="contact-card">
            <h3>{shop.name}</h3>
            <address>{shop.address}</address>
            {shop.phone ? (
              <a className="phone-number" href={`tel:${shop.phone}`}>
                {shop.phone}
              </a>
            ) : (
              <p>Phone number will be added soon.</p>
            )}
            <div className="contact-actions">
              {shop.phone && <ContactLink type="phone">Call us</ContactLink>}
              {shop.whatsapp && <ContactLink type="whatsapp">WhatsApp ↗</ContactLink>}
            </div>
            {!shop.whatsapp && (
              <p className="contact-pending">
                WhatsApp orders will be available when our contact number is added.
              </p>
            )}
            <div className="social-links">
              {['facebook', 'instagram', 'tiktok'].map((platform) =>
                shop[platform] ? (
                  <a
                    key={platform}
                    href={shop[platform]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {platform} ↗
                  </a>
                ) : (
                  <span key={platform}>{platform} · coming soon</span>
                ),
              )}
            </div>
          </div>
        </div>
      </section>
      {selectedPhoto && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={selectedPhoto.title}
          onClick={() => setSelectedPhoto(null)}
          onKeyDown={(event) => {
            if (event.key === 'Escape') setSelectedPhoto(null)
          }}
        >
          <button
            autoFocus
            aria-label="Close photo"
            onClick={() => setSelectedPhoto(null)}
          >
            ×
          </button>
          <img src={selectedPhoto.src} alt={selectedPhoto.title} />
        </div>
      )}
    </>
  )
}

export function FooterDetails() {
  return (
    <div className="wrap footer-details">
      <address>{shop.address}</address>
      {shop.phone ? (
        <a href={`tel:${shop.phone}`}>{shop.phone}</a>
      ) : (
        <span>Contact number coming soon</span>
      )}
      <div className="footer-socials">
        {[
          ['facebook', 'f'],
          ['instagram', '◎'],
          ['tiktok', '♪'],
        ].map(([platform, icon]) =>
          shop[platform] ? (
            <a
              key={platform}
              href={shop[platform]}
              aria-label={platform}
              target="_blank"
              rel="noreferrer"
            >
              {icon}
            </a>
          ) : null,
        )}
      </div>
    </div>
  )
}
