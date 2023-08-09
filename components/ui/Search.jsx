import OutsideClickHandler from 'react-outside-click-handler';
import Title from "./Title";
/*.w-screen {
    width: 100vw;
}
.h-screen {
    height: 100vh;
}

*/
const Search = ({setisSearchModal}) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-['']
                    after:w-screen after:h-screen after:bg-purple-600 
                    after:absolute after:top-0 after:left-0   grid place-content-center">
          <OutsideClickHandler onOutsideClick={()=>setisSearchModal(false)}>
    <div className="w-full h-full grid place-content-center">
    <div className="relative z-50 w-[600px] h-[600px] bg-white border-2">
        <Title addClass="text-[40px]  text-center">  Search </Title>
        <input type="text"   placeholder='Search...' className='border w-full'/>
       </div>
    </div>
    </OutsideClickHandler>  
    </div>

  )
}

export default Search