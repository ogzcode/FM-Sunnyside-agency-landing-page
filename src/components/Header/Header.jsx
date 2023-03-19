import bgHeader from "../../images/desktop/image-header.jpg";
import arrowDown from "../../images/icon-arrow-down.svg";
import NavDesktop from "./NavDesktop";

function Header(){
  return (
    <header className="h-[100vh] bg-center bg-cover" style={{backgroundImage: `url(${bgHeader})`}}>
      <NavDesktop/>
      <div className='flex flex-col items-center mt-6'>
        <h1 className='text-white text-6xl mb-20 font-fraunces text-center'>We are creatives</h1>
        <img src={arrowDown} className="w-[32px]"/>
      </div>
    </header>
  );
}

export default Header;