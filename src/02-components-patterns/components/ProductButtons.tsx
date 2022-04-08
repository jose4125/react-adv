import { useContext } from 'react'

import { ProductContext } from './ProductCard'

import styles from '../styles/styles.module.css'

export const ProductButtons = () => {
  const {counter, handleAdd, handleMinus} = useContext(ProductContext)

  return (
      <div className={styles.buttonsContainer}>
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
