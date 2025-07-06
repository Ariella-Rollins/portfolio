import { useState } from "react";
import emailjs from '@emailjs/browser';

const popup = ({ setPopup }) => {
    const [emailSent, setEmailSent] = useState(false)
    const [data, setData] = useState({ name: "", email: "", subject: "", message: "" })
    const [errors, setErrors] = useState({})


    const sendEmail = (e) => {
        e.preventDefault();
        console.log("data", data)
        setErrors(null)
        let valid = true
        if (data.name.length < 2) {
            setErrors(prev => ({ ...prev, name: "Name must be at least 2 characters" }))
            valid = false
        }
        if (data.subject.length < 2) {
            setErrors(prev => ({ ...prev, subject: "Subject must be at least 2 characters" }))
            valid = false
        }
        if (!data.email.includes("@") || data.email.length < 6) {
            setErrors(prev => ({ ...prev, email: "Please enter a valid email." }))
            valid = false
        }
        if (data.message.length < 6) {
            setErrors(prev => ({ ...prev, message: "Message must be at least 6 characters." }))
            valid = false
        }

        if (valid == true) {
            emailjs.sendForm('service_q1ub1mi', 'template_rlwc12b', e.target,'1cSNxnu5NRMflBbiE')
            .then(
            (result) => {
                console.log('Email sent:', result.text);
            },
            (error) => {
                console.error('Error sending email:', error.text);
            }
        );
        setEmailSent(true)
        }
        
    };

    return (
        <div className='popup-overlay'>
            <div className='popup bg-slate-400 border-t-3 border-t-white pt-[5px] pr-[10px] pb-[20px] pl-[10px]'>
                <div className="flex flex-col justify-center items-center">
                    <div className='flex flex-row justify-end items-start w-[100%]'>
                        <button onClick={() => { setPopup(false); setEmailSent(false) }} className='hover:bg-white/30 py-.5 px-1 rounded-lg'>X</button>
                    </div>
                    {!emailSent ? <form className=' inset-shadow-sm inset-shadow-slate-800 flex flex-col items-center h-fit m-2 p-10 bg-slate-300 border-2 border-slate-600 rounded-md' onSubmit={sendEmail}>
                        <h2 className="mb-8">Questions? Suggestions? <br></br>Shoot me a message!</h2>
                        {errors?.name && <p className="mb-4 bg-red-300 px-2">{errors.name}</p>}
                        <div className="flex justify-between gap-10 sm:w-100 w-80 mb-8">
                            <label htmlFor="name" className='text-lg'>Name:</label>
                            <input type="text" onChange={(e) => setData(prev => ({ ...prev, name: e.target.value }))} className='inset-shadow-sm inset-shadow-slate-400 border-2 border-slate-600 bg-white sm:w-[294px] w-[70%] pl-2 pr-2 pt-1 pb-1 m-0 rounded-lg focus:border-black-500 focus:border-2 focus:outline-3 focus:outline-offset-0 focus:outline-white' name="name" id="" />
                        </div>
                        {errors?.email && <p className="mb-4 bg-red-300 px-2">{errors.email}</p>}
                        <div className="flex justify-between gap-10 sm:w-100 w-80  mb-8">
                            <label htmlFor="email" className='text-lg'>Email:</label>
                            <input type="email" onChange={(e) => setData(prev => ({ ...prev, email: e.target.value }))} className='inset-shadow-sm inset-shadow-slate-400 border-2 border-slate-600 bg-white sm:w-[294px]  w-[70%] pl-2 pr-2 pt-1 pb-1 m-0 rounded-lg focus:border-black-500 focus:border-2 focus:outline-3 focus:outline-offset-0 focus:outline-white' name="email" id="" />
                        </div>
                        {errors?.subject && <p className="mb-4 bg-red-300 px-2">{errors.subject}</p>}
                        <div className="flex justify-between gap-10 sm:w-100 w-80 mb-8">
                            <label htmlFor="subject" className='text-lg'>Subject:</label>
                            <input type="text" onChange={(e) => setData(prev => ({ ...prev, subject: e.target.value }))} className='inset-shadow-sm inset-shadow-slate-400 border-2 border-slate-600 bg-white sm:w-[294px]  w-[70%] pl-2 pr-2 pt-1 pb-1 m-0 rounded-lg focus:border-black-500 focus:border-2 focus:outline-3 focus:outline-offset-0 focus:outline-white' name="subject" id="" />
                        </div>
                        {errors?.message && <p  className="mb-4 bg-red-300 px-2">{errors.message}</p>}
                        <div className="flex justify-between gap-10 sm:w-100 w-80 mb-8">
                            <label htmlFor="message" className='text-lg'>Message:</label>
                            <textarea name="message" onChange={(e) => setData(prev => ({ ...prev, message: e.target.value }))} className='inset-shadow-sm inset-shadow-slate-400 border-2 border-slate-600 bg-white sm:w-[300px] w-[72%] pl-2 pr-2 pt-1 pb-1 m-0 rounded-lg focus:border-black-500 focus:border-2 focus:outline-3 focus:outline-offset-0 focus:outline-white' rows="3"></textarea>
                        </div>
                        <input type="submit" className=" border-2 border-purple-900 hover:border-purple-800 rounded-md pt-2 pb-2 pl-4 pr-4 inset-shadow-indigo-500 bg-gradient-to-r from-[#1fe1ff] to-[#8423f3] hover:bg-gradient-to-r hover:from-[#64eaff] hover:to-[#9f52f8] p-2 m-2 cursor-pointer" id="" value="Send" />
                    </form> :
                        <div className='empty-form inset-shadow-sm inset-shadow-slate-800 flex flex-col gap-15 justify-center items-center sm:w-[500px] h-[565px] bg-slate-300 m-2 p-10 border-2 border-slate-600 rounded-md'>
                            <h2 className='bg-white p-2 rounded-lg'>Message sent! <br></br>Thank you for reaching out.</h2>
                            <img className="h-[200px]" src="white-letter.png" alt="message" ></img>
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default popup;