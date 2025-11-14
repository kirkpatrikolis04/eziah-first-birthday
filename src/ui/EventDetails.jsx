import EventDetailsImg1 from '../assets/event-details-img11.png';
import EventDetailsImg2 from '../assets/event-details-img2.png';
import CalendarHeart from '../assets/calendar-heart.webp';
import LocationPin from '../assets/location-pin.png';
import Jollibee from '../assets/jollibee.png';
import Butterflies from '../assets/butterflies.png';
import Container from "./Container";

const EvenDetails = () => {
    return ( 
        <section
            id="event-details"
            className="relative bg-cover bg-center px-[20px] pt-[75px] pb-[75px] min-h-[500px] overflow-hidden max-[767px]:pt-[45px] max-[767px]:pb-[90px]"
        >
            <img src={EventDetailsImg1} alt="EventDetailsImg1" className='absolute top-[0] left-[0] z-[-1] max-[1200px]:max-w-[28%] max-[1200px]:top-[unset] max-[900px]:bottom-[0] max-[767px]:hidden' />
            <img src={Butterflies} className='hidden max-[767px]:block absolute max-w-[30%] top-[110px] left-[-37px]' />
            <Container>
                <h3 className="text-[32px] leading-[1.8] font-playfair-display font-normal text-[#000] text-center mb-4 max-[1200px]:text-[28px] max-[767px]:text-[6vw] max-[767px]:leading-[1.5]">A sprinkle of stardust, a dash of delight, join us in celebrating<br className='max-[900px]:hidden'/> our fairy’s very first flight! </h3>
                <div className='flex justify-center flex-col align-center text-center gap-[40px] my-[60px] max-[767px]:mt-[45px]'>
                    <div>
                        <div className='flex items-center justify-center gap-[48px] max-[767px]:gap-[30px]'>
                            <img src={CalendarHeart} alt="CalendarHeart" className='max-w-[75px] relative left-[10px] max-[767px]:max-w-[16%] max-[767px]:left-[8px]' />
                            <h2 className='font-baloo-bhaijaan text-[32px] text-black font-bold max-[767px]:text-[6vw]'>SUNDAY</h2>
                        </div>
                        <p className='text-[22px] text-black font-semibold mt-[24px] max-[767px]:text-[4vw]'>November 23, 2025   /    10:00 am- 12pm</p>
                    </div>
                    <div>
                        <div className='flex items-center justify-center gap-[48px] max-[767px]:gap-[30px]'>
                            <img src={LocationPin} alt="LocationPin" className='max-w-[57px] max-[767px]:max-w-[12%]' />
                            <h2 className='font-baloo-bhaijaan text-[32px] text-black font-bold max-[767px]:text-[6vw]'>VENUE</h2>
                        </div>
                        <a href="https://www.google.com/maps/place/Jollibee/@10.3153001,123.8915347,15z/data=!4m10!1m2!2m1!1sJollibee,+Osme%C3%B1a+Blvd,+Cebu+City,+Cebu+capitol!3m6!1s0x33a9990b296f932d:0x41b512f3e8f5e503!8m2!3d10.3153286!4d123.8915243!15sCi9Kb2xsaWJlZSwgT3NtZcOxYSBCbHZkLCBDZWJ1IENpdHksIENlYnUgY2FwaXRvbCIDiAEBWi4iLGpvbGxpYmVlIG9zbWXDsWEgYmx2ZCBjZWJ1IGNpdHkgY2VidSBjYXBpdG9skgEUZmFzdF9mb29kX3Jlc3RhdXJhbnSaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVTnFOWFpZTkhKUlJSQULgAQD6AQQIABA5!16s%2Fg%2F1hdzh6j42?entry=ttu&g_ep=EgoyMDI1MTEwNS4wIKXMDSoASAFQAw%3D%3D" target='_blank' className='block underline text-underline text-[22px] text-black font-semibold mt-[24px] max-[767px]:text-[4vw]'>Jollibee, Osmeña Blvd, Cebu City, Cebu</a>
                    </div>
                </div>
            </Container>
            <img src={EventDetailsImg2} alt="EventDetailsImg2" className='absolute top-[0] right-[0] z-[-1] max-[1200px]:max-w-[28%] max-[1200px]:right-[-70px] max-[1200px]:bottom-[0] max-[1200px]:top-[unset] max-[767px]:hidden' />
            <img src={Jollibee} alt="EventDetailsImg2" className='absolute bottom-[0] left-[50%] translate-x-[-50%] z-[-1] hidden max-[767px]:max-w-[38%] max-[767px]:block' />
            <img src={Butterflies} className='hidden max-[767px]:block absolute max-w-[30%] top-[284px] z-[-1] scale-x-[-1] right-[-37px]' />
        </section>
     );
}
 
export default EvenDetails;