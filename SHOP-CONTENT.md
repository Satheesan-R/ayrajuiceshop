# Editing AYRA's shop content

The combined **More to savor** section uses photo cards and category filters.
`ProductMenu` in `src/Favorites.jsx` powers both the home preview and full menu page.
The full catalog combines drinks from `src/favoritesData.js` with the food groups
in `src/shopData.js`. Matching product names are merged to avoid duplicates.
Photos for the sample BBQ and quick food cards are illustrative.

The original hero and story remain in `src/App.jsx`.
Edit `src/favoritesData.js` for the twelve daily favorites and sample prices.
The home page previews three favorites. View all opens `#/favorites`, a separate
page displaying the original four favorites and eight additional drinks.
The additional shop sections are in `src/ShopSections.jsx`, with styles in
`src/ShopSections.css`.

Edit `src/shopData.js` to update:

- Phone and WhatsApp numbers, opening hours, and the address.
- The exact Google Maps and Google review links when available.
- Facebook, Instagram, and TikTok links.
- The four menu categories, descriptions, and sample LKR prices.
- Real gallery photos and a BBQ video.
- Genuine customer reviews, including the first name and source link.

Place your eight real photos in `public/gallery/`, then enter paths such as
`/gallery/shop-night.jpg` into the gallery's `src` fields. Empty fields show honest
photo placeholders. Add a public video path to `videoUrl` to show the video player.

The map currently shows the A9 Road, Pallai area, not a verified shop pin.
Both directions buttons use `mapsUrl` automatically when you add the shop link.

The new food menu is illustrative. Confirm the items and prices before removing
the sample menu labels. Both menus are for browsing only. Daily favorites initially shows three items;
the View all button opens the complete favorites page. There is no basket or
online checkout.

Format changes with `npm run format`.
