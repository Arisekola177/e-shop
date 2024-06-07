
import { useDispatch } from "react-redux";
import { resetWish } from "../redux/eshopSlice";

const Resetwish = () => {
    const dispatch = useDispatch()
  return (
    <div>
       <button  className="mt-5 bg-red-500 text-white rounded-lg p-2 hover:scale-105 duration-300"
       onClick={() => dispatch(resetWish())}
       >Clear wish</button>
      
    </div>
  )
}

export default Resetwish