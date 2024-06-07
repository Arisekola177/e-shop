'use client'
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormattedPrice from "../utils/FormattedPrice";
import { loadStripe } from "@stripe/stripe-js";
import { resetCart, saveOrder } from "../redux/eshopSlice";
import { useRouter } from "next/navigation";


const CartTotal = ({currentUser}) => {
    const router = useRouter()
    const dispatch = useDispatch()
    const { productData} = useSelector((state) => state.eshop);

    const [totalAmt, setTotalAmt] = useState(0);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      let amt = 0;
      productData.map((item) => {
        amt += item.price * item.quantity;
        return;
      });
      setTotalAmt(amt);
    }, [productData]);

    let Vat = totalAmt * 7.5/100

    const Login = () => {
       router.push('/login')
    } 

    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)


    const createCheckout = async () => {
      setLoading(true)
      if (currentUser) {
          const stripe = await stripePromise;
          try {
              const response = await fetch('/api/checkout', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                      items: productData,
                      email: currentUser.email
                  })
              });
  
              if (!response.ok) {
                  console.error('Error creating checkout:', response.statusText);
                  return;
              }
  
              const data = await response.json();
              stripe.redirectToCheckout({ sessionId: data.id });
              setLoading(false)
              dispatch(resetCart());
              dispatch(saveOrder());
          } catch (error) {
              console.error('Unexpected error:', error);
          }
      }
  };
  

  return (
   
    <div className="p-4 rounded-lg bg-slate-50 shadow-lg w-[400px]  ">
      <h2 className="font-bold text-center mb-5">Cart Totals</h2>
      <div className=" py-2">
        <div className=" flex items-center justify-between">
          <p className="uppercase font-medium text-xs">Subtotal</p>
          <p className="text-xs">
            <FormattedPrice amount={totalAmt} />
          </p>
        </div>
      </div>
      <div className=" py-2">
        <div className="flex items-center justify-between">
          <p className="uppercase font-medium text-xs">Vat</p>
          <p className="text-xs">
            <FormattedPrice amount={Vat} />
          </p>
        </div>
      </div>
      <div className=" py-2">
        <div className=" flex items-center justify-between">
          <p className="uppercase font-medium text-xs">Total Price</p>
          <p className="text-sm font-bold">
            <FormattedPrice amount={totalAmt + Vat} />
          </p>
        </div>
      </div>
    
        <div disabled={loading} className="bg-black text-slate-100 mt-4 rounded-lg hover:bg-orange-950 cursor-pointer duration-200 text-center">
          {
            currentUser ?  <button onClick={createCheckout}  className=" py-3 px-6 " >
            Proceed to checkout
           </button> : 
           <button onClick={Login} className=" py-3 px-6 animate-bounce " >
             Login to continue
           </button>
          }
       
       </div>
           {loading && <div>Loading ....</div>}
        
        
    </div>
 
  )
}

export default CartTotal