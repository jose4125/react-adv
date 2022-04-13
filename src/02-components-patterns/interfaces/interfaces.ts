import { CSSProperties, ReactElement } from 'react'

export interface Product {
  id: string;
  img?: string;
  title: string;
}

export interface ProductCardProps {
  children?: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: CSSProperties
}

export interface ProductTitleProps {
  className?: string;
  title?: string;
  style?: CSSProperties
}

export interface ProductImageProps {
  className?: string;
  img?: string;
  style?: CSSProperties
}

export interface ProductButtonsProps {
  className?: string;
  style?: CSSProperties
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  handleAdd: () => void;
  handleMinus: () => void;
}

export interface ProductCradHOCProps {
  ({ children, product, className, style }: ProductCardProps): JSX.Element,
  Buttons: (Props: ProductButtonsProps) => JSX.Element
  Image: (Props: ProductImageProps) => JSX.Element,
  Title: (Props: ProductTitleProps) => JSX.Element,
}
