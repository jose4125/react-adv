import { ProductCard as ProductCardHOC } from '../components/ProductCard'
import { ProductImage } from '../components/ProductImages'
import { ProductTitle } from '../components/ProductTitle'
import { ProductButtons } from '../components/ProductButtons'

import { ProductCradHOCProps } from '../interfaces/interfaces'

export { ProductImage } from '../components/ProductImages'
export { ProductTitle } from '../components/ProductTitle'
export { ProductButtons } from '../components/ProductButtons'


export const ProductCard: ProductCradHOCProps = Object.assign(ProductCardHOC, {
  Image: ProductImage,
  Title: ProductTitle,
  Buttons: ProductButtons
})
