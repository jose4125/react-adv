import { useContext } from 'react'

import { ProductContext } from './ProductCard'

import { ProductTitleProps } from '../interfaces/interfaces'

import styles from '../styles/styles.module.css'

export const ProductTitle = ({title, className, style}: ProductTitleProps) => {
  const {product} = useContext(ProductContext)
  const classes = `${styles.productDescription} ${className}`
  const titleToShow = title || product.title

  return (
    <span className={classes} style={style}>{titleToShow}</span>
  )
}
