function Testimonial({ img, content, name, job }) {
    return (
        <div className='text-center max-[1024px]:mb-12'>
            <img src={img} className="w-[48px] h-[48px] rounded-full mx-auto lg:mb-12 mb-6" />
            <p className='font-karla text-[#23303e] font-bold lg:mb-12 mb-6'>{content}</p>
            <p className='font-fraunces font-black text-[#23303e] text-base'>{name}</p>
            <p className='font-karla text-[#818498] text-sm mt-1'>{job}</p>
        </div>
    );
}

export default Testimonial;