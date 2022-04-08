import { ReactElement } from 'react'

export interface Product {
  id: string;
  title: string;
  img?: string
}

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[]
}

export interface ProductContextProps {
  counter: number;
  handleAdd: () => void;
  handleMinus: () => void;
  product: Product;
}

export interface ProductCradHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Title: ({ title }: { title?: string }) => JSX.Element,
  Image: ({ img }: { img?: string }) => JSX.Element,
  Buttons: () => JSX.Element
}
