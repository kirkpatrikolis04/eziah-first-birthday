import Container from "./Container";
import Calendar from "../assets/calendar.webp"
import Butterfly from "../assets/pink-butterfly.webp"
import Fairy from "../assets/fairy-with-umbrella.webp"
import { useState, useEffect } from "react";

const Rsvp = ({ handleModal }) => {
    const [buttonText, setButtonText] = useState("Click here!");
    const [disableButton, setDisableButton] = useState(false);

    useEffect(() => {
        const checkDate = () => {
            // Get current date in Philippine timezone (Asia/Manila, UTC+8)
            const now = new Date();
            const formatter = new Intl.DateTimeFormat("en-US", {
                timeZone: "Asia/Manila",
                year: "numeric",
                month: "numeric",
                day: "numeric"
            });
            
            const parts = formatter.formatToParts(now);
            const month = parseInt(parts.find(p => p.type === "month").value);
            const day = parseInt(parts.find(p => p.type === "day").value);
            
            // Check if current date is November 20 or later
            if (month > 11 || (month === 11 && day >= 21)) {
                setButtonText("TIMES UP");
                setDisableButton(true)
            } else {
                setButtonText("Click here!");
            }
        };

        checkDate();
        // Check every minute to update if date changes
        const interval = setInterval(checkDate, 60000);
        
        return () => clearInterval(interval);
    }, []);

    return ( 
        <section id="rsvp" className="pt-[115px] pb-[60px] px-[20px] bg-[#f8e6e4] relative overflow-hidden max-[767px]:pb-[40px] max-[767px]:pt-[40px]">
            <Container>
                <div className="flex justify-between max-[1200px]:justify-center max-[1200px]:gap-[40px] max-[767px]:flex-col-reverse">
                    <img src={Calendar} className="w-full max-w-[35%] object-contain max-[767px]:max-w-[48%] max-[767px]:absolute max-[767px]:bottom-[131px]" />
                    <div className="w-full max-w-[50%] max-[767px]:max-w-[100%]">
                        <h2 className="font-playfair-display text-[50px] mb-[30px] text-center relative max-w-[fit-content] mx-auto max-[767px]:text-[10vw]"><img src={Butterfly} className="max-w-[120px] absolute left-[-98px] top-[-64px] max-[767px]:max-w-[70px] max-[767px]:left-[-50px] max-[767px]:top-[-32px]" />RSVP</h2>
                        <p className="relative text-center text-[22px] max-w-[752px] mx-auto text-black max-[767px]:text-[4.2vw] max-[767px]:mb-[24px]">
                        Our little fairy can’t wait to celebrate with you!
                        Please let us know if you’ll sprinkle some magic with us ✨
                        Kindly respond before or on November 20💖
                        </p>
                        <div className="flex justify-center items-center">
                            <button onClick={handleModal} className={`cursor-pointer relative right-[-75px] text-[40px] py-[10px] px-[45px] border-[2px] border-[#d56dbd] rounded-[60px] max-[1200px]:whitespace-nowrap max-[900px]:text-[25px] max-[767px]:mt-[61%] ${disableButton ? 'pointer-events-none' : ''}`}>{buttonText}</button>
                            <img src={Fairy} className="max-w-[310px] max-[767px]:max-w-[66%]" />
                        </div>
                    </div>
                </div>
            </Container>
        </section>
     );
}
 
export default Rsvp;