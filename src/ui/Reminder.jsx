import Container from "./Container";
import Crown from "../assets/r-crown.webp"
import Smoking from "../assets/no-smoking.webp"
import Mask from "../assets/mask.webp"
import Kiss from "../assets/kiss.webp"
import Hanitize from "../assets/hanitize.webp"
import Fairy from "../assets/reminder-fairy.webp" 

const Reminder = () => {
    return ( 
        <section id="reminders" className="pt-[77px] pb-[100px] px-[20px] max-[1200px]:pt-[45px] max-[1200px]:pb-[100px] max-[900px]:pb-[50px]">
            <Container>
                <h2 className="font-playfair-display text-[50px] mb-[30px] text-center max-[767px]:text-[10vw]">REMINDER</h2>
                <p className="relative text-center text-[22px] max-w-[752px] mx-auto text-black max-[1200px]:max-w-[650px] max-[900px]:max-w-[515px] max-[767px]:text-[4.2vw]">
                <img src={Crown} className="absolute top-[-147px] max-w-[20%] right-[42px] rotate-[19deg] z-[-1] max-[767px]:top-[-125px]" />
                <img src={Fairy} className="absolute top-[-60px] max-w-[20%] left-[-150px] scale-x-[-1] max-[1200px]:left-[-117px] max-[767px]:left-[0] max-[767px]:top-[-85px] z-[-1]" />
                To help keep everyone healthy and safe, specially our little ones, here are
                some friendly reminders and safety tips for all of us to follow.
                </p>
                <div className="mt-[60px] flex justify-center items-center gap-[7%] reminder-lists">
                    <div className="flex flex-col items-center justify-center">
                        <img src={Smoking} className="mb-5" />
                        <p className="text-center text-[18px] text-black max-[767px]:text-[4.2vw]">
                        NO SMOKING <br className="max-[1600px]:hidden"/>
                        OR VAPING
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img src={Mask} className="mb-5 max-h-[200px] min-h-[200px] object-contain" />
                        <p className="text-center text-[18px] text-black max-[767px]:text-[4.2vw]">
                        WEAR FACEMASK <br/>
                        (IF YOU HAVE COUGH/COLDS) 
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img src={Kiss} className="mb-5 py-[9px] max-h-[200px]" />
                        <p className="text-center text-[18px] text-black max-[767px]:text-[4.2vw]">
                        NO KISSING <br className="max-[1600px]:hidden"/> TO EZIAH
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <img src={Hanitize} className="mb-5 max-h-[200px]" />
                        <p className="text-center text-[18px] text-black max-[767px]:text-[4.2vw]">
                        SANITIZE <br className="max-[1600px]:hidden"/> YOUR HANDS
                        </p>
                    </div>
                </div>
            </Container>
        </section>
     );
}
 
export default Reminder;