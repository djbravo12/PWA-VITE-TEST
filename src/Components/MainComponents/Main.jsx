import AboutPage from "./SubComponents/About"
import Intro from "./SubComponents/Intro"
import ContactPage from "./SubComponents/ContactPage"

const Main = () => {
    return (
        <main className="bg-[##ffffff] flex flex-col  flex justify-center">
            <Intro />
            <AboutPage />
            <ContactPage />
        </main >
    )
}

export default Main