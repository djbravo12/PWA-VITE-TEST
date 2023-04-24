import { motion } from "framer-motion"
import { introH1 } from '../../../FrameMotion/Motion'

const Intro = () => {



    return (
        <section className="bg-[#1e202a] lg:border-0 lg:rounded-bl-[150px] px-4 lg:px-[6em] py-20" id="Intro" >
            <div className=" xl:max-w-full lg:m-auto">
                <motion.h1 className="my-4 lg:my-8 text-2xl font-extrabold text-[#ffffff] text-center   lg:text-5xl leading-10" animate="show" initial="hidden" variants={introH1}>Hassle Free Loan Technology Integrated with <span className="text-[#1ca0f2]">Blockchain</span></motion.h1>
                <div className="mt-[8em]  px-2 bg-[#252a41] lg:max-w-3xl m-auto">
                    <p className="text-center py-2 text-[#ffffff] font-bold">
                        Funds Transferred till Now...</p>
                    <ul className="grid grid-cols-2 gap-5 py-3 lg:grid-rows-1 lg:grid-cols-4">
                        <li className="flex gap-1 py-1 flex-col items-center justify-evenly border-b-2 border-[#fdc468]">
                            <p className="text-[#fdc468] text-2xl font-medium">00</p>
                            <p className="text-[#8b97c6]">Investors</p>
                        </li>
                        <li className="flex gap-1 py-1 flex-col items-center justify-evenly border-b-2 border-[#dc414c]">
                            <p className="text-[#dc414c] text-2xl font-medium">00</p>
                            <p className="text-[#8b97c6]">Debtors</p>
                        </li>
                        <li className="flex gap-1 py-1 flex-col items-center justify-evenly border-b-2 border-[#1ca0f2]">
                            <p className="text-[#1ca0f2] text-2xl font-medium">00</p>
                            <p className="text-[#8b97c6]">Funds Transferred</p>
                        </li>
                        <li className="flex gap-1 py-1 flex-col items-center justify-evenly border-b-2 border-[#1db489]">
                            <p className="text-[#1db489] text-2xl font-medium">00</p>
                            <p className="text-[#8b97c6]">Users</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Intro
