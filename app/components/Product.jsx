import { products } from "../utils/products"
import ProductCard from "./ProductCard"

const Product = () => {
  return (
    <div className="w-full py-10">
      <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
         {
          products.map((product) => (
             <div key={product.id}>
                  <ProductCard product={product} />
              </div>
          ))        
           }
      </div>
    </div>
  )
}

export default Product