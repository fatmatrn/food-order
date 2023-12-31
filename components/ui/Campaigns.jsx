import Image from "next/image"
import Title from "./Title"
import {MdShoppingCart} from "react-icons/md"


const CampaignItem=()=>{
    return (
        <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">{/*next.js in Image si default olarak absolute geldigi icin relative yi kapsayiciya vermek gerekiyor*/}
            <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-[''] border-[5px] rounded-full border-primary overflow-hidden"> 
                <Image src="/images/o1.jpg" layout="fill" alt="" objectFit="cover" className="hover:scale-105 transition-all"/>
            </div>
            <div className="text-white ">
            <Title addClass="text-2xl">Tasty Thursdays</Title>
            <div className="font-dancing my-1">
                <span className="text-[40px]">20%</span>
                <span className="text-sm inline-block ml-1">Off</span>
            </div>
            <button className="btn-primary flex items-center gap-x-3">
                Order Now <MdShoppingCart size={20}/>
            </button>
            </div>
        </div>
    )
}

const Campaigns = () => {
  return (
    <div className="flex container mx-auto py-20 gap-6 flex-wrap">
        
       <CampaignItem/>
       <CampaignItem/>
    </div>
  )
}

export default Campaigns