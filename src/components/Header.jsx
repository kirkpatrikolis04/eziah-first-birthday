import { useState, useEffect, useRef } from "react";
import Container from "../ui/Container";
import CountDown from '../components/CountDown';

const Header = () => {
    const [shouldShowFixed, setShouldShowFixed] = useState(false);
    const [showNav, setShowNav] = useState(false);
    const isFixedRef = useRef(false);
    const ticking = useRef(false);
    const SCROLL_THRESHOLD = 100;
    const HYSTERESIS = 10; // Prevent flickering by adding buffer

    // Update ref when state changes
    useEffect(() => {
        isFixedRef.current = shouldShowFixed;
    }, [shouldShowFixed]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Throttle scroll events using requestAnimationFrame
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    // Use hysteresis to prevent rapid toggling
                    if (isFixedRef.current) {
                        // Currently fixed - only hide if scrolled back significantly
                        if (currentScrollY < SCROLL_THRESHOLD - HYSTERESIS) {
                            setShouldShowFixed(false);
                        }
                    } else {
                        // Currently relative - only show if scrolled past threshold
                        if (currentScrollY > SCROLL_THRESHOLD) {
                            setShouldShowFixed(true);
                        }
                    }
                    
                    ticking.current = false;
                });
                
                ticking.current = true;
            }
        };
        
        window.addEventListener("scroll", handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const headerHeight = 80; // Approximate header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        // Close mobile menu when link is clicked
        setShowNav(false);
    };

    const headerContent = (
        <Container>
            <CountDown />
            <div className="flex items-center hidden max-[901px]:flex max-[901px]:justify-center">
                {/* Hamburger Menu */}
                <button 
                    className="w-12 h-12 p-2 flex flex-col justify-center items-center gap-2 bg-[#fde4e1] rounded-md border-none outline-none cursor-pointer shadow-none min-w-[48px] min-h-[48px] max-[900px]:block hidden"
                    aria-label="Open navigation menu"
                    onClick={() => setShowNav(prev => !prev)}
                >
                    <span className={`block w-[40px] h-[4px] bg-birthday-brown rounded-full mb-[5px] ${showNav ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-[40px] h-[4px] bg-birthday-brown rounded-full transition ease-in ${showNav ? 'rotate-[45deg]' : ''}`}></span>
                    <span className={`block w-[40px] h-[4px] bg-birthday-brown rounded-full transition ease-in mt-[-4px] ${showNav ? 'rotate-[-45deg]' : ''}`}></span>
                    <span className={`block w-[40px] h-[4px] bg-birthday-brown rounded-full mt-[5px] ${showNav ? 'opacity-0' : ''}`}></span>
                </button>
            </div>
            <ul className={`flex gap-10 justify-center max-[900px]:hidden mobile-navigation ${!shouldShowFixed ? `nav-normal` : ''} ${showNav ? 'open' : ''}`}>
                <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-[18px] font-semibold text-birthday-brown outline-[none] cursor-pointer">Home</a></li>
                <li><a href="#event-details" onClick={(e) => { e.preventDefault(); scrollToSection('event-details'); }} className="text-[18px] font-semibold text-birthday-brown outline-[none] cursor-pointer">Event Details</a></li>
                <li><a href="#monthly-milestone" onClick={(e) => { e.preventDefault(); scrollToSection('monthly-milestone'); }} className="text-[18px] font-semibold text-birthday-brown outline-[none] cursor-pointer">Montly Milestone</a></li>
                <li><a href="#dress-code" onClick={(e) => { e.preventDefault(); scrollToSection('dress-code'); }} className="text-[18px] font-semibold text-birthday-brown outline-[none] cursor-pointer">Dress Code</a></li>
                <li><a href="#gift-ideas" onClick={(e) => { e.preventDefault(); scrollToSection('gift-ideas'); }} className="text-[18px] font-semibold text-birthday-brown outline-[none] cursor-pointer">Gift Ideas</a></li>
                <li><a href="#reminders" onClick={(e) => { e.preventDefault(); scrollToSection('reminders'); }} className="text-[18px] font-semibold text-birthday-brown outline-[none] cursor-pointer">Reminders</a></li>
                <li><a href="#rsvp" onClick={(e) => { e.preventDefault(); scrollToSection('rsvp'); }} className="text-[18px] font-semibold text-birthday-brown outline-[none] cursor-pointer">RSVP</a></li>
            </ul>
        </Container>
    );

    return ( 
        <>
            {/* Normal header in flow - visible when scrollY <= threshold */}
            <header 
                className={`bg-[#f8e6e4] p-5 relative z-50 will-change-transform transition-opacity duration-300 ease-in-out ${
                    shouldShowFixed 
                        ? 'opacity-0 invisible pointer-events-none' 
                        : 'opacity-100 visible pointer-events-auto'
                }`}
            >
                {headerContent}
            </header>

            {/* Fixed header - appears when scrollY > threshold with animation from top */}
            <header 
                className={`bg-[#f8e6e4] p-5 z-50 fixed top-0 left-0 right-0 shadow-md will-change-transform transition-all duration-300 ease-in-out ${
                    shouldShowFixed 
                        ? 'translate-y-0 opacity-100 visible pointer-events-auto' 
                        : '-translate-y-full opacity-0 invisible pointer-events-none'
                }`}
            >               
                {headerContent}
            </header>
        </>
     );
}
 
export default Header;