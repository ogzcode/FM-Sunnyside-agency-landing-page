import cherry from "../../images/desktop/image-graphic-design.jpg";
import orange from "../../images/desktop/image-photography.jpg"

function MainBottom() {
    const data = [
        {
            title: "Graphic design",
            content: `Great design makes you memorable. We deliver artwork that
        underscores your brand message and captures potential clients’ attention.`,
            image: cherry,
            color: {
                title: "[#25564b]",
                content: "[#458c7e]"
            }
        },
        {
            title: "Photography",
            content: `Increase your credibility by getting the most stunning,
        high-quality photos that improve your business image.`,
            image: orange,
            color: {
                title: "[#23303e]",
                content: "[#19536b]"
            }
        }
    ];
    return (
        <section className='grid lg:grid-cols-2'>
            {
                data.map((d, i) => (
                    <div className='relative flex items-center flex-col' key={i}>
                        <img src={d.image} className="flex-1 w-full" />
                        <div className='absolute top-0 left-0 w-full h-full flex 
                  justify-end items-center flex-col lg:px-24 lg:pb-8 px-32 pb-16'>
                            <h1 className={`font-fraunces text-${d.color.title} text-3xl mb-6`}>{d.title}</h1>
                            <p className={`font-karla text-${d.color.content} text-md text-center`}>{d.content}</p>
                        </div>
                    </div>
                ))
            }
        </section>
    );
}

export default MainBottom;