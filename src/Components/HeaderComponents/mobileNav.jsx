import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faRightToBracket, faXmark, faBars } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { motion } from "framer-motion"
import { openNav } from '../../FrameMotion/Motion'


const MobileNav = () => {

    const [openNavBar, setOpenNavBar] = useState(true)
    const [closeNavBar, setCloseNavBar] = useState(false)



    const openNavFun = () => {
        console.log("open")
        setOpenNavBar(false)
        setCloseNavBar(true)
    }

    const closeNavFun = () => {
        console.log("close")
        setOpenNavBar(true)
        setCloseNavBar(false)
    }

    return (
        <div className='block lg:hidden'>
            <button className={`ml-auto bg-inherit ${openNavBar ? "block" : "hidden"}`} onClick={openNavFun}>
                <FontAwesomeIcon icon={faBars} size="xl" style={{ color: "#8b97c6" }} />
            </button>
            <motion.nav className={`absolute left-0 top-0 bg-[#1e202a] h-screen w-full text-right px-4 py-4 ${closeNavBar ? "block" : "hidden"}`} variants={openNav}
                animate={closeNavBar ? "open" : "closed"}>
                <div>
                    <button className="lg:hidden bg-inherit" onClick={closeNavFun}>
                        <FontAwesomeIcon icon={faXmark} size="xl" style={{ color: "#8b97c6" }} />
                    </button>
                    <ul className="text-center flex flex-col gap-4 my-4 ">
                        <li><a href="/" className="no-underline text-[#ffffff]">HOME</a></li>
                        <li><a href="#aboutUs" className="no-underline text-[#ffffff]">ABOUT US</a></li>
                        <li><a href="#ContactUS" className="no-underline text-[#ffffff]">CONTACT US</a></li>
                    </ul>
                    <div className="text-center flex flex-col gap-4 px-10 my-6 text-[#ffffff]">
                        <button className="border border-[#fdc468] py-2 text-sm flex gap-2 items-center justify-center bg-inherit">
                            <p>SINGUP</p>
                            <FontAwesomeIcon icon={faUserPlus} style={{ color: '#fdc468' }} />
                        </button>
                        <button className="border border-[#1db489] py-2 text-sm flex gap-2 items-center justify-center bg-inherit">
                            <p>SINGIN</p>
                            <FontAwesomeIcon icon={faRightToBracket} />
                        </button>
                    </div>
                </div>
            </motion.nav></div>
    )
}


export default MobileNav