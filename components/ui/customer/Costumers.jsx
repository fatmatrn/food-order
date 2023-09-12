import React from 'react'
import Title from '../Title'
import CustomerItem from './CostumerItem'
import Slider from 'react-slick'
import { MdSettings } from 'react-icons/md'
import {IoIosArrowForward,IoIosArrowBack}  from "react-icons/io"
const Costumers = () => {
  function NextBtn({onClick}){
    return <button className='bg-primary absolute -bottom-12 left-1/2 flex items-center justify-center w-10 h-10 rounded-full text-white'  onClick={onClick}><IoIosArrowForward/></button>

  }
  function PrevBtn({onClick}){
    return <button className='bg-primary absolute -bottom-12 right-1/2 flex items-center justify-center w-10 h-10 rounded-full text-white mr-2'  onClick={onClick}><IoIosArrowBack/></button>

  }

    const settings = {
      dots: false,
      arrow:false,
      infinite: false,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay:true,
      nextArrow:<NextBtn/>,
      prevArrow:<PrevBtn/>,
      responsive:[
        {
          breakPoint:768,
          settings:{
            slidesToShow:1,
            arrows:false,
          }
        }
      ]
    };
  return (
    <div   className='container mx-auto mb-20 mt-12'>
      <Title addClass="text-[40px] text-center">What Says Our Customers</Title>
        <div className=' '>
          <Slider {...settings}>
            <CustomerItem imgSrc={"/images/client1.jpg"}/>
            <CustomerItem imgSrc={"/images/client3.jpg"}/>
            
            <CustomerItem imgSrc={"/images/client1.jpg"}/>
            <CustomerItem imgSrc={"/images/client3.jpg"}/>
            
            <CustomerItem imgSrc={"/images/client1.jpg"}/>
            <CustomerItem imgSrc={"/images/client3.jpg"}/>
            
          
          </Slider>
         
        </div>
    </div>
  )
}

export default Costumers;