export interface ProductBase {
  title: string,
  products: Products[]
}

export interface Products {
  name: string,
  price: string,
  salePrice: string,
  imgUrl: string,
  ratings: number,
  actionButton: string
}