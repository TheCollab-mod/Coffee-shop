export type Coffee = {
  id: number; name: string; sub: string; price: number;
  rate: number; cat: string; color: string; desc: string;
};

export const sizeMult = { S: 0.85, M: 1, L: 1.2 } as const;
export type Size = keyof typeof sizeMult;
export type Mode = 'Deliver' | 'Pick Up';

export const categories = ['All Coffee', 'Machiato', 'Latte', 'Americano', 'Cappuccino'];

export const coffees: Coffee[] = [
  { id: 1, name: 'Caffe Mocha', sub: 'Deep Foam', price: 1800, rate: 4.8, cat: 'Latte', color: '#7A4A2E',
    desc: 'Espresso, steamed milk and dark chocolate with a thick layer of deep foam.' },
  { id: 2, name: 'Flat White', sub: 'Espresso', price: 1600, rate: 4.8, cat: 'Latte', color: '#B07A4F',
    desc: 'A double shot of espresso with silky microfoam milk. Smooth and strong.' },
  { id: 3, name: 'Cappuccino', sub: 'With Oat Milk', price: 1700, rate: 4.7, cat: 'Cappuccino', color: '#9A6A45',
    desc: 'About 150 ml: 25 ml of espresso and 85 ml of fresh milk foam.' },
  { id: 4, name: 'Caramel Machiato', sub: 'Caramel Drizzle', price: 2000, rate: 4.9, cat: 'Machiato', color: '#A8723A',
    desc: 'Vanilla milk marked with espresso and topped with caramel.' },
  { id: 5, name: 'Americano', sub: 'Black & Bold', price: 1200, rate: 4.5, cat: 'Americano', color: '#4A2C1A',
    desc: 'Espresso with hot water. A long, clean cup with full coffee flavour.' },
  { id: 6, name: 'Vanilla Latte', sub: 'Vanilla Syrup', price: 1900, rate: 4.6, cat: 'Latte', color: '#C09468',
    desc: 'Espresso with steamed milk and a touch of vanilla syrup.' },
];

export const DELIVERY_FEE = 500;

// price for the chosen size, rounded to 10 ₸
export const priceOf = (c: Coffee, size: Size) => Math.round((c.price * sizeMult[size]) / 10) * 10;

// 1800 -> "1 800 ₸"
export const kzt = (n: number) => `${Math.round(n)}`.replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0') + '\u00A0₸';
