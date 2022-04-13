import { useContext } from 'react'

import { ProductContext } from './ProductCard'

import { ProductButtonsProps } from '../interfaces/interfaces'

import styles from '../styles/styles.module.css'

export const ProductButtons = ({className, style}: ProductButtonsProps) => {
  const {counter, handleAdd, handleMinus} = useContext(ProductContext)
  const classes = `${styles.buttonsContainer} ${className}`

  return (
      <div className={classes} style={style}>
        <button
          className={styles.buttonMinus}
          onClick={handleMinus}
        >-</button>
        <div className={styles.countLabel}>
          {counter}
        </div>
        <button
          className={styles.buttonAdd}
          onClick={handleAdd}
        >+</button>
      </div>
    )
}
