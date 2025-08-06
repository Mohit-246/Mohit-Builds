import React, { useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, X } from "lucide-react";

function Contact() {

    const [showPopup, setshowPopup] = useState(false);
    const handlepopup = (e) => {
        e.preventDefault();
        setshowPopup(true);
        setTimeout(() => {
            setshowPopup(false);
        }, 4000);
    }

    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [phone,setPhone] =useState("");
    const [message,setMessage] =useState("");


    return (
        <>
            <section id="contact" className='scroll-mt-16 py-20 bg-slate-800/50'>
                <div className="items-center justify-center text-center">
                    <h1 className="text-5xl font-extrabold text-white primary-font">Contact</h1>
                    <p className="text-2xl text-gray-300 px-4 secondary-font font-semibold m-4"> Contact to get My Services and For problem Solving.</p>
                </div>
                <div className="flex flex-col p-4 m-4 md:flex-row md:space-x-8">
                    <div className=" p-8 space-y-8 rounded-lg">
                        <div className="w-auto md:w-full space-y-8 m-4 mb-10">
                            <h2 className="text-4xl primary-font text-white font-bold p-5 rounded-lg mr-5">Let's Connect</h2>
                            <div className="flex space-x-6 items-center">
                                <Phone className="text-emerald-500 p-2 mr-4 rounded-lg bg-emerald-300/20 border border-emerald-500 " size={50} />
                                <div className="pl-4">
                                    <p className="text-emerald-600 font-bold text-xl">Phone Number</p>
                                    <p className="text-gray-400 font-bold ">+91 73033 79317</p>
                                </div>
                            </div>
                            <div className="flex space-x-6 items-center">
                                <Mail className="text-amber-500 p-2 mr-4 rounded-lg bg-amber-300/20 border border-amber-500 " size={50} />
                                <div className="pl-4">
                                    <p className="text-amber-600 font-bold text-xl">Email</p>
                                    <p className="text-gray-400  font-bold ">mohitdigibus001@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex space-x-6 items-center">
                                <MapPin className="text-sky-500 p-2 mr-4 rounded-lg bg-sky-300/20 border border-sky-500 " size={50} />
                                <div className="pl-4">
                                    <p className="text-sky-600 font-bold text-xl">Location</p>
                                    <p className="text-gray-400 font-bold ">Aligarh, UP, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-900/50 m-3 p-6 rounded-lg border border-sky-600 transform duration-300 hover:shadow-sky-600 hover:shadow-lg">
                            <h2 className="text-sky-600 font-bold primary-font text-2xl ">Currently Available</h2>
                            <div className="py-3 space-y-1">
                                <ul className="list-disc px-4">
                                    <li className="text-slate-500 secondary-font font-semibold">Available to develop completly Responsive website with good UI/UX Designs and Animations.</li>
                                    <li className="text-slate-500 secondary-font font-semibold">Also Problem Solving of Java, Python, and Web development.</li>
                                </ul> </div>
                        </div>
                    </div>

                    <div className="w-auto md:w-full space-y-8 m-4 mb-8">
                        <h2 className="text-4xl primary-font text-left text-white font-extrabold p-5 rounded-lg m-5">Send Message</h2>
                        <form onSubmit={handlepopup} method="POST" className="space-y-8 p-6 m-4">
                            <div className="">
                                <div className="w-full space-y-2 justify-center items-center ">
                                    <label htmlFor="" className="block text-xl font-semibold">Your Name *</label>
                                    <input type="text" className=" p-4 border-0 bg-slate-600 w-full rounded-lg" onChange={(e) => setName(e.target.value)} name="Name" required placeholder="Enter your name" />
                                </div>
                                <br />
                                <div className="w-full space-y-2 justify-center items-center ">
                                    <label htmlFor="" className="block text-xl font-semibold">E-Mail Id *</label>
                                    <input type="email" className=" p-4 border-0 bg-slate-600 w-full rounded-lg" onChange={(e) => setEamil(e.target.value)} name="Email" required placeholder="Example : Abc@xyz.com" />
                                </div>
                                <br />
                                <div className="w-full space-y-2 justify-center items-center ">
                                    <label htmlFor="" className="block text-xl font-semibold">Phone Number *</label>
                                    <input type="tel" className=" p-4 border-0 bg-slate-600 w-full rounded-lg" onChange={(e) => setPhone(e.target.value)} name="phone" required placeholder="Example : +91 XXXXX-XXXXX" />
                                </div>
                                <br />
                                <div className="w-full space-y-2 justify-center items-center ">
                                    <label htmlFor="" className="block text-xl font-semibold">Message*</label>
                                    <textarea type='text' rows='4'onChange={(e)=>setMessage(e.target.value)} className=" p-4 border-0 bg-slate-600 w-full rounded-lg"  name="Message" required placeholder="Message (Ex; Requirements, Your Need etc.)" />
                                </div>
                                <p className="text-xs text-gray-500 font-semibold text-right">( All field are required )</p>
                            </div>
                            <div className="justify-center items-center">
                                <button type="submit" className="inline-flex text-xl items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105"><Send size={30} />&nbsp;Send Message</button>
                            </div>
                        </form>
                        {showPopup && (
                            <div className="fixed top-18 right-1/3 z-50 animate-slide-in bg-slate-900 border border-sky-800 text-white itemc px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3">
                                <CheckCircle className="font-lato w-6 h-6 text-white" />
                                <span className="text-md font-medium">Form submitted successfully!</span>
                                <button onClick={() => setShowPopup(false)}>
                                    <X className="w-6 h-6 text-white rounded-lg hover:text-gray-100 hover:bg-slate-500" />
                                </button>
                            </div>
                        )}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Contact;