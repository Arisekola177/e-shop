
import { products } from "@/app/utils/products";
import ProductDetails from "./ProductDetails";
import Review from './Review'

const Product = ({params}) => {
 const product = products.find((item) => item.id === params.productid)

  return (
    <div className='w-full mt-16'>
        <div className='w-10/12 mx-auto py-6'>
           <ProductDetails product={product} />
           <div className='mt-20'>
            {
              product.reviews.length  > 0 ? (  <Review product={product}  />) : ( <div><h2 className="text-2xl font-medium">No reviews</h2></div>)
            }
          
        </div>
        </div>
     
    </div>
  )
}

export default Product
