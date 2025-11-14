import Container from "./Container";
import Gift from "../assets/gi-gift.png"
import Fairy from "../assets/gi-fairy.png"
const GiftIdeas = () => {
    return ( 
        <section id="gift-ideas" className="pt-[115px] pb-[178px] px-[20px] bg-[#f8e6e4] relative overflow-hidden max-[1200px]:pt-[40px] max-[1200px]:pb-[90px] max-[767px]:pb-[111px]">
            <img src={Gift} className="max-w-[35%] absolute left-[5%] bottom-[0] max-[1500px]:max-w-[22%] z-[1] max-[767px]:max-w-[35%] max-[767px]:bottom-[-20px] max-[767px]:left-[-20px]" />
            <Container className="max-w-[1200px] mx-auto relative z-[2]">
                <h2 className="font-playfair-display text-[50px] mb-[30px] text-center max-[767px]:text-[10vw]">GIFT IDEAS</h2>
                <p className="text-center text-black text-[22px] max-[767px]:text-[4.2vw]">Your presence means the world to us! <br className="max-[767px]:hidden"/>
                But if you’d like to give a gift, <br className="max-[767px]:hidden"/>
                anything useful or from the heart is truly appreciated.
                </p>
                <p className="mt-[40px] text-center text-black text-[22px] max-[767px]:text-[4.2vw]">
                <strong>Gift Guide:</strong> <br/>
                Diaper Pampers Pants (XL) <br/>
                EQ Water-Based Wipes <br/>
                Clothes (1 year old) <br/>
                Educational toys or books <br/>
                Mustela Stelatopia
                </p>
            </Container>
            <img src={Fairy} className="absolute top-[20px] right-0 max-[1500px]:max-w-[40%] z-[1] max-[767px]:max-w-[60%] max-[767px]:right-[-60px]" />
        </section>
     );
}
 
export default GiftIdeas;