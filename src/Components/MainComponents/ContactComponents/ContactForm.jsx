const ContactForm = () => {
    return (
        <form action="" className="grid lg:grid-cols-2 lg:grid-rows-3 my-10 lg:m-0  gap-4">
            <div className="flex flex-col gap-1 lg:col-start-1 lg:col-end-2">
                <label htmlFor="Name" className="text-[#198ff5] ">Name</label>
                <input type="text" placeholder="Enter Your Name" id="Name" className="outline-0 border lg:border-2  border-[#1e202a] px-2 py-1 placeholder:text-[#1e202a] placeholder:text-sm focus:border-[#198ff5]" /></div>
            <div className="flex flex-col gap-1 lg:col-start-2 lg:col-end-3">
                <label htmlFor="Email " className="text-[#198ff5] ">Email</label>
                <input type="Email" placeholder="Enter Your Email" id="Email" className="outline-0 border lg:border-2  border-[#1e202a] px-2 py-1 placeholder:text-[#1e202a] placeholder:text-sm focus:border-[#198ff5]" />
            </div >
            <div className="flex flex-col gap-1 lg:col-start-1 lg:col-end-3">
                <label htmlFor="Name" className="text-[#198ff5]">Drop us a message</label>
                <input type="text" placeholder="Share your message" id="Name" className="outline-0 border lg:border-2  border-[#1e202a] px-2 py-1 placeholder:text-[#1e202a] focus:border-[#198ff5] placeholder:text-sm" />
            </div>
            <div className="flex gap-2 items-center justify-center lg:col-start-1 lg:col-end-3" >
                <input type="submit" value="Send Message" className="outline-0 border-[#198ff5] bg-[#198ff5] text-[#ffffff] p-2 cursor-pointer" />
                <input type="reset" value="Reset" className="outline-0 border border-[#198ff5] text-[#1e202a] lg:text-[#ffffff] px-6 py-2 cursor-pointer" />
            </div>
        </form>
    )
}

export default ContactForm