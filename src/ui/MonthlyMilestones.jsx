import Marquee from "react-fast-marquee";
import MileStone1 from "../assets/milestone1.webp";
import MileStone2 from "../assets/milestone2.webp";
import MileStone3 from "../assets/milestone3.webp";
import MileStone4 from "../assets/milestone4.webp";
import MileStone5 from "../assets/milestone5.webp";
import MileStone6 from "../assets/milestone6.webp";
import MileStone7 from "../assets/milestone7.webp";
import MileStone8 from "../assets/milestone8.webp";
import MileStone9 from "../assets/milestone9.webp";
import MileStone10 from "../assets/milestone10.webp";
import MileStone11 from "../assets/milestone11.webp";
import MileStone12 from "../assets/milestone12.webp";
import Mmbg from '../assets/mm-bg1.png'

const MonthlyMilestones = () => {
    return (
        <section
            id="monthly-milestone"
            className="bg-contain bg-bottom pb-[50px] pt-[77px] max-[767px]:pt-[45px] max-[767px]:pb-[10px]"
            style={{ backgroundImage: `url(${Mmbg})`, backgroundColor: '#f8e6e4' }}
        >
            <h2 className="font-playfair-display text-[50px] mb-[40px] text-center max-[767px]:text-[10vw] max-[767px]:leading-[1.3] max-[767px]:mb-[20px]">MONTHLY MILESTONE</h2>
            <Marquee autoFill={true}>
                <div className='mx-20 max-[1200px]:mx-0'>
                    <img src={MileStone1} alt="" className='max-w-[300px]' />
                    <h3 className="text-center text-[#b46a6f] relative top-[-67px] font-baloo-bhaijaan font-bold text-[24px]">1st Month</h3>
                </div>
                <div className='mx-20 max-[1200px]:mx-0'>
                    <img src={MileStone2} alt="" className='max-w-[300px]' />
                    <h3 className="text-center text-[#b46a6f] relative top-[-67px] font-baloo-bhaijaan font-bold text-[24px]">2nd Month</h3>
                </div>
                <div className='mx-20 max-[1200px]:mx-0'>
                    <img src={MileStone3} alt="" className='max-w-[300px]' />
                    <h3 className="text-center text-[#b46a6f] relative top-[-67px] font-baloo-bhaijaan font-bold text-[24px]">3rd Month</h3>
                </div>
                <div className='mx-20 max-[1200px]:mx-0'>
                    <img src={MileStone4} alt="" className='max-w-[300px]' />
                    <h3 className="text-center text-[#b46a6f] relative top-[-67px] font-baloo-bhaijaan font-bold text-[24px]">4th Month</h3>
                </div>
                <div className='mx-20 max-[1200px]:mx-0'>
                    <img src={MileStone5} alt="" className='max-w-[300px]' />
                    <h3 className="text-center text-[#b46a6f] relative top-[-67px] font-baloo-bhaijaan font-bold text-[24px]">5th Month</h3>
                </div>
                <div className='mx-20 max-[1200px]:mx-0'>
                    <img src={MileStone6} alt="" className='max-w-[300px]' />
                    <h3 className="text-center text-[#b46a6f] relative top-[-67px] font-baloo-bhaijaan font-bold text-[24px]">6th Month</h3>
                </div>
                <div className='mx-20 max-[1200px]:mx-0'>
                    <img src={MileStone7} alt="" className='max-w-[300px]' />
                    <h3 className="text-center text-[#b46a6f] relative top-[-67px] font-baloo-bhaijaan font-bold text-[24px]">7th Month</h3>
                </div>
                <div className='mx-20 max-[1200px]:mx-0'>
                    <img src={MileStone8} alt="" className='max-w-[300px]' />
                    <h3 className="text-center text-[#b46a6f] relative top-[-67px] font-baloo-bhaijaan font-bold text-[24px]">8th Month</h3>
                </div>
                <div className='mx-20 max-[1200px]:mx-0'>
                    <img src={MileStone9} alt="" className='max-w-[300px]' />
                    <h3 className="text-center text-[#b46a6f] relative top-[-67px] font-baloo-bhaijaan font-bold text-[24px]">9th Month</h3>
                </div>
                <div className='mx-20 max-[1200px]:mx-0'>
                    <img src={MileStone10} alt="" className='max-w-[300px]' />
                    <h3 className="text-center text-[#b46a6f] relative top-[-67px] font-baloo-bhaijaan font-bold text-[24px]">10th Month</h3>
                </div>
                <div className='mx-20 max-[1200px]:mx-0'>
                    <img src={MileStone11} alt="" className='max-w-[300px]' />
                    <h3 className="text-center text-[#b46a6f] relative top-[-67px] font-baloo-bhaijaan font-bold text-[24px]">11th Month</h3>
                </div>
                <div className='mx-20 max-[1200px]:mx-0'>
                    <img src={MileStone12} alt="" className='max-w-[300px]' />
                    <h3 className="text-center text-[#b46a6f] relative top-[-67px] font-baloo-bhaijaan font-bold text-[24px]">12th Month</h3>
                </div>
            </Marquee>
        </section>
     );
}
 
export default MonthlyMilestones;