import { useContext } from 'react'

import { ProductContext } from './ProductCard'

import { ProductImageProps } from '../interfaces/interfaces'

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export const ProductImage = ({img = '', className, style}: ProductImageProps) => {
  const { product } = useContext(ProductContext)
  const classes = `${styles.productImg} ${className}`
  const imageToShow = img ? img : product.img

  return (
    <img
      alt="card image"
      className={classes}
      src={imageToShow ? imageToShow : noImage}
      style={style}
    />
  )
}
