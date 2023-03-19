import logo from "../../images/logo.svg";

function NavDesktop() {
    return (
        <nav className='flex justify-between items-center py-10 px-8'>
            <img src={logo} className="h-[32px]" />
            <div>
                <a href="#" className='mx-6 font-karla text-white'>About</a>
                <a href="#" className='mx-6 font-karla text-white'>Services</a>
                <a href="#" className='mx-6 font-karla text-white'>Project</a>
                <a href="#" className='mx-6 font-fraunces text-lg text-[#23303e] bg-white py-3 px-6 rounded-full hover:bg-slate-50/40 hover:text-white'>Contact</a>
            </div>
        </nav>
    );
}

export default NavDesktop;