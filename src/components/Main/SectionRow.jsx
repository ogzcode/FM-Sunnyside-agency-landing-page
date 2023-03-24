import standout from "../../images/desktop/image-stand-out.jpg";

function SectionRow({ title, content, image }) {
    let baseStyle = "flex flex-col justify-center items-center bg-[#fe7867]/[.02] px-16 lg:px-24";
    let linkStyle = "relative px-2 md:self-start font-fraunces lg:text-2xl text-xl text-[#23303e] font-bold after:bg-red-200 row__link";
    return (
        <div className='grid md:grid-cols-2 grid-rows-2 md:grid-rows-1'>
            <div className={image === standout ? `${baseStyle} order-2` : baseStyle}>
                <h1 className='md:self-start self-center lg:text-6xl text-3xl font-fraunces text-[#23303e]'>{title}</h1>
                <p className='md:self-start max-[768px]:text-center text-[#818498] font-karla lg:my-8 my-4 text-md'>{content}</p>
                <a href="#"
                    className=
                    {image == standout ?
                        `${linkStyle} after:bg-[#fe7867] hover:after:opacity-100` :
                        `${linkStyle} after:bg-[#fad400] hover:after:opacity-100`}>
                    Learn more
                </a>
            </div>
            <img src={image} className="object-contain w-full max-[768px]:-order-1" />
        </div>
    );
}

export default SectionRow;