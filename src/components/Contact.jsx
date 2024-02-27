import { RiWhatsappFill, RiMailAddFill } from "react-icons/ri"

export const Contact = () => {
    const mailLink = "mailto:jmaindonesia24@gmail.com?subject=Konsultasi%20JMA%20Indonesia&body=Halo%20JMA%20Indonesia"
    const waLink = "https://api.whatsapp.com/send?phone=6282188260598&text=Hello%20JMA%20Indonesia"
    return (
        <>
            <div id="contact" />
            <section className="lg:mx-32 mx-5 mt-20">
                <div className="flex-1">
                    <div className="flex items-center mb-7">
                        <div class="lg:h-14 h-10 w-1 lg:w-2 bg-cyan-800 rounded-full"></div>
                        <h1 className="text-3xl md:text-5xl font-semibold text-cyan-800 pl-3">
                            Contacts
                        </h1>
                    </div>
                    <div className="flex gap-5">
                        <div className="relative w-[100%]">
                            <img
                                src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=2755&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt=""
                                className="w-full h-[50lvh] object-cover rounded-lg"
                            />
                            <div className="absolute inset-5 lg:w-fit flex flex-col gap-3 justify-end">
                                <a
                                    href={waLink}
                                    className="bg-[#ffffff88] backdrop-blur-sm p-3 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <RiWhatsappFill size={25} />
                                        <p className="lg:text-3xl text-xl font-medium">
                                            WhatsApp
                                        </p>
                                    </div>
                                    <p className="">
                                        0821 8826 0598
                                    </p>
                                </a>
                                <a
                                    href={mailLink}
                                    className="bg-[#ffffff88] backdrop-blur-sm p-3 rounded-lg">
                                    <div className="flex items-center gap-2">
                                        <RiMailAddFill size={25} />
                                        <p className="lg:text-3xl text-xl font-medium">
                                            Email
                                        </p>
                                    </div>
                                    <p className="">
                                        jmaindonesia24@gmail.com
                                    </p>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
