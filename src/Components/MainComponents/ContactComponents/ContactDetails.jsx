import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons'


const ContactDetails = () => {

    return (
        <div>
            <p className="text-[#198ff5] lg:text-[#ffffff] text-lg my-2">CONTACT US</p>
            <h3 className="text-[#1e202a] lg:text-[#198ff5] text-2xl font-bold">Contact OCPL Finance</h3>
            <ul className="flex flex-col gap-3 my-4">
                <li className="flex gap-2 items-center text-sm lg:text-lg ">
                    <FontAwesomeIcon icon={faEnvelope} className="text-[#198ff5] " /> <a href="mailto:info@ocpl.tech" className="no-underline lg:text-[#ffffff] text-[#1e202a]">info@ocpl.tech</a>
                </li>
                <li className="flex gap-2 items-center text-sm lg:text-lg ">
                    <FontAwesomeIcon icon={faPhone} className="text-[#198ff5] " /><a href="tel:+919555555801" className="no-underline lg:text-[#ffffff] text-[#1e202a]">+91 9555-555-801</a>
                </li>
                <li className="flex gap-2 items-center text-sm lg:text-lg lg:text-[#ffffff] text-[#1e202a]"><FontAwesomeIcon icon={faLocationDot} className="text-[#198ff5]  " /><span className="lg:text-[#ffffff] text-[#1e202a]">Karol Bagh, New Delhi</span></li>
            </ul>
        </div>
    )
}

export default ContactDetails