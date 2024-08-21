import React from 'react'
import { Product } from '../../../../interface'

const Example:React.FC<{product:Product}> = ({product}) => {
  return (
    <>
    <div>
       <h2>{product.name}</h2>
       <p>Price: ${product.price.toFixed(2)}</p>
       <p>{product.inStock ? 'In Stock' : 'Out of Stock'}</p>
    </div>  
    </>
  )
}

export default Example