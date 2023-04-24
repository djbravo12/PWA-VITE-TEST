import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { aboutUlChildElements, aboutUlParentElement, aboutParagraph } from '../../../FrameMotion/Motion'

const AboutPart2 = () => {

    const { ref, inView } = useInView({ threshold: 0.1 })


    return (
        <div className="bg-[#252a41] lg:py-[10em] py-[8em] px-4 text-center lg:border-0  lg:rounded-tr-[150px]">
            <div className="xl:max-w-5xl xl:m-auto">
                <motion.p className="text-[#ffffff] text-lg font-bold my-2" ref={ref} variants={aboutParagraph} initial="hidden" animate={inView ? "show" : "hidden"}>WHY CHOOSE US</motion.p>
                <motion.h2 className="text-[#1ca0f2] text-2xl font-extrabold my-2" ref={ref} variants={aboutParagraph} initial="hidden" animate={inView ? "show" : "hidden"}>Why Choose our OCPL Finance</motion.h2>
                <motion.ul className="md:grid md:grid-cols-2 lg:grid-cols-4 lg:gap-8 flex flex-col gap-8 my-6" ref={ref} variants={aboutUlParentElement} initial="initial" animate={inView ? "visible" : "initial"}>
                    <motion.li variants={aboutUlChildElements} >
                        <motion.div whileHover={{ scale: 1.2, backgroundColor: "#1f212e", borderRadius: "20px", padding: "3px" }}>
                            <p className="text-[#1ca0f2] inline-block border py-1 px-3 rounded-full my-3">1</p>
                            <h3 className="text-[#ffffff] text-lg my-3 font-medium">Security & control over money</h3>
                            <p className="text-[#8b97c6] px-10">Add new, trending and rare artwork to your collection.</p>
                        </motion.div>
                    </motion.li>
                    <motion.li variants={aboutUlChildElements}>
                        <motion.div whileHover={{ scale: 1.2, backgroundColor: "#1f212e", borderRadius: "20px", padding: "3px" }}>
                            <p className="text-[#1ca0f2] border inline-block py-1 px-3 rounded-full my-3"> 2</p>
                            <h3 className="text-[#ffffff] text-lg my-3 font-medium">Security & control over money</h3>
                            <p className="text-[#8b97c6] px-10">Add new, trending and rare artwork to your collection.</p>
                        </motion.div>
                    </motion.li>
                    <motion.li variants={aboutUlChildElements}>
                        <motion.div whileHover={{ scale: 1.2, backgroundColor: "#1f212e", borderRadius: "20px", padding: "3px" }}>
                            <p className="text-[#1ca0f2] border inline-block py-1 px-3 rounded-full my-3">3</p>
                            <h3 className="text-[#ffffff] text-lg my-3 font-medium">Security & control over money</h3>
                            <p className="text-[#8b97c6] px-10">Add new, trending and rare artwork to your collection.</p>
                        </motion.div>
                    </motion.li>
                    <motion.li variants={aboutUlChildElements}>
                        <motion.div whileHover={{ scale: 1.2, backgroundColor: "#1f212e", borderRadius: "20px", padding: "3px" }} className="">
                            <p className="text-[#1ca0f2] border inline-block py-1 px-3 rounded-full my-3"> 4</p>
                            <h3 className="text-[#ffffff] text-lg my-3 font-medium">Security & control over money</h3>
                            <p className="text-[#8b97c6] px-10">Add new, trending and rare artwork to your collection.</p>
                        </motion.div>
                    </motion.li>
                </motion.ul>
            </div>
        </div>
    )
}


export default AboutPart2