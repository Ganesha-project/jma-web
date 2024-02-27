import { HiSparkles } from "react-icons/hi2";
import { GrTechnology } from "react-icons/gr";
import { TbClockStar } from "react-icons/tb";
import { FaHandHoldingHeart } from "react-icons/fa";

export const AboutUs = () => {
    return (
        <>
            <div className="mt-24 mx-5 lg:mx-32">
                <div className="flex flex-col sm:flex-row gap-10">
                    <div className="flex-1 lg:w-[70%]">
                        <div className="flex items-center mb-7">
                            <div class="lg:h-14 h-10 w-1 lg:w-2 bg-cyan-800 rounded-full"></div>
                            <h1 className="text-3xl md:text-5xl font-semibold text-cyan-800 pl-3">
                                About Us
                            </h1>
                        </div>
                        <div className="flex flex-col gap-5">
                            <p className="font-normal text-lg sm:text-lg text-justify">
                                <strong>CV Jelita Makmur Abadi</strong> is a Marine Biota Export Company based in <strong>Indonesia</strong>, specializing in Export of <strong>Seaweed</strong> and <strong>Sea cucumbers</strong>. As a country with extensive Maritime Territory, Indonesia is at the forefront of<strong> Marine Biota Exports</strong>.
                            </p>
                            <p className="font-normal text-lg sm:text-lg text-justify">
                                At <strong>CV Jelita Makmur Abadi</strong>, we offer products such as <strong>Seaweed</strong> and<strong> Sea Cucumbers </strong>ready for <strong>export</strong> to various <strong>Countries Worldwide</strong>, particularly to <strong>China</strong>, several other <strong>Southeast Asian Nations</strong>, and other various Countries in the <strong>European region.</strong>
                            </p>
                        </div>
                        <div className="divider text-xl font-semibold"><span className="">Why Us</span></div>
                        <div className="order-last">
                            <div className="flex gap-3">
                                <div className="rounded-lg w-[50%]">
                                    <div className="mb-3 bg-cyan-900 bg-opacity-20 text-black rounded-full w-fit p-3 object-right">
                                        <HiSparkles size={20} />
                                    </div>
                                    <h1 className="text-lg font-semibold mb-1 text-black"> Premium Quality Assurance</h1>
                                    <p className="md:text-lg text-gray-500">Our international standards ensure superior quality of our products.</p>
                                </div>
                                <div className="rounded-lg w-[50%]">
                                    <div className="mb-3 bg-cyan-900 bg-opacity-20 text-black rounded-full w-fit p-3 object-right">
                                        <GrTechnology size={20} />
                                    </div>
                                    <h1 className="text-lg font-semibold mb-1 text-black">Innovation in Processing</h1>
                                    <p className="md:text-lg text-gray-500">With modern technology, we produce high-quality products.</p>
                                </div>
                            </div>
                            <div className="flex gap-3 mt-5">
                                <div className=" rounded-lg w-[50%]">
                                    <div className="mb-3 bg-cyan-900 bg-opacity-20 text-black rounded-full w-fit p-3 object-right">
                                        <TbClockStar size={20} />
                                    </div>
                                    <h1 className="text-lg font-semibold mb-1 text-black">Reliability and Timely Deliveries</h1>
                                    <p className="md:text-lg text-gray-500">Time efficiency is our primary commitment to customers.</p>
                                </div>
                                <div className="rounded-lg w-[50%]">
                                    <div className="mb-3 bg-cyan-900 bg-opacity-20 text-black rounded-full w-fit p-3 object-right">
                                        <FaHandHoldingHeart size={20} />
                                    </div>
                                    <h1 className="text-lg font-semibold mb-1 text-black">Customer-Centric Approach</h1>
                                    <p className="md:text-lg text-gray-500">Customer service is our top priority.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="lg:w-[50%] h-auto">
                        <img
                            className="rounded-lg w-full h-full object-cover"
                            src="https://images.pexels.com/photos/8849634/pexels-photo-8849634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="seaweed-sea"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
