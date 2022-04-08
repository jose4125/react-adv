import { useState } from 'react'

export const useProducts = (value: number) => {
  const [ counter, setCounter ] = useState(value)

  const handleAdd = () => {
    setCounter(counter + 1)
  }
  const handleMinus = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return { counter, setCounter, handleAdd, handleMinus}
}
