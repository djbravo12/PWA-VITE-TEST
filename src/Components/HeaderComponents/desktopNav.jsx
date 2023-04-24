import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faRightToBracket } from '@fortawesome/free-solid-svg-icons';


const DesktopNav = () => {
    return (
        <div className="hidden lg:block ml-20">
            <nav className="justify-self-end bg-[#1e202a] text-right">
                <div className='flex gap-2 xl:gap-4 items-center justify-evenly'>
                    <ul className="flex flex-row items-center justify-center gap-8 text-center gap-4 text-[#ffffff]">
                        <li><a href="#Intro" className='hover:text-[#c4032a]'>HOME</a></li>
                        <li><a href="#aboutUs" className='hover:text-[#3eda82]'>ABOUT US</a></li>
                        <li><a href="#ContactUS" className='hover:text-[#df4996]'>CONTACT US</a></li>
                    </ul>
                    <div className="m-0 p-0 gap-8 text-center flex flex-row gap-4 px-10 my-2 text-[#ffffff]">
                        <button className="p-0 px-3 py-2 border border-[#fdc468] text-sm flex gap-2 items-center justify-center">
                            <p>SINGUP</p>
                            <FontAwesomeIcon icon={faUserPlus} />
                        </button>
                        <button className="p-0 px-3 border border-[#1db489]  text-sm flex gap-2 items-center justify-center">
                            <p>SINGIN</p>
                            <FontAwesomeIcon icon={faRightToBracket} />
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default DesktopNav