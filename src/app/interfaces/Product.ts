export interface Product {
  id: string;
  title: string;
  price: number;
  quantity: number;
  sellerId: number;
  categoryId: number;
  conditionId: string;
  createdAt: Date;
  updatedAt: Date;
  condition: {
    conditionName: string;
  };
  category: {
    categoryName: string;
  };
  seller: {
    userName: string;
  };
  reviews: [
    {
      userName: String;
      ProductReview: {
        id: number;
        comment: string;
        rate: number;
        userId: number;
        productId: number;
      };
    }
  ];
}

export interface CartProduct extends Product {
  order_quantity: string;
}
