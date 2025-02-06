interface ItemDetails {
  type: string;
  prodName: string;
  author?: string;
  price: number;
  returnWindow: string;
  image?: string;
}

interface CustomerOrder {
  orderNumber: string;
  placedOn: string;
  totalAmount: number;
  customerName: string;
  deliveredDate: string;
  item: ItemDetails[];
}

const orderHistory: any[] = [
  {
    orderNumber: '114-3941689-8772232',
    placedOn: 'Aug 4, 2020',
    totalAmount: 34.0,
    customerName: 'JS Masher',
    deliveredDate: 'Aug 8, 2020',
    item: [
      {
        type: 'book',
        prodName: 'JavaScript for impatient programmers',
        author: 'Rauschmayer, Dr. Axel',
        price: 31.55,
        returnWindow: 'Sep 7, 2020',
        image: 'order-history.png',
      },
    ],
  },

  {
    orderNumber: '113-9984268-128057',
    placedOn: 'Jul 19, 2020',
    totalAmount: 44.53,
    customerName: 'JS Masher',
    deliveredDate: 'Jul 20, 2020',
    item: [
      {
        type: 'book',
        prodName: 'The Timeless Way of Building',
        author: 'Alexander, Christopher',
        price: 41.33,
        returnWindow: 'Aug 19, 2020',
        image: 'order-history.png',
      },
    ],
  },
  {
    orderNumber: '114-2875557-9059409',
    placedOn: 'Jul 4, 2020',
    totalAmount: 17.22,
    customerName: 'JS Masher',
    deliveredDate: 'Jul 7, 2020',
    item: [
      {
        type: 'hardware',
        prodName:
          'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Drive and No Lag-Gamecube Adapter',
        price: 15.98,
        returnWindow: 'Aug 5, 2020',
        image: 'order-history.png',
      },
    ],
  },
  {
    orderNumber: '113-2883177-2648248',
    placedOn: 'Jul 3, 2020',
    totalAmount: 138.93,
    customerName: 'JS Masher',
    deliveredDate: 'Jul 5, 2020',
    item: [
      {
        type: 'hardware',
        prodName:
          'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        price: 94.95,
        returnWindow: 'Aug 4, 2020',
        image: 'order-history.png',
      },
      {
        type: 'book',
        prodName: 'The Art of SQL',
        author: 'Faroult, Stephane',
        price: 33.99,
        returnWindow: 'Aug 4, 2020',
        image: 'order-history.png',
      },
    ],
  },
];
