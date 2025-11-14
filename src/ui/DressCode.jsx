import Container from "./Container";
import DsColorPalette from '../assets/ds-color-pallete.png'
import DsGrass from '../assets/d-grass1.png'
import DsFairy1 from '../assets/ds-fairy1.webp'
import DsFairy2 from '../assets/ds-fairy2.webp'
import Flower1 from '../assets/flower1.webp'
import Flower2 from '../assets/flower2.webp'
import Flower3 from '../assets/flower3.webp'
import Flower4 from '../assets/flower4.webp'
import Flower5 from '../assets/flower5.webp'

const DressCode = () => {
    return ( 
        <section id="dress-code" className="pt-[77px] pb-[300px] px-[20px] overflow-hidden max-[1200px]:pb-[20vw] max-[1200px]:pt-[40px]" style={{ 
                backgroundImage: `url(${DsGrass})`, 
                backgroundSize: 'contain', 
                backgroundRepeat: 'no-repeat', 
                backgroundPosition: 'bottom' 
            }}>
            <Container>
                <h2 
                    className="font-playfair-display text-[50px] mb-[30px] text-center max-[767px]:text-[10vw]"
                >
                    DRESS CODE
                </h2>
                <div className="relative ds-text">
                    <img 
                        src={DsFairy2} 
                        className="ds-fairy2 max-[1200px]:top-[-156px] max-[1200px]:left-[-77px]" 
                    />
                    <p 
                        className="text-center text-[22px] max-w-[625px] mx-auto text-black max-[767px]:text-[4.2vw]"
                    >
                        Hi everyone! Come dressed in fairytale land colors — soft pinks, lilacs, mint greens, baby blues, or touches of white and gold. Or wear whatever color you want, as long as you feel confident and magical!
                    </p>
                    <img 
                        src={DsFairy1} 
                        className="ds-fairy1 max-[1200px]:top-[180px] max-[1200px]:right-[-90px]" 
                    />
                </div>
                <h3 
                    className="text-center text-[35px] font-playfair-display mt-[30px] max-[767px]:text-[7vw]"
                >
                    COLOR PALETTE
                </h3>
                <img 
                    src={DsColorPalette} 
                    className="mx-auto mt-[30px] max-[767px]:hidden" 
                    data-aos="fade-up"
                    data-aos-delay="300"
                    data-aos-duration="1000"
                />
                <div className="hidden mt-[30px] max-[767px]:flex flex-wrap justify-center">
                    <img 
                        src={Flower1} 
                        className="max-w-[26%]" 
                    />
                    <img 
                        src={Flower2} 
                        className="max-w-[26%]" 
                    />
                    <img 
                        src={Flower3} 
                        className="max-w-[26%]" 
                    />
                    <img 
                        src={Flower4} 
                        className="max-w-[26%]" 
                    />
                    <img 
                        src={Flower5} 
                        className="max-w-[26%]" 
                    />
                </div>
            </Container>
        </section>
     );
}
 
export default DressCode;