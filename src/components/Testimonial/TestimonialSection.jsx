import emily from "../../images/image-emily.jpg";
import jennie from "../../images/image-jennie.jpg";
import thomas from "../../images/image-thomas.jpg";

import Testimonial from "./Testimonial";

function TestimonialSection() {
    const data = [
        {
            img: emily,
            content: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
            name: "Emily R.",
            job: "Marketing Director"
        },
        {
            img: thomas,
            content: `
        Sunnyside’s enthusiasm coupled with their keen interest in our 
        brand’s success made it a satisfying and enjoyable experience.`,
            name: "Thomas S.",
            job: "Chief Operating Officer"
        },
        {
            img: jennie,
            content: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
            name: "Jennie F.",
            job: "Business Owner"
        }
    ];
    return (
        <section className="bg-[#fe7867]/[.02] p-24">
            <h1 className='text-center text-2xl text-[#a7abae] font-fraunces mb-12 uppercase'>Client testimonials</h1>
            <div className='flex lg:justify-center lg:items-center gap-4 max-[1024px]:flex-wrap'>
                {
                    data.map((d, i) => <Testimonial {...d} key={i} />)
                }
            </div>
        </section>
    );
}

export default TestimonialSection;