import MobileNav from './mobileNav'
import DesktopNav from './desktopNav'



const Header = () => {
    return (
        <header className="fixed top-0 left-0 lg:px-[6em] lg:py-2 bg-[#1e202a] py-4 px-4 w-full z-10">
            <div className='flex items-center justify-between max-w-7xl mx-auto'>
                <h1 className="md:m-0 md:justify-self-start mx-4 text-[#ffffff] text-xl">OCPL Finance</h1>
                <MobileNav />
                <DesktopNav />
            </div>
        </header>
    )
}

export default Header