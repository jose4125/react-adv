import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../02-components-patterns/components'

const product = {
  id: '124',
  title: 'test',
  img: ''
}

export const ShoppingPage = (): JSX.Element => {
  return (
    <div>
      <h1>Shopping Page</h1>
      <hr />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  )
}
