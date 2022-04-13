import { createContext } from 'react'

import { useProducts } from '../hooks/useProducts'
import { ProductCardProps, ProductContextProps } from '../interfaces/interfaces'

import styles from '../styles/styles.module.css'
import noImage from '../assets/no-image.jpg'

export const ProductContext = createContext({} as ProductContextProps)
const {Provider} = ProductContext

export const ProductCard = ({product, children, className, style} : ProductCardProps) => {
  const { counter, handleAdd, handleMinus } = useProducts(0)
  const classes = `${styles.productCard} ${className}`

  return (
    <Provider value={{
      counter,
      handleAdd,
      handleMinus,
      product
    }}>
      <div className={classes} style={style}>
        {children}
      </div>
    </Provider>
  )
}

// ProductCard.Image = ProductImage
// ProductCard.Title = ProductTitle
// ProductCard.Buttons = ProductButtons
