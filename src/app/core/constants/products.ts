import { IProduct } from '../models/product';
const baseProductURL = 'assets/images/products';
export const PRODUCTS: IProduct[] = [
  {
    id: '1',
    store: {
      username: 'Thrifting_Store',
      name: 'Thrifting Store',
    },
    name: "Essentials Men's short-sleeve crewneck T-shirt",
    mainImgUrl: {
      webp: `${baseProductURL}/1.webp`,
      fallback: `${baseProductURL}/1.jpg`,
    },
    otherImgsUrl: [
      {
        webp: `${baseProductURL}/11.webp`,
        fallback: `${baseProductURL}/11.jpg`,
      },
      {
        webp: `${baseProductURL}/12.webp`,
        fallback: `${baseProductURL}/12.jpg`,
      },
      {
        webp: `${baseProductURL}/13.webp`,
        fallback: `${baseProductURL}/13.jpg`,
      },
      {
        webp: `${baseProductURL}/14.webp`,
        fallback: `${baseProductURL}/14.jpg`,
      },
    ],
    isFavorite: false,
    category: 'shirt',
    price: 32,
    totalSold: 2956,
    features: {
      brand: 'ChArnkpR',
      category: 'Casual Shirt',
      condition: 'New',
      color: 'Aprikot',
      material: 'Polyster',
      heavy: '200 g',
    },
    description: [
      'Long-sleeve dress shirt in classic fit featuring button-down collar',
      'Patch Pocket on Left Chest',
      'Durable Combination Cotton Fabric',
      'Comfortable and quality dress shirt',
    ],
    shippingInfo: {
      delivery: 'Shipping from Jakarta, Indonesia',
      shipping: 'FREE International shipping',
      arrivalDuration: 2,
    },
    sellerInfo: {
      lastActive: '5 Min',
      responseRate: 96.7,
    },
    reviews: {
      averageRating: 4.9,
      totalReviews: 2356,
      ratings: {
        5: {
          count: 1500,
          percentage: 0.8,
        },
        4: {
          count: 710,
          percentage: 0.4,
        },
        3: {
          count: 140,
          percentage: 0.2,
        },
        2: {
          count: 10,
          percentage: 0.1,
        },
        1: {
          count: 4,
          percentage: 0.06,
        },
      },
      imageReview: {
        url: [
          {
            webp: `${baseProductURL}/15.jpg`,
            fallback: `${baseProductURL}/15.jpg`,
          },
          {
            webp: `${baseProductURL}/14.webp`,
            fallback: `${baseProductURL}/14.jpg`,
          },
          {
            webp: `${baseProductURL}/12.webp`,
            fallback: `${baseProductURL}/12.jpg`,
          },
          {
            webp: `${baseProductURL}/8.jpg`,
            fallback: `${baseProductURL}/8.jpg`,
          },
        ],
        remaining: '132+',
      },
      topUserReviews: [
        {
          name: 'Eren Y****R',
          imgUrl: 'https://randomuser.me/api/portraits/men/94.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
        {
          name: 'Annie Le***hart',
          imgUrl: 'https://randomuser.me/api/portraits/men/64.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
        {
          name: 'Levi A***man',
          imgUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
      ],
    },
  },
  {
    id: '2',
    store: {
      username: 'Thrifting_Store',
      name: 'Thrifting Store',
    },
    name: "Essentials Men's short-sleeve crewneck T-shirt",
    mainImgUrl: {
      webp: `${baseProductURL}/2.webp`,
      fallback: `${baseProductURL}/2.jpg`,
    },
    otherImgsUrl: [
      {
        webp: `${baseProductURL}/11.webp`,
        fallback: `${baseProductURL}/11.jpg`,
      },
      {
        webp: `${baseProductURL}/12.webp`,
        fallback: `${baseProductURL}/12.jpg`,
      },
      {
        webp: `${baseProductURL}/13.webp`,
        fallback: `${baseProductURL}/13.jpg`,
      },
      {
        webp: `${baseProductURL}/14.webp`,
        fallback: `${baseProductURL}/14.jpg`,
      },
    ],
    isFavorite: true,
    category: 'shirt',
    price: 32,
    totalSold: 2956,
    features: {
      brand: 'ChArnkpR',
      category: 'Casual Shirt',
      condition: 'New',
      color: 'Aprikot',
      material: 'Polyster',
      heavy: '200 g',
    },
    description: [
      'Long-sleeve dress shirt in classic fit featuring button-down collar',
      'Patch Pocket on Left Chest',
      'Durable Combination Cotton Fabric',
      'Comfortable and quality dress shirt',
    ],
    shippingInfo: {
      delivery: 'Shipping from Jakarta, Indonesia',
      shipping: 'FREE International shipping',
      arrivalDuration: 2,
    },
    sellerInfo: {
      lastActive: '5 Min',
      responseRate: 96.7,
    },
    reviews: {
      averageRating: 4.9,
      totalReviews: 2356,
      ratings: {
        5: {
          count: 1500,
          percentage: 0.8,
        },
        4: {
          count: 710,
          percentage: 0.4,
        },
        3: {
          count: 140,
          percentage: 0.2,
        },
        2: {
          count: 10,
          percentage: 0.1,
        },
        1: {
          count: 4,
          percentage: 0.06,
        },
      },
      imageReview: {
        url: [
          {
            webp: `${baseProductURL}/15.jpg`,
            fallback: `${baseProductURL}/15.jpg`,
          },
          {
            webp: `${baseProductURL}/14.webp`,
            fallback: `${baseProductURL}/14.jpg`,
          },
          {
            webp: `${baseProductURL}/12.webp`,
            fallback: `${baseProductURL}/12.jpg`,
          },
          {
            webp: `${baseProductURL}/8.jpg`,
            fallback: `${baseProductURL}/8.jpg`,
          },
        ],
        remaining: '132+',
      },
      topUserReviews: [
        {
          name: 'Eren Y****R',
          imgUrl: 'https://randomuser.me/api/portraits/men/94.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
        {
          name: 'Annie Le***hart',
          imgUrl: 'https://randomuser.me/api/portraits/men/64.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
        {
          name: 'Levi A***man',
          imgUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
      ],
    },
  },
  {
    id: '3',
    store: {
      username: 'Thrifting_Store',
      name: 'Thrifting Store',
    },
    name: "Essentials Men's short-sleeve crewneck T-shirt",
    mainImgUrl: {
      webp: `${baseProductURL}/3.webp`,
      fallback: `${baseProductURL}/3.jpg`,
    },
    otherImgsUrl: [
      {
        webp: `${baseProductURL}/11.webp`,
        fallback: `${baseProductURL}/11.jpg`,
      },
      {
        webp: `${baseProductURL}/12.webp`,
        fallback: `${baseProductURL}/12.jpg`,
      },
      {
        webp: `${baseProductURL}/13.webp`,
        fallback: `${baseProductURL}/13.jpg`,
      },
      {
        webp: `${baseProductURL}/14.webp`,
        fallback: `${baseProductURL}/14.jpg`,
      },
    ],
    isFavorite: false,
    category: 'shirt',
    price: 32,
    totalSold: 2956,
    features: {
      brand: 'ChArnkpR',
      category: 'Casual Shirt',
      condition: 'New',
      color: 'Aprikot',
      material: 'Polyster',
      heavy: '200 g',
    },
    description: [
      'Long-sleeve dress shirt in classic fit featuring button-down collar',
      'Patch Pocket on Left Chest',
      'Durable Combination Cotton Fabric',
      'Comfortable and quality dress shirt',
    ],
    shippingInfo: {
      delivery: 'Shipping from Jakarta, Indonesia',
      shipping: 'FREE International shipping',
      arrivalDuration: 2,
    },
    sellerInfo: {
      lastActive: '5 Min',
      responseRate: 96.7,
    },
    reviews: {
      averageRating: 4.9,
      totalReviews: 2356,
      ratings: {
        5: {
          count: 1500,
          percentage: 0.8,
        },
        4: {
          count: 710,
          percentage: 0.4,
        },
        3: {
          count: 140,
          percentage: 0.2,
        },
        2: {
          count: 10,
          percentage: 0.1,
        },
        1: {
          count: 4,
          percentage: 0.06,
        },
      },
      imageReview: {
        url: [
          {
            webp: `${baseProductURL}/15.jpg`,
            fallback: `${baseProductURL}/15.jpg`,
          },
          {
            webp: `${baseProductURL}/14.webp`,
            fallback: `${baseProductURL}/14.jpg`,
          },
          {
            webp: `${baseProductURL}/12.webp`,
            fallback: `${baseProductURL}/12.jpg`,
          },
          {
            webp: `${baseProductURL}/8.jpg`,
            fallback: `${baseProductURL}/8.jpg`,
          },
        ],
        remaining: '132+',
      },
      topUserReviews: [
        {
          name: 'Eren Y****R',
          imgUrl: 'https://randomuser.me/api/portraits/men/94.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
        {
          name: 'Annie Le***hart',
          imgUrl: 'https://randomuser.me/api/portraits/men/64.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
        {
          name: 'Levi A***man',
          imgUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
      ],
    },
  },
  {
    id: '4',
    store: {
      username: 'Thrifting_Store',
      name: 'Thrifting Store',
    },
    name: "Essentials Men's regular-fit long-sleeve oxford crewneck T-shirt",
    mainImgUrl: {
      webp: `${baseProductURL}/4.webp`,
      fallback: `${baseProductURL}/4.jpg`,
    },
    otherImgsUrl: [
      {
        webp: `${baseProductURL}/11.webp`,
        fallback: `${baseProductURL}/11.jpg`,
      },
      {
        webp: `${baseProductURL}/12.webp`,
        fallback: `${baseProductURL}/12.jpg`,
      },
      {
        webp: `${baseProductURL}/13.webp`,
        fallback: `${baseProductURL}/13.jpg`,
      },
      {
        webp: `${baseProductURL}/14.webp`,
        fallback: `${baseProductURL}/14.jpg`,
      },
    ],
    isFavorite: false,
    category: 'shirt',
    price: 32,
    totalSold: 2956,
    features: {
      brand: 'ChArnkpR',
      category: 'Casual Shirt',
      condition: 'New',
      color: 'Aprikot',
      material: 'Polyster',
      heavy: '200 g',
    },
    description: [
      'Long-sleeve dress shirt in classic fit featuring button-down collar',
      'Patch Pocket on Left Chest',
      'Durable Combination Cotton Fabric',
      'Comfortable and quality dress shirt',
    ],
    shippingInfo: {
      delivery: 'Shipping from Jakarta, Indonesia',
      shipping: 'FREE International shipping',
      arrivalDuration: 2,
    },
    sellerInfo: {
      lastActive: '5 Min',
      responseRate: 96.7,
    },
    reviews: {
      averageRating: 4.9,
      totalReviews: 2356,
      ratings: {
        5: {
          count: 1500,
          percentage: 0.8,
        },
        4: {
          count: 710,
          percentage: 0.4,
        },
        3: {
          count: 140,
          percentage: 0.2,
        },
        2: {
          count: 10,
          percentage: 0.1,
        },
        1: {
          count: 4,
          percentage: 0.06,
        },
      },
      imageReview: {
        url: [
          {
            webp: `${baseProductURL}/15.jpg`,
            fallback: `${baseProductURL}/15.jpg`,
          },
          {
            webp: `${baseProductURL}/14.webp`,
            fallback: `${baseProductURL}/14.jpg`,
          },
          {
            webp: `${baseProductURL}/12.webp`,
            fallback: `${baseProductURL}/12.jpg`,
          },
          {
            webp: `${baseProductURL}/8.jpg`,
            fallback: `${baseProductURL}/8.jpg`,
          },
        ],
        remaining: '132+',
      },
      topUserReviews: [
        {
          name: 'Eren Y****R',
          imgUrl: 'https://randomuser.me/api/portraits/men/94.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
        {
          name: 'Annie Le***hart',
          imgUrl: 'https://randomuser.me/api/portraits/men/64.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
        {
          name: 'Levi A***man',
          imgUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
      ],
    },
  },
  {
    id: '5',
    store: {
      username: 'Thrifting_Store',
      name: 'Thrifting Store',
    },
    name: "Essentials Men's short-sleeve crewneck T-shirt",
    mainImgUrl: {
      webp: `${baseProductURL}/5.webp`,
      fallback: `${baseProductURL}/5.jpg`,
    },
    otherImgsUrl: [
      {
        webp: `${baseProductURL}/11.webp`,
        fallback: `${baseProductURL}/11.jpg`,
      },
      {
        webp: `${baseProductURL}/12.webp`,
        fallback: `${baseProductURL}/12.jpg`,
      },
      {
        webp: `${baseProductURL}/13.webp`,
        fallback: `${baseProductURL}/13.jpg`,
      },
      {
        webp: `${baseProductURL}/14.webp`,
        fallback: `${baseProductURL}/14.jpg`,
      },
    ],
    isFavorite: false,
    category: 'shirt',
    price: 32,
    totalSold: 2956,
    features: {
      brand: 'ChArnkpR',
      category: 'Casual Shirt',
      condition: 'New',
      color: 'Aprikot',
      material: 'Polyster',
      heavy: '200 g',
    },
    description: [
      'Long-sleeve dress shirt in classic fit featuring button-down collar',
      'Patch Pocket on Left Chest',
      'Durable Combination Cotton Fabric',
      'Comfortable and quality dress shirt',
    ],
    shippingInfo: {
      delivery: 'Shipping from Jakarta, Indonesia',
      shipping: 'FREE International shipping',
      arrivalDuration: 2,
    },
    sellerInfo: {
      lastActive: '5 Min',
      responseRate: 96.7,
    },
    reviews: {
      averageRating: 4.9,
      totalReviews: 2356,
      ratings: {
        5: {
          count: 1500,
          percentage: 0.8,
        },
        4: {
          count: 710,
          percentage: 0.4,
        },
        3: {
          count: 140,
          percentage: 0.2,
        },
        2: {
          count: 10,
          percentage: 0.1,
        },
        1: {
          count: 4,
          percentage: 0.06,
        },
      },
      imageReview: {
        url: [
          {
            webp: `${baseProductURL}/15.jpg`,
            fallback: `${baseProductURL}/15.jpg`,
          },
          {
            webp: `${baseProductURL}/14.webp`,
            fallback: `${baseProductURL}/14.jpg`,
          },
          {
            webp: `${baseProductURL}/12.webp`,
            fallback: `${baseProductURL}/12.jpg`,
          },
          {
            webp: `${baseProductURL}/8.jpg`,
            fallback: `${baseProductURL}/8.jpg`,
          },
        ],
        remaining: '132+',
      },
      topUserReviews: [
        {
          name: 'Eren Y****R',
          imgUrl: 'https://randomuser.me/api/portraits/men/94.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
        {
          name: 'Annie Le***hart',
          imgUrl: 'https://randomuser.me/api/portraits/men/64.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
        {
          name: 'Levi A***man',
          imgUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
      ],
    },
  },
  {
    id: '6',
    store: {
      username: 'Thrifting_Store',
      name: 'Thrifting Store',
    },
    name: "Essentials Men's short-sleeve crewneck T-shirt",
    mainImgUrl: {
      webp: `${baseProductURL}/6.webp`,
      fallback: `${baseProductURL}/6.jpg`,
    },
    otherImgsUrl: [
      {
        webp: `${baseProductURL}/11.webp`,
        fallback: `${baseProductURL}/11.jpg`,
      },
      {
        webp: `${baseProductURL}/12.webp`,
        fallback: `${baseProductURL}/12.jpg`,
      },
      {
        webp: `${baseProductURL}/13.webp`,
        fallback: `${baseProductURL}/13.jpg`,
      },
      {
        webp: `${baseProductURL}/14.webp`,
        fallback: `${baseProductURL}/14.jpg`,
      },
    ],
    isFavorite: false,
    category: 'shirt',
    price: 32,
    totalSold: 2956,
    features: {
      brand: 'ChArnkpR',
      category: 'Casual Shirt',
      condition: 'New',
      color: 'Aprikot',
      material: 'Polyster',
      heavy: '200 g',
    },
    description: [
      'Long-sleeve dress shirt in classic fit featuring button-down collar',
      'Patch Pocket on Left Chest',
      'Durable Combination Cotton Fabric',
      'Comfortable and quality dress shirt',
    ],
    shippingInfo: {
      delivery: 'Shipping from Jakarta, Indonesia',
      shipping: 'FREE International shipping',
      arrivalDuration: 2,
    },
    sellerInfo: {
      lastActive: '5 Min',
      responseRate: 96.7,
    },
    reviews: {
      averageRating: 4.9,
      totalReviews: 2356,
      ratings: {
        5: {
          count: 1500,
          percentage: 0.8,
        },
        4: {
          count: 710,
          percentage: 0.4,
        },
        3: {
          count: 140,
          percentage: 0.2,
        },
        2: {
          count: 10,
          percentage: 0.1,
        },
        1: {
          count: 4,
          percentage: 0.06,
        },
      },
      imageReview: {
        url: [
          {
            webp: `${baseProductURL}/15.jpg`,
            fallback: `${baseProductURL}/15.jpg`,
          },
          {
            webp: `${baseProductURL}/14.webp`,
            fallback: `${baseProductURL}/14.jpg`,
          },
          {
            webp: `${baseProductURL}/12.webp`,
            fallback: `${baseProductURL}/12.jpg`,
          },
          {
            webp: `${baseProductURL}/8.jpg`,
            fallback: `${baseProductURL}/8.jpg`,
          },
        ],
        remaining: '132+',
      },
      topUserReviews: [
        {
          name: 'Eren Y****R',
          imgUrl: 'https://randomuser.me/api/portraits/men/94.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
        {
          name: 'Annie Le***hart',
          imgUrl: 'https://randomuser.me/api/portraits/men/64.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
        {
          name: 'Levi A***man',
          imgUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
      ],
    },
  },
  {
    id: '7',
    store: {
      username: 'Thrifting_Store',
      name: 'Thrifting Store',
    },
    name: "Essentials Men's short-sleeve crewneck T-shirt",
    mainImgUrl: {
      webp: `${baseProductURL}/7.webp`,
      fallback: `${baseProductURL}/7.jpg`,
    },
    otherImgsUrl: [
      {
        webp: `${baseProductURL}/11.webp`,
        fallback: `${baseProductURL}/11.jpg`,
      },
      {
        webp: `${baseProductURL}/12.webp`,
        fallback: `${baseProductURL}/12.jpg`,
      },
      {
        webp: `${baseProductURL}/13.webp`,
        fallback: `${baseProductURL}/13.jpg`,
      },
      {
        webp: `${baseProductURL}/14.webp`,
        fallback: `${baseProductURL}/14.jpg`,
      },
    ],
    isFavorite: false,
    category: 'shirt',
    price: 32,
    totalSold: 2956,
    features: {
      brand: 'ChArnkpR',
      category: 'Casual Shirt',
      condition: 'New',
      color: 'Aprikot',
      material: 'Polyster',
      heavy: '200 g',
    },
    description: [
      'Long-sleeve dress shirt in classic fit featuring button-down collar',
      'Patch Pocket on Left Chest',
      'Durable Combination Cotton Fabric',
      'Comfortable and quality dress shirt',
    ],
    shippingInfo: {
      delivery: 'Shipping from Jakarta, Indonesia',
      shipping: 'FREE International shipping',
      arrivalDuration: 2,
    },
    sellerInfo: {
      lastActive: '5 Min',
      responseRate: 96.7,
    },
    reviews: {
      averageRating: 4.9,
      totalReviews: 2356,
      ratings: {
        5: {
          count: 1500,
          percentage: 0.8,
        },
        4: {
          count: 710,
          percentage: 0.4,
        },
        3: {
          count: 140,
          percentage: 0.2,
        },
        2: {
          count: 10,
          percentage: 0.1,
        },
        1: {
          count: 4,
          percentage: 0.06,
        },
      },
      imageReview: {
        url: [
          {
            webp: `${baseProductURL}/15.jpg`,
            fallback: `${baseProductURL}/15.jpg`,
          },
          {
            webp: `${baseProductURL}/14.webp`,
            fallback: `${baseProductURL}/14.jpg`,
          },
          {
            webp: `${baseProductURL}/12.webp`,
            fallback: `${baseProductURL}/12.jpg`,
          },
          {
            webp: `${baseProductURL}/8.jpg`,
            fallback: `${baseProductURL}/8.jpg`,
          },
        ],
        remaining: '132+',
      },
      topUserReviews: [
        {
          name: 'Eren Y****R',
          imgUrl: 'https://randomuser.me/api/portraits/men/94.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
        {
          name: 'Annie Le***hart',
          imgUrl: 'https://randomuser.me/api/portraits/men/64.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
        {
          name: 'Levi A***man',
          imgUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
      ],
    },
  },
  {
    id: '8',
    store: {
      username: 'Thrifting_Store',
      name: 'Thrifting Store',
    },
    name: "Essentials Men's short-sleeve crewneck T-shirt",
    mainImgUrl: {
      webp: `${baseProductURL}/8.webp`,
      fallback: `${baseProductURL}/8.jpg`,
    },
    otherImgsUrl: [
      {
        webp: `${baseProductURL}/11.webp`,
        fallback: `${baseProductURL}/11.jpg`,
      },
      {
        webp: `${baseProductURL}/12.webp`,
        fallback: `${baseProductURL}/12.jpg`,
      },
      {
        webp: `${baseProductURL}/13.webp`,
        fallback: `${baseProductURL}/13.jpg`,
      },
      {
        webp: `${baseProductURL}/14.webp`,
        fallback: `${baseProductURL}/14.jpg`,
      },
    ],
    isFavorite: false,
    category: 'shirt',
    price: 32,
    totalSold: 2956,
    features: {
      brand: 'ChArnkpR',
      category: 'Casual Shirt',
      condition: 'New',
      color: 'Aprikot',
      material: 'Polyster',
      heavy: '200 g',
    },
    description: [
      'Long-sleeve dress shirt in classic fit featuring button-down collar',
      'Patch Pocket on Left Chest',
      'Durable Combination Cotton Fabric',
      'Comfortable and quality dress shirt',
    ],
    shippingInfo: {
      delivery: 'Shipping from Jakarta, Indonesia',
      shipping: 'FREE International shipping',
      arrivalDuration: 2,
    },
    sellerInfo: {
      lastActive: '5 Min',
      responseRate: 96.7,
    },
    reviews: {
      averageRating: 4.9,
      totalReviews: 2356,
      ratings: {
        5: {
          count: 1500,
          percentage: 0.8,
        },
        4: {
          count: 710,
          percentage: 0.4,
        },
        3: {
          count: 140,
          percentage: 0.2,
        },
        2: {
          count: 10,
          percentage: 0.1,
        },
        1: {
          count: 4,
          percentage: 0.06,
        },
      },
      imageReview: {
        url: [
          {
            webp: `${baseProductURL}/15.jpg`,
            fallback: `${baseProductURL}/15.jpg`,
          },
          {
            webp: `${baseProductURL}/14.webp`,
            fallback: `${baseProductURL}/14.jpg`,
          },
          {
            webp: `${baseProductURL}/12.webp`,
            fallback: `${baseProductURL}/12.jpg`,
          },
          {
            webp: `${baseProductURL}/8.jpg`,
            fallback: `${baseProductURL}/8.jpg`,
          },
        ],
        remaining: '132+',
      },
      topUserReviews: [
        {
          name: 'Eren Y****R',
          imgUrl: 'https://randomuser.me/api/portraits/men/94.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
        {
          name: 'Annie Le***hart',
          imgUrl: 'https://randomuser.me/api/portraits/men/64.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
        {
          name: 'Levi A***man',
          imgUrl: 'https://randomuser.me/api/portraits/men/10.jpg',
          rating: 5,
          tags: [
            'Product in good condition',
            'Very fast delivery',
            'Fast seller response',
          ],
        },
      ],
    },
  },
];
