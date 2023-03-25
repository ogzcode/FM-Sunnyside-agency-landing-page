import cone from "../images/desktop/image-gallery-cone.jpg";
import orange from "../images/desktop/image-gallery-orange.jpg";
import sugarcubes from "../images/desktop/image-gallery-sugarcubes.jpg";
import milkbottles from "../images/desktop/image-gallery-milkbottles.jpg";

function ImageGallery() {
    const images = [milkbottles, orange, cone, sugarcubes];
    return (
        <section className='grid md:grid-cols-4 grid-cols-2'>
            {
                images.map((img, i) => <img src={img} key={i} />)
            }
        </section>
    );
}


export default ImageGallery;