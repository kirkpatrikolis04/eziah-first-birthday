import { useState } from 'react'
import Loader from '../assets/loader.gif';
import Baby from '../assets/baby.jpg'

const Modal = ({ membersList, urlId, handleModal }) => {


    const [formData, setFormData] = useState({
        choice: null,
        message:  ''
    });
    const [loader, setLoader] = useState(false);
    const [showMessage, setShowMessage] = useState(false)
    const [thankYou, setThankYou] = useState(false)
    const [status, setStatus] = useState(null)

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleClick = (e) => {
        setFormData(prev => ({
            ...prev,
            choice:  e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(formData.choice === null) {
            setShowMessage(true)
            setTimeout(() => {
                setShowMessage(false)
            }, 3000)
            return
        }
        setLoader(true);
        const data = {
            choice: formData.choice,
            message: formData.message
        }

        fetch(`https://sheet2api.com/v1/PUlYBHXySfKr/eziah_1st-bday?id=${urlId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to submit review. Status: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log("Review submitted successfully:", data);
            // Optionally, update the frontend UI to reflect the new review
            setStatus(data[0].choice)
            setFormData(prev => ({
                ...prev,
                choice: null,
                message: ""
            }))
            setLoader(false);
            setThankYou(true)
        })
        .catch(error => {
            console.error("Error submitting review:", error);
        });

    }

    return ( 
        <div className="fixed inset-[0] z-[9999] bg-[#000000e6] flex justify-center items-center flex-col px-5">
            <div className="bg-[#f8e6e4] w-full max-w-[500px] p-8 pt-[40px] shadow-lg rounded-lg relative">
                <button
                    onClick={handleModal}
                    aria-label="Close"
                    className="absolute top-0 right-4 text-[35px] cursor-pointer text-[#870e6d] font-bold rounded-full flex items-center justify-center"
                    type="button"
                >
                    &times;
                </button>
                {thankYou ? (
                    <>
                        <img src={Baby} className='rounded-[50%] w-[100px] h-[100px] object-cover mx-auto mb-[20px]' />
                        {status === 'Yes' ? (
                            <>
                                <h1  className='text-center font-semibold text-[27px] leading-[1.3] font-baloo-bhaijaan max-auto'>Thank you for your response!</h1>
                                <p className='text-center font-semibold text-[19px] mt-2'>See you at the fairy celebration! 🌷</p>
                            </>
                        ) : (
                            <p className='text-center font-semibold text-[20px] mt-2'>Oh no, the fairies will miss your sparkle! ✨
                        Sending a sprinkle of magic your way — thank you for letting us know. 💕</p>
                        )}
                        <div className='flex flex-col gap-[20px] mt-[16px]'>
                            <p className='text-center'>If you change your mind, you can still update your RSVP response — just make sure to do it on or before November 20. Click the button below to make any changes. 💫</p>
                            <button
                                onClick={() => setThankYou(false)}
                                className="w-full bg-birthday-pink-900 text-white p-2 rounded-lg shadow-lg cursor-pointer hover:bg-[#870e6d]"
                            >
                                Update RSVP
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        {membersList.members.split(",")?.length < 2 && (
                            <h3 className='text-birthday-pink-900 font-bold text-[39px] font-baloo-bhaijaan'>
                                Hi, {membersList.members}
                            </h3>
                        )}
                        <h2 className="text-[24px] font-semibold leading-[1.2] text-black max-[767px]:text-[22px]">
                            We’d love to celebrate this special day with you! Please confirm if you’ll be joining the party below.
                        </h2>
                        <div
                            className="py-5"
                            style={
                                membersList.members.split(",")?.length < 2
                                    ? { paddingTop: 0 }
                                    : undefined
                            }
                        >
                            {membersList.members.split(",")?.length > 1 && (
                                <>
                                    <h2 className="font-bold text-[20px] text-black max-[767px]:text-[18px]">You are one of the invited Guests:</h2>
                                    <ul className="list-disc pl-[20px] columns-[2] p-1">
                                        {membersList.members.split(",").map(member => (
                                            <li
                                                key={member}
                                                className="font-semibold text-birthday-pink-900 font-bold font-baloo-bhaijaan text-[20px] max-[767px]:text-[18px]"
                                            >
                                                {member}
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            <div className="flex flex-col gap-2 mt-5">
                                <button
                                    onClick={handleClick}
                                    value={'Yes'}
                                    className="w-full font-semibold text-birthday-pink-900 bg-white border border-[#bd0e97] py-2 px-5 rounded-lg shadow-lg cursor-pointer hover:bg-[#870e6d] hover:text-white focus:bg-[#870e6d] focus:text-white"
                                    style={formData.choice === 'Yes' ? { backgroundColor: '#870e6d', color: 'white' } : null}
                                >
                                    Yes, {membersList.members.split(",")?.length < 2 ? 'I' : 'we'}’ll be there 🎉
                                </button>
                                <button
                                    onClick={handleClick}
                                    value={'No'}
                                    className="w-full font-semibold text-birthday-pink-900 bg-white border border-[#bd0e97] py-2 px-5 rounded-lg shadow-lg cursor-pointer hover:bg-[#870e6d] hover:text-white focus:bg-[#870e6d] focus:text-white"
                                    style={formData.choice === 'No' ? { backgroundColor: '#870e6d', color: 'white' } : null}
                                >
                                    Sorry, {membersList.members.split(",")?.length < 2 ? 'I' : 'we'} can’t 😢
                                </button>
                            </div>
                            <div className="mt-5">
                                <label htmlFor="message" className="font-semibold">
                                    Message (Optional)
                                </label>
                                <textarea
                                    onChange={handleChange}
                                    value={formData.message}
                                    name="message"
                                    placeholder="Let us know if you have concerns"
                                    rows={3}
                                    className="p-2 mt-2 border border-[#bd0e97] w-full outline-none rounded-lg bg-white text-black"
                                ></textarea>
                            </div>
                            <div className="mt-5 flex justify-center">
                                {loader ? (
                                    <img src={Loader} className='max-w-[20px]' />
                                ) : (
                                    <button
                                        onClick={handleSubmit}
                                        className="w-full bg-birthday-pink-900 text-white p-2 rounded-lg shadow-lg cursor-pointer hover:bg-[#870e6d]"
                                    >
                                        Submit
                                    </button>
                                )}
                            </div>
                            {showMessage && (
                                <div className='bg-red-500 text-white w-full max-w-[500px] text-center rounded-lg p-4 mt-2'>
                                    Please choose an option
                                </div>
                            )}
                        </div>
                    </>
                )}
                
                </div>
            </div>
            
     );
}
 
export default Modal;