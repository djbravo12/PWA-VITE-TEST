import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer'
import { description } from '../../../FrameMotion/Motion'


const AboutPart1 = () => {

    const { ref, inView } = useInView({ threshold: 0.4 })




    return (
        <motion.article className="text-left lg:px-[6em] lg:py-[15em]  px-4 py-[8em]" ref={ref} initial="hidden" animate={inView ? "show" : "hidden"} variants={description}>
            <div className="xl:max-w-5xl xl:m-auto">
                <p className="text-[#dc414c] font-bold text-md lg:text-lg my-2">WHO WE ARE</p>
                <h2 className="text-2xl lg:text-3xl font-bold leading-10">The World's <span className="text-[#dc414c]">1st Blockchain Integrated</span> Loan Application</h2>
                <p className="text-md lg:text-lg text-[#1f212e] font-normal leading-6 my-2">The World's 1st ICO Platform That Offers Rewards and The platform helps investors to make easy to purchase and sell their tokens</p>
                <button type="button" className="bg-[#dc414c] p-2 my-4 text-[#ffffff]">Become Member</button>
            </div>
        </motion.article>
    )
}

export default AboutPart1