import Image from 'next/image'
import React from 'react'

const CostumerItem = ({imgSrc}) => {
  return (
    <div className='mt-5 mx-4'>
        <div className="p-6 bg-secondary text-white rounded-[5px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores consectetur vitae saepe architecto obcaecati laudantium quam vel minima iste? Odio ad aliquam voluptatibus aliquid maxime quidem nesciunt. Ab, magni a!
        </div>
        <div className="flex flex-col mt-4">
            
            <span className="text-lg font-semibold">Jane Moon</span>
            <span className="text-[15px]">Magna aliqua</span>
        </div>
        <div className="relative w-28 h-28 border-4 border-primary rounded-full mt-8 before:content[''] before:absolute before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-3 before:rotate-45 before:bg-primary before:w-5 before:h-5">
          <Image src={imgSrc}  alt="" layout="fill" objectFit='cover'
          className='rounded-full'/>
        </div>
    </div>
  )
}

export default CostumerItem