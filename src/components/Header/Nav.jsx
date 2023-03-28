import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";
import { useState } from "react";

function Nav() {
    const [show, setShow] = useState("hidden");
    return (
        <nav className='flex justify-between items-center py-5 md:py-10 px-8 relative'>
            <img src={logo} className="h-[32px]" />
            <button className="hidden max-[768px]:block" onClick={() => setShow(show === "hidden" ? "block" : "hidden")}><img src={hamburger} /></button>
            <div className="max-[768px]:hidden">
                <a href="#" className='mx-6 font-karla text-white'>About</a>
                <a href="#" className='mx-6 font-karla text-white'>Services</a>
                <a href="#" className='mx-6 font-karla text-white'>Project</a>
                <a href="#" className='mx-6 font-fraunces text-lg text-[#23303e] bg-white py-3 px-6 rounded-full hover:bg-slate-50/40 hover:text-white'>Contact</a>
            </div>
            <div
                className={`${show} absolute bg-white top-full right-8 left-8 text-center py-2 min-[768px]:hidden`}>
                <a href="#" className='text-[#334155] block my-8 font-karla font-bold'>About</a>
                <a href="#" className='text-[#334155] block my-8 font-karla font-bold'>Services</a>
                <a href="#" className='text-[#334155] block my-8 font-karla font-bold'>Project</a>
                <a href="#" className='text-[#334155] inline-block mb-8 font-fraunces font-bold bg-[#fad400] text-lg px-6 py-3 rounded-full'>Contact</a>
                <div className="triangle"></div>
            </div>
        </nav>
    );
}

export default Nav;