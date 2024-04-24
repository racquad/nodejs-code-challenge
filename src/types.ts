export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  discountPercentage: number;
  stock: number;
};

export type User = {
  username: string;
  firstName: string;
  lastName: string;
  avatar: string;
  token: string;
};

export type CartPayload = {
  productId: number;
};

export type CartContent = {
  grandTotal: number,
  productList: Product[],
};
