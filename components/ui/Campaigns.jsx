import Image from "next/image"



const CampaignItem=()=>{
    return (
        <div className="relative w-44 h-44 after:content-[''] border-[5px] rounded-full border-primary overflow-hidden">{/*next.js in Image si default olarak absolute geldigi icin relative yi kapsayiciya vermek gerekiyor*/}
            <div> 
                <Image src="/images/o1.jpg" layout="fill" alt="" objectFit="cover"/>
            </div>
        </div>
    )
}

const Campaigns = () => {
  return (
    <div className="flex container mx-auto py-90">
        
       <CampaignItem/>
       <CampaignItem/>
    </div>
  )
}

export default Campaigns