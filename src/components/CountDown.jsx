import {useEffect, useRef} from 'react';

const CountDown = () => {
    const intervalRef = useRef(null);
    const observerRef = useRef(null);
    const containerRef = useRef(null);
    const uniqueIdRef = useRef(`countdown-${Math.random().toString(36).substring(2, 11)}`);

    useEffect(() => {
        const enableBanner = true;
        if (!enableBanner) return;

        const uniqueId = uniqueIdRef.current;
        const countdownTimerId = `countdownTimer-${uniqueId}`;

        // Create and insert the banner HTML with unique IDs
        const saleBannerHTML = `
            <div class="sale-banner active">
                <div class="sale-banner__container">
                    <div class="sale-banner__time">
                        <div class="group-time">
                            <span id="sale-days-${uniqueId}">00</span>
                            <span>Days</span>
                        </div>
                        <div class="group-time">
                            <span id="sale-hours-${uniqueId}">00</span>
                            <span>Hours</span>
                        </div>
                        <div class="group-time">
                            <span id="sale-minutes-${uniqueId}">00</span>
                            <span>Minutes</span>
                        </div>
                        <div class="group-time">
                            <span id="sale-seconds-${uniqueId}">00</span>
                            <span>Seconds</span>
                        </div>
                    </div>
                </div>
            </div>
        `;

        const countdownTimer = containerRef.current;
        if (countdownTimer) {
            // Set unique ID on the container
            countdownTimer.id = countdownTimerId;
            // Check if banner already exists
            if (!countdownTimer.querySelector('.sale-banner')) {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = saleBannerHTML;
                countdownTimer.insertBefore(tempDiv.firstElementChild, countdownTimer.firstChild);
            }
        } else {
            return;
        }

        // Function to parse date in Philippine timezone
        const parseDateInTimezone = (dateString) => {
            // Parse the date string as if it's in the target timezone
            // Example: "Dec 22, 2025 07:45:00 PM" in Asia/Manila
            const date = new Date(dateString + ' GMT+0800'); // Manila is UTC+8
            return date.getTime();
        };

        // Initialize countdown
        const initCountdown = () => {
            const countdownTimer = containerRef.current;
            if (!countdownTimer) return;

            const saleBanner = countdownTimer.querySelector('.sale-banner');
            if (!saleBanner) return;

            const daysElement = document.getElementById(`sale-days-${uniqueId}`);
            const hoursElement = document.getElementById(`sale-hours-${uniqueId}`);
            const minutesElement = document.getElementById(`sale-minutes-${uniqueId}`);
            const secondsElement = document.getElementById(`sale-seconds-${uniqueId}`);

            if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
                return;
            }

            // Clear any existing interval
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }

            const inputDate = "Nov 21, 2025 00:00:00 AM";
            const targetDate = parseDateInTimezone(inputDate);

            // Store target date in localStorage
            const storedDate = localStorage.getItem("countdownTarget");
            if (!storedDate || parseInt(storedDate) !== targetDate) {
                localStorage.setItem("countdownTarget", targetDate.toString());
            }

            // Update timer function
            const updateTimer = () => {
                const now = new Date().getTime();
                let distance = targetDate - now;

                if (distance < 0) {
                    daysElement.textContent = '00';
                    hoursElement.textContent = '00';
                    minutesElement.textContent = '00';
                    secondsElement.textContent = '00';
                    
                    if (saleBanner) {
                        saleBanner.classList.remove('active');
                    }
                    
                    // Update margin for adjacent elements
                    if (countdownTimer && countdownTimer.nextElementSibling) {
                        countdownTimer.nextElementSibling.style.setProperty("margin-top", "0", "important");
                    }
                    document.querySelectorAll(".page404").forEach(e => {
                        e.style.setProperty("margin-top", "0", "important");
                    });

                    // Clear interval when countdown ends
                    if (intervalRef.current) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                    }
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                daysElement.textContent = days.toString().padStart(2, '0');
                hoursElement.textContent = hours.toString().padStart(2, '0');
                minutesElement.textContent = minutes.toString().padStart(2, '0');
                secondsElement.textContent = seconds.toString().padStart(2, '0');
            };

            // Initial update
            updateTimer();

            // Set up interval
            intervalRef.current = setInterval(updateTimer, 1000);
        };

        // Start countdown
        initCountdown();

        // Use MutationObserver to detect when banner is added (fallback)
        const timerContainer = containerRef.current;
        if (timerContainer && !timerContainer.querySelector('.sale-banner')) {
            observerRef.current = new MutationObserver((mutationsList) => {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'childList' && timerContainer && timerContainer.querySelector('.sale-banner')) {
                        initCountdown();
                        if (observerRef.current) {
                            observerRef.current.disconnect();
                            observerRef.current = null;
                        }
                        break;
                    }
                }
            });

            observerRef.current.observe(timerContainer, { childList: true, subtree: true });
        }

        // Cleanup function
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
            if (observerRef.current) {
                observerRef.current.disconnect();
                observerRef.current = null;
            }
        };
    }, []);

    return ( 
        <div className='text-center flex flex-col gap-[6px] p-[11px] pt-0'>
            <p className="font-semibold max-[767px]:text-[14px]">Please respond until November 20, 2025</p>
            <div ref={containerRef}></div>
        </div>
    );
}
 
export default CountDown;