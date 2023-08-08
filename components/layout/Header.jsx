import Logo from "../ui/Logo"

//h-full:height=100%
const Header = () => {
  return (
    <div className="h-[5.5rem] bg-secondary">
        <div className="container text-white mx-auto flex justify-between
        items-center h-full">
           <div><Logo/></div>
        <nav>
        <ul className="flex gap-x-2">
              <li className="px-[5px] py-[10px] uppercase  hover:text-primary cursor-pointer" >
                <a  href="index.html">Home </a>
              </li>
              <li className="px-[5px] py-[10px] uppercase  hover:text-primary cursor-pointer" >
                <a  href="menu.html">Menu</a>
              </li>
              <li className="px-[5px] py-[10px] uppercase  hover:text-primary cursor-pointer" >
                <a  href="about.html">About</a>
              </li>
              <li className="px-[5px] py-[10px] uppercase  hover:text-primary cursor-pointer" >
                <a  href="book.html">Book Table</a>
              </li>
            </ul>
        </nav>
        <div></div>  
        </div>
       
    </div>
  )
}

export default Header