import { ProductBase, Products } from '../interfaces/product.interface'

export const productSample: Products[] = [
  {
    name: 'product 1',
    price: 'P100.00',
    salePrice: 'P50.00',
    imgUrl: 'sample_image_url_1',
    ratings: 5,
    actionButton: 'Add to Cart'
  },
  {
    name: 'product 2',
    price: 'P200.00',
    salePrice: 'P100.00',
    imgUrl: 'sample_image_url_2',
    ratings: 5,
    actionButton: 'Add to Cart'
  },
  {
    name: 'product 3',
    price: 'P300.00',
    salePrice: 'P150.00',
    imgUrl: 'sample_image_url_3',
    ratings: 5,
    actionButton: 'Add to Cart'
  },
  {
    name: 'product 4',
    price: 'P400.00',
    salePrice: 'P200.00',
    imgUrl: 'sample_image_url_4',
    ratings: 5,
    actionButton: 'Add to Cart'
  },
  {
    name: 'product 5',
    price: 'P500.00',
    salePrice: 'P250.00',
    imgUrl: 'sample_image_url_5',
    ratings: 5,
    actionButton: 'Add to Cart'
  }
]

export const mainProductBase: ProductBase = {
  title: 'Available Products',
  products: productSample
}
