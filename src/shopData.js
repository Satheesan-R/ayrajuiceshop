// Replace empty contact fields with your real shop details.
// WhatsApp numbers use the country code without a +, spaces, or leading zero.
export const shop = {
  name: 'AYRA Juice Bar',
  address: 'A9 Road, Pallai, Jaffna',
  phone: '+94769400150',
  whatsapp: '94769400150',
  mapsUrl: '',
  reviewUrl: '',
  facebook: '',
  instagram: '',
  tiktok: '',
  openingTime: '9:00 AM',
  closingTime: '10:00 PM',
  bbqHours: '',
  videoUrl: '',
}

export const directionsUrl =
  'https://www.google.com/maps/dir/?api=1&destination=' + encodeURIComponent(shop.address)

// Illustrative prices: update these before accepting customer orders.
export const menuGroups = [
  {
    name: 'Fresh Juices',
    items: [
      {
        name: 'Pallai Special Mango Juice',
        description: 'Sweet mango, freshly blended.',
        price: 450,
        signature: true,
      },
      {
        name: 'Fresh Watermelon',
        description: 'Light, refreshing watermelon juice.',
        price: 350,
      },
      {
        name: 'Lime & Mint',
        description: 'Zesty lime with a cooling mint finish.',
        price: 300,
      },
    ],
  },
  {
    name: 'Milkshakes & Faluda',
    items: [
      {
        name: 'Classic Faluda',
        description: 'Rose milk, jelly, and a scoop of ice cream.',
        price: 550,
      },
      {
        name: 'Chocolate Milkshake',
        description: 'Creamy chocolate, blended ice cold.',
        price: 500,
      },
      {
        name: 'Mango Milkshake',
        description: 'Ripe mango with a creamy finish.',
        price: 500,
      },
    ],
  },
  {
    name: 'BBQ',
    items: [
      {
        name: 'BBQ Chicken',
        description: 'Flame-grilled chicken with our house marinade.',
        price: 1200,
      },
      {
        name: 'Chicken Skewers',
        description: 'Grilled chicken and vegetables.',
        price: 750,
      },
      {
        name: 'BBQ Sharing Platter',
        description: 'A generous grilled selection to share.',
        price: 2800,
      },
    ],
  },
  {
    name: 'Quick Foods',
    items: [
      {
        name: 'Chicken Burger',
        description: 'Chicken, crisp salad, and house sauce.',
        price: 650,
      },
      {
        name: 'Vegetable Sandwich',
        description: 'Fresh vegetables in toasted bread.',
        price: 350,
      },
      {
        name: 'French Fries',
        description: 'Golden fries with a little sea salt.',
        price: 400,
      },
    ],
  },
]

// Add real customer reviews only, with permission to display them.
// Example shape: { name: 'First name', text: 'Review text', source: 'Google', url: '...' }
export const reviews = []

// Replace these empty sources with real shop photos, such as /gallery/shop-night.jpg.
export const gallery = [
  { title: 'Fresh fruit, ready to blend', src: '' },
  { title: 'Our signature mango juice', src: '' },
  { title: 'Juices made to order', src: '' },
  { title: 'A little faluda indulgence', src: '' },
  { title: 'BBQ on the grill', src: '' },
  { title: 'The shop after sunset', src: '' },
  { title: 'A seat for your next stop', src: '' },
  { title: 'Something delicious to share', src: '' },
]
