import Image from "next/image"
import {RiShoppingCart2Fill} from "react-icons/ri"

const MenuItem = (props) => {
  return (
    <div className="bg-secondary rounded-3xl">
        <div className="w-full bg-[#f1f2f3]  h-[210px] grid place-content-center 
        rounded-bl-[46px]  rounded-tl-2xl  rounded-tr-2xl">
        <div className="relative w-36 h-36 hover:scale-110 transition-all">
            <Image src={require(`../../public/images/${props.img}`)} layout="fill" alt="" objectFit="contain"
            className=""
            />
            
        </div>
        </div>
        
        <div className="text-white p-[25px] ">
        <h4 className="text-xl font-semibold">{props.title}</h4>
            <p className="text-[15px]">{props.desc}</p>
             <div className="flex justify-between items-center mt-4 ">
             <span>${props.price}</span>
             <button className="btn-primary !w-10 !h-10 !rounded-full !p-0 grid place-content-center">
                <RiShoppingCart2Fill/>
             </button>
             </div>
        </div>
    </div>
  )
}

export default MenuItem