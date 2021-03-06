import bcrypt from 'bcryptjs';

const data = {
  products: [
    {
      productName: 'The Peace Garden',
      productDescription: 'Sheffield Painting',
      images:
        'https://images.squarespace-cdn.com/content/5488ad4ee4b0ba05acd8c3a2/1510490697583-FFYYCVG56V79LA5W03KW/image-asset.jpeg?format=1500w&content-type=image%2Fjpeg',
      unitOfMeasure: 'unit',
      quantityOnHand: 2,
      weight: 200,
      currentPrice: 120,
      discountedPrice: 0,
      isFeatured: true,
      productStatus: 'Active',
      productCategory: 'Painting',
      productCategoryId: '624322cfffac83dfde63e5a5',
      storeId: '6245bd0df655ffdf2d8fe7d8',
    },
    {
      productName: 'Handmade Jewellery',
      slug: 'handmade-jewellery',
      productDescription: 'Made by pure metal',
      images:
        'https://i0.wp.com/www.society19.com/wp-content/uploads/2021/06/etsy-jewelry-featured-image-1.jpg?fit=1200%2C900&ssl=1',
      unitOfMeasure: 'unit',
      quantityOnHand: 5,
      weight: 1,
      currentPrice: 50,
      discountedPrice: 0,
      isFeatured: true,
      productStatus: 'Active',
      productCategory: 'Jewellery',
      productCategoryId: '624322cfffac83dfde63e5a6',
      storeId: '6245bd0df655ffdf2d8fe7d8',
    },
    {
      productName: 'Burger and toast',
      slug: 'burger-and-toast',
      productDescription: 'Homemade bread recipe',
      images:
        'https://d18mqtxkrsjgmh.cloudfront.net/public/2021-03/Eating%20More%20Ultraprocessed%20%E2%80%98Junk%E2%80%99%20Food%20Linked%20to%20Higher%20CVD%20Risk.jpeg',
      unitOfMeasure: 'unit',
      quantityOnHand: 0,
      weight: 100,
      currentPrice: 10,
      discountedPrice: 0,
      isFeatured: true,
      productStatus: 'Active',
      productCategory: 'Food',
      productCategoryId: '624322cfffac83dfde63e5a7',
      storeId: '6245bd0df655ffdf2d8fe7d8',
    },
    {
      productName: 'Ladies shirt ',
      slug: 'ladies-shirt',
      productDescription: 'high quality shirt',
      images:
        'https://www.asiaone.com/sites/default/files/original_images/Apr2020/060420_clothes_unspl.jpg',
      unitOfMeasure: 'unit',
      quantityOnHand: 50,
      weight: 20,
      currentPrice: 80,
      discountedPrice: 5,
      isFeatured: true,
      productStatus: 'Available',
      productCategory: 'Clothes',
      productStatus: 'Active',
      productCategoryId: '624322cfffac83dfde63e5a8',
      storeId: '6245bd0df655ffdf2d8fe7d8',
    },
    {
      productName: 'Scented Candles',
      slug: 'scented-candles',
      productDescription: 'Orange scented candles',
      images:
        'https://cdn.shopify.com/s/files/1/0054/8034/9799/products/craftfactorycandlemakingkit_1_1296x.jpg?v=1643975047',
      unitOfMeasure: 'unit',
      quantityOnHand: 50,
      weight: 20,
      currentPrice: 56,
      discountedPrice: 5,
      isFeatured: true,
      productStatus: 'Active',
      productCategory: 'Decor',
      productCategoryId: '624322cfffac83dfde63e5a9',
      storeId: '6245bd0df655ffdf2d8fe7d9',
    },
    {
      productName: 'Leather bags',
      slug: 'leather-bags',
      productDescription: 'Multi purpose bags',
      images:
        'https://cdn.thewirecutter.com/wp-content/uploads/2020/03/totebags-lowres-2x1-3945.jpg?auto=webp&quality=75&crop=2:1&width=1024',
      unitOfMeasure: 'unit',
      quantityOnHand: 50,
      weight: 20,
      currentPrice: 30,
      discountedPrice: 0,
      isFeatured: true,
      productStatus: 'Active',
      productCategory: 'Bags',
      productCategoryId: '624322cfffac83dfde63e5aa',
      storeId: '6245bd0df655ffdf2d8fe7d9',
    },
  ],
  // stores: [
  //   {
  //     storeName: 'Huda Store 1',
  //     storeDetail: 'First store of Huda',
  //     bannerImage: '',
  //     additionalPhoto: '',
  //     supportEmail: 'huda_store1@support.com',
  //     storeRating: 3.5,
  //     storeStatus: 'Active',
  //     supportPhone: '0787812345',
  //     userId: '6244e4606260be3af9a6056d',
  //   },
  //   {
  //     storeName: 'Huda Store 2',
  //     storeDetail: 'Second store of Huda',
  //     bannerImage: '',
  //     additionalPhoto: '',
  //     supportEmail: 'huda_store2@support.com',
  //     storeRating: 2.5,
  //     storeStatus: 'Active',
  //     supportPhone: '0787854321',
  //     userId: '6244e4606260be3af9a6056d',
  //   },
  //   {
  //     storeName: 'Seller Store 1',
  //     storeDetail: 'First store of Seller',
  //     bannerImage: '',
  //     additionalPhoto: '',
  //     supportEmail: 'seller_store1@support.com',
  //     storeRating: 4.5,
  //     storeStatus: 'Active',
  //     supportPhone: '0787854321',
  //     userId: '6245b842959b7b83f79d03cf',
  //   },
  //   {
  //     storeName: 'Seller Store 2',
  //     storeDetail: 'Second store of Seller',
  //     bannerImage: '',
  //     additionalPhoto: '',
  //     supportEmail: 'seller_store2@support.com',
  //     storeRating: 1.5,
  //     storeStatus: 'Active',
  //     supportPhone: '0787854321',
  //     userId: '6245b842959b7b83f79d03cf',
  //   },
  // ],
  // users: [
  //   {
  //     firstName: 'Admin',
  //     lastName: '1',
  //     email: 'admin@example.com',
  //     password: bcrypt.hashSync('admin', 8),
  //     image: '',
  //     address: '123 Admin',
  //     city: 'Sheffield',
  //     postalCode: 'S1 1AB',
  //     country: 'UK',
  //     phone: 440123456789,
  //     isAdmin: true,
  //     isUser: false,
  //     isCustomer: false,
  //   },
  //   {
  //     firstName: 'Huda',
  //     lastName: 'Rashid',
  //     email: 'huda@example.com',
  //     password: bcrypt.hashSync('huda', 8),
  //     image: '',
  //     address: '456 Victoria',
  //     city: 'Sheffield',
  //     postalCode: 'S2 1WB',
  //     country: 'UK',
  //     phone: 44123456784,
  //     isAdmin: false,
  //     isUser: true,
  //     isCustomer: false,
  //   },
  //   {
  //     firstName: 'John',
  //     lastName: 'Doe',
  //     email: 'john@example.com',
  //     password: bcrypt.hashSync('john', 8),
  //     image: '',
  //     address: '456 Victoria',
  //     city: 'Sheffield',
  //     postalCode: 'S2 1WB',
  //     country: 'UK',
  //     phone: 44123456784,
  //     isAdmin: false,
  //     isUser: false,
  //     isCustomer: true,
  //   },
  // ],
  // productCategories: [
  //   {
  //     categoryName: 'Painting',
  //     categoryDescription: 'Category for paintings',
  //     categoryStatus: 'active',
  //     img: 'https://cdn.britannica.com/76/219376-131-8501C217/artists-brushes-paints.jpg',
  //   },
  //   {
  //     categoryName: 'Jewellery',
  //     categoryDescription: 'Category for jewellery',
  //     categoryStatus: 'active',
  //     img: 'https://i0.wp.com/www.society19.com/wp-content/uploads/2021/06/etsy-jewelry-featured-image-1.jpg?fit=1200%2C900&ssl=1',
  //   },
  //   {
  //     categoryName: 'Food',
  //     categoryDescription: 'Category for food',
  //     categoryStatus: 'active',
  //     img: 'https://d18mqtxkrsjgmh.cloudfront.net/public/2021-03/Eating%20More%20Ultraprocessed%20%E2%80%98Junk%E2%80%99%20Food%20Linked%20to%20Higher%20CVD%20Risk.jpeg',
  //   },
  //   {
  //     categoryName: 'Clothes',
  //     categoryDescription: 'Category for clothing',
  //     categoryStatus: 'active',
  //     img: 'https://www.asiaone.com/sites/default/files/original_images/Apr2020/060420_clothes_unspl.jpg',
  //   },
  //   {
  //     categoryName: 'Decor',
  //     categoryDescription: 'Category for decor items',
  //     categoryStatus: 'active',
  //     img: 'https://cdn.shopify.com/s/files/1/0054/8034/9799/products/craftfactorycandlemakingkit_1_1296x.jpg?v=1643975047',
  //   },
  //   {
  //     categoryName: 'Bags',
  //     categoryDescription: 'Category for bags',
  //     categoryStatus: 'active',
  //     img: 'https://cdn.thewirecutter.com/wp-content/uploads/2020/03/totebags-lowres-2x1-3945.jpg?auto=webp&quality=75&crop=2:1&width=1024',
  //   },
  // ],
};
export default data;
