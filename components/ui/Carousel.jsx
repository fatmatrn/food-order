import Image from "next/image"
import Title from "./Title"


const Carousel = () => {
  return (
    <div className="h-[calc(100vh_-_88px)]">{/*ekranin tam boyundan headerin boyunu cikardik boylece resim tam oturdu*/}
        <div className="relative h-full w-full">
            <Image src="/images/hero-bg.jpg" alt="" layout="fill" objectFit="cover"/>
        </div>
        <div className="">
            <Title>Fast Food Restaurant</Title>
            <p>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
            <button className="btn-primary">Order Now</button>
        </div>
    </div>
  )
}

export default Carousel