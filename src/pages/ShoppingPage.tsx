import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../02-components-patterns/components'

import '../02-components-patterns/styles/custom-styles.css'

const product = {
  id: '124',
  img: '',
  title: 'test',
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
        <ProductCard
          className="bg-dark"
          product={product}
        >
          <ProductImage className="custom-image" />
          <ProductTitle className="text-white" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          className="bg-dark"
          product={product}
        >
          <ProductCard.Image className="custom-image" style={{
            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
          }}/>
          <ProductCard.Title className="text-white"/>
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={product}
          style={{
            backgroundColor: '#70d1f8'
          }}
        >
          <ProductImage style={{
            boxShadow: '10px 10px 10px rgba(0,0,0,0.2)'
          }} />
          <ProductTitle style={{
            fontWeight: 'bold'
          }} />
          <ProductButtons style={{
            display: 'flex',
            justifyContent: 'end'
          }} />
        </ProductCard>
      </div>
    </div>
  )
}
