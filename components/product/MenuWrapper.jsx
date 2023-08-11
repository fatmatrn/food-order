import Title from "../ui/Title"
import MenuItem from "./MenuItem"


const MenuWrapper = () => {
  const menuItems =[
    {img:"f1.png",
      title:"Delicious Pizza",
      desc:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price:"20"},
    {img:"f2.png",
      title:"Delicious Hamburger",
      desc:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price:"20"},
    {img:"f3.png",
      title:"Delicious Pizza",
      desc:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price:"20"},
    {img:"f4.png",
      title:"Delicious Pasta",
      desc:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price:"25"},
    {img:"f5.png",
      title:"Delicious Patato",
      desc:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price:"15"},
    {img:"f6.png",
      title:"Delicious Pizza",
      desc:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price:"20"},
    {img:"f7.png",
      title:"Delicious Hamburger",
      desc:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price:"20"},
    {img:"f8.png",
      title:"Delicious Hamburger",
      desc:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price:"20"},
    {img:"f9.png",
      title:"Delicious Pasta",
      desc:"Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque",
      price:"15"},
  
  ]
  return (
    <div className="container mx-auto mb-16">
      <div className=" flex flex-col items-center">
      <Title addClass="text-[40px]">Our Menu</Title>
      <div className="">
        <button className="px-6 py-2 bg-secondary rounded-3xl text-white mt-10">All</button>
        <button className="px-6 py-2  rounded-3xl ">Burger</button>
        <button className="px-6 py-2  rounded-3xl ">Pizza</button>
        <button className="px-6 py-2  rounded-3xl ">Drink</button>
      </div>
      </div>
     
      <div className="mt-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {
        menuItems.map((item,index)=>(
          <MenuItem {...item} key={index} />
  ))
      }
      </div>
    </div>
  )
}

export default MenuWrapper