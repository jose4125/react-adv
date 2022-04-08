import { useContext } from 'react'

import { ProductContext } from './ProductCard'

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export const ProductImage = ({img = ''}) => {
  const { product } = useContext(ProductContext)
  const imageToShow = img ? img : product.img

  return (
    <img
      className={styles.productImg}
      src={imageToShow ? imageToShow : noImage}
      alt="card image"
    />
  )
}
