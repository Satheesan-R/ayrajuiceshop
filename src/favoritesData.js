import { menuGroups } from './shopData.js'

// Edit drink names, descriptions, prices, and photos below.
export const photo = (id, w = 700) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`
export const drinks = [
  {
    name: 'Cinnamon Cloud',
    note: 'Espresso, silky milk & a little cinnamon',
    price: 850,
    image: 'photo-1461023058943-07fcbe16d735',
  },
  {
    name: 'Iced Dirty Matcha',
    note: 'Earthy matcha meets a bold espresso shot',
    price: 950,
    image: 'photo-1515823064-d6e0c04616a7',
  },
  {
    name: 'Velvet Latte',
    note: 'Our classic, slow-sipped kind of comfort',
    price: 800,
    image: 'photo-1517701604599-bb29b565090c',
  },
  {
    name: 'Mint Espresso',
    note: 'Rich chocolate with a refreshing mint finish',
    price: 900,
    image: 'photo-1570968915860-54d5c301fa9f',
  },
  {
    name: 'Pallai Special Mango Juice',
    note: 'Sweet mango, freshly blended for a tropical pause.',
    price: 450,
    image: 'photo-1600271886742-f049cd451bba',
  },
  {
    name: 'Fresh Watermelon',
    note: 'Light, cooling watermelon served ice cold.',
    price: 350,
    image: 'photo-1613478223719-2ab802602423',
  },
  {
    name: 'Lime & Mint',
    note: 'Fresh lime with a refreshing hint of mint.',
    price: 300,
    image: 'photo-1513558161293-cdaf765edfd7',
  },
  {
    name: 'Classic Faluda',
    note: 'Rose milk, jelly, and a scoop of ice cream.',
    price: 550,
    image: 'photo-1572490122747-3968b75cc699',
  },
  {
    name: 'Chocolate Milkshake',
    note: 'Creamy chocolate blended into a sweet treat.',
    price: 500,
    image: 'photo-1572490122747-3968b75cc699',
  },
  {
    name: 'Mango Milkshake',
    note: 'Ripe mango with a smooth, creamy finish.',
    price: 500,
    image: 'photo-1622597467836-f3285f2131b8',
  },
  {
    name: 'Iced Vanilla Coffee',
    note: 'Chilled coffee with milk and mellow vanilla.',
    price: 850,
    image: 'photo-1517701604599-bb29b565090c',
  },
  {
    name: 'Cold Brew',
    note: 'Slow-steeped coffee with a rich, smooth finish.',
    price: 750,
    image: 'photo-1461023058943-07fcbe16d735',
  },
]
export const money = (n) => `Rs. ${n.toLocaleString()}`

// One catalog feeds the home preview, category filters, and full menu page.
const categoryImages = {
  BBQ: 'photo-1544025162-d76694265947',
  'Quick Foods': 'photo-1568901346375-23c9450c58cd',
}

export const menuItems = [
  ...drinks.map((drink) => {
    const group = menuGroups.find((group) =>
      group.items.some((item) => item.name === drink.name),
    )
    return {
      ...drink,
      category: group?.name || 'Coffee',
      signature: drink.name === 'Pallai Special Mango Juice',
      featured: drink.name === 'Cinnamon Cloud',
    }
  }),
  ...menuGroups.flatMap((group) =>
    group.items
      .filter((item) => !drinks.some((drink) => drink.name === item.name))
      .map((item) => ({
        ...item,
        note: item.description,
        category: group.name,
        image: categoryImages[group.name],
      })),
  ),
]

export const menuCategories = ['All', 'Coffee', ...menuGroups.map((group) => group.name)]
