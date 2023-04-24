import ContactForm from "../ContactComponents/ContactForm"
import ContactDetails from '../ContactComponents/ContactDetails'


const ContactPage = () => {
    return (
        <section className="lg:bg-[#252a41] lg:px-[6em]  px-4 border-t border-[#198ff5] py-16" id="ContactUS">
            <div className="xl:max-w-4xl xl:m-auto lg:flex lg:justify-around">
                <ContactDetails />
                <ContactForm />
            </div>
        </section>
    )
}

export default ContactPage