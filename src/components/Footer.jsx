import Image from "next/image"

export const Footer = () => {
    return (
        <>
            <footer className="footer p-10 bg-base-200 text-base-content mt-32">
                <aside>
                    <Image
                        width={90}
                        height={90}
                        src={'/logo-jma.png'} alt="jma.logo" />
                    <p className="text-gray-500 w-fit">
                        <span className="text-xl text-cyan-900"> JMA Indonesia.</span>
                        <br />Jl. Sarappo No.100A, RT.001/RW.01, Butung, Kec. Wajo,<br /> Kota Makassar, Sulawesi Selatan 90173
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Navigation</h6>
                    <div className="flex flex-col lg:flex-row gap-2 lg:gap-10">
                        <div className="list-none flex flex-col gap-2">
                            <li>
                                <a
                                    href="#about-us"
                                    className="hover:text-gray-300 duration-100 py-2 ">
                                    About Us</a>
                            </li>
                            <li>
                                <a
                                    href="#vision-mission"
                                    className="hover:text-gray-300 duration-100 py-2 ">
                                    Vision & Mission</a>
                            </li>
                            <li>
                                <a
                                    href="#products"
                                    className="hover:text-gray-300 duration-100 py-2 ">
                                    Products</a>
                            </li>
                        </div>
                        <div className="list-none flex flex-col gap-2">
                            <li>
                                <a
                                    href="#contact"
                                    className="hover:text-gray-300 duration-100 py-2 ">
                                    Contact</a>
                            </li>
                            <li>
                                <a
                                    href="#location"
                                    className="hover:text-gray-300 duration-100 py-2 ">
                                    Location</a>
                            </li>
                        </div>
                    </div>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2024 - All right reserved by JME Indonesia</p>
                </aside>
            </footer>
        </>
    )
}