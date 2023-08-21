import Title from "../ui/Title"


const Footer = () => {
  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto">
        <div>
        <div>
          <Title addClass="">Contact Us</Title>
          <div>
          <span>
          <i class="fa fa-map-marker"></i>
          </span>
          </div>
        </div>
        <div>
        <Title addClass="">Feane</Title>
        </div>
        <div>
        <Title addClass="">Opening Hours</Title>
        </div>
        </div>
        

        
        <div>
          <p className="text-center">© 2023 All Rights Reserved By Free Html Templates</p>
        </div>
      </div>
    </div>
  )
}

export default Footer