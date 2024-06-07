import { getUser } from "@/actions/getUser"
import Carts from "./Carts"


const Cart = async () => {

  const currentUser = await getUser()
  
  return (
      <div>
         <Carts currentUser={currentUser} />
      </div>
  )
}

export default Cart
