import Container from "./Container";
import invited from "../assets/you-are-invited.png"
import pinkCloud from "../assets/pink-cloud.png"
import fairyWand from "../assets/fairy-wand.png"
import pinkCastle from "../assets/pink-castle.png"
import unicorn from "../assets/unicorn.png"

const Hero = () => {
    return ( 
        <section id="home" className="bg-[#f8e6e4] pb-[200px] pt-20 relative overflow-hidden max-[500px]:pb-[179px]">
            <img src={pinkCloud} alt="pink-cloud" className="absolute top-[0] left-[-10%] w-[30%]" />
            <img src={pinkCloud} alt="pink-cloud" className="absolute top-[0] right-[-20%] w-[40%] max-[767px]:top-[40px] max-[767px]:right-[-5px] max-[767px]:max-w-[29%]" />
            <img src={unicorn} alt="unicorn" className="absolute top-[30%] max-w-[15%] left-[14%]" />
            <Container>
                <div className="flex flex-col items-center">
                    <img src={invited} alt="invited" className="mb-[65px] max-[768px]:max-w-[80%] max-[767px]:mb-[95px]" />
                    <h1 className="text-[131px] text-birthday-brown text-center mt-[-106px] font-playfair-display max-[767px]:text-[14vw]">
                        Eziah Kira 
                        <p className="text-[35px] text-left font-quick-sand text-[#bc024a] hidden max-[767px]:block max-[767px]:text-[5vw] ax-[767px]:mt-[-8px]">is turning</p>
                    </h1>
                    <div className="flex flex-start gap-[32px]">
                        <p className="text-[35px] text-[#bc024a] max-[767px]:hidden">is turning</p>
                        <h2 className="text-[115px] leading-[96px] font-bold text-[#eeadb4] font-playfair-display max-[767px]:text-[14vw] max-[767px]:font-normal max-[767px]:ml-[20vw] max-[767px]:mt-[-30px]">ONE</h2>
                    </div>
                </div>
            </Container>
            <img src={fairyWand} alt="fairy-wand" className="absolute bottom-[-5%] left-[0] max-w-[18%] max-[767px]:max-w-[30%] max-[767px]:left-[24px] max-[767px]:bottom-[53px]" />
            <img src={pinkCastle} alt="pink-castle" className="absolute bottom-[0] right-[0] max-w-[28%] max-[767px]:max-w-[40%] max-[767px]:bottom-[23px]" />
            
        </section>
     );
}
 
export default Hero;