import { useState } from 'react'
import { menuCategories, menuItems, money, photo } from './favoritesData'
import { FooterDetails } from './ShopSections'

export function FavoriteCards({ items, preview = false }) {
  return (
    <div className={`drinks ${preview ? 'drinks-preview' : 'drinks-all'}`}>
      {items.map((drink, index) => (
        <article className="drink" key={drink.name}>
          <div className="drink-image">
            <img src={photo(drink.image)} alt={drink.name} loading="lazy" />
            {(drink.featured || drink.signature) && (
              <span className="popular">
                {drink.signature ? 'OUR SIGNATURE' : 'HOUSE FAVORITE'}
              </span>
            )}
            <span className="drink-number">{String(index + 1).padStart(2, '0')}</span>
          </div>
          <div className="drink-title">
            <h3>{drink.name}</h3>
            <span>{money(drink.price)}</span>
          </div>
          <p>{drink.note}</p>
        </article>
      ))}
    </div>
  )
}

export function ProductMenu({ preview = false }) {
  const [category, setCategory] = useState('All')
  const filteredItems = menuItems.filter(
    (item) => category === 'All' || item.category === category,
  )
  const visibleItems = preview ? filteredItems.slice(0, 3) : filteredItems

  return (
    <>
      <div className="menu-filters" aria-label="Product categories">
        {menuCategories.map((name) => (
          <button
            key={name}
            className={category === name ? 'active' : ''}
            aria-pressed={category === name}
            onClick={() => setCategory(name)}
          >
            {name}
          </button>
        ))}
      </div>
      <FavoriteCards items={visibleItems} preview={preview} />
      <div className="favorites-actions">
        {preview && (
          <a className="button" href="#/favorites">
            View all <span aria-hidden="true">&rarr;</span>
          </a>
        )}
        <p role="status">
          Showing {visibleItems.length} of {filteredItems.length}{' '}
          {category === 'All' ? 'items' : category.toLowerCase()}
        </p>
      </div>
    </>
  )
}

export function FavoritesPage() {
  return (
    <>
      <header className="site-header">
        <div className="header wrap">
          <a className="footer-brand" href="#home" aria-label="AYRA Juice Bar home">
            AYRA <span>JUICE BAR</span>
          </a>
          <a className="favorites-back" href="#menu">
            &larr; Back to home
          </a>
        </div>
      </header>
      <main className="selection favorites-page">
        <div className="wrap">
          <div className="section-heading">
            <span className="eyebrow">FIND YOUR NEXT FAVORITE</span>
            <h1>
              More to <em>savor.</em>
            </h1>
            <p>
              Explore all our daily favorites, from fresh juices to something from the
              grill.
            </p>
            <p className="favorites-count">{menuItems.length} food and drink favorites</p>
          </div>
          <ProductMenu />
          <p className="sample-note">
            Sample menu and prices. Photos are illustrative. Ask at the bar for today’s
            availability.
          </p>
          <div className="favorites-actions">
            <a className="button" href="#menu">
              &larr; Back to daily favorites
            </a>
          </div>
        </div>
      </main>
      <footer className="favorites-footer">
        <FooterDetails />
      </footer>
    </>
  )
}
