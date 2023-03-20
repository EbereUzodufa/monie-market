import { IBanner } from '../models/product';

export const CATEGORY_LIST = [
  {
    icon: 'dashboard_customize',
    title: 'Category',
  },
  {
    icon: 'flight',
    title: 'Flight',
  },
  {
    icon: 'event_note',
    title: 'Bill',
  },
  {
    icon: 'language',
    title: 'Data plan',
  },
  {
    icon: 'paid',
    title: 'Top Up',
  },
];
const baseBannerURL = 'assets/images/banners';

export const BANNER_LIST: IBanner[] = [
  {
    tag: '#Fashion Day',
    title: '80% OFF',
    description: 'Discover fashion that suits to your style',
    img: {
      webp: `${baseBannerURL}/landing-1.webp`,
      fallback: `${baseBannerURL}/landing-1.jpg`,
    },
  },
  {
    tag: '#BEAUTYSALE',
    subtitle: 'DISCOVER OUR BEAUTY SELECTION',
    img: {
      webp: `${baseBannerURL}/landing-2.webp`,
      fallback: `${baseBannerURL}/landing-2.jpg`,
    },
  },
  {
    tag: '#Real Man',
    subtitle: 'REAL MEN ALWAYS WEAR PINK',
    img: {
      webp: `${baseBannerURL}/landing-3.webp`,
      fallback: `${baseBannerURL}/landing-3.jpg`,
    },
  },
];
