'use client'
import Image from 'next/image';

export const Navbar = () => {
    return (
        <>
            <div className={`navbar fixed bg-[#ffffffd6] backdrop-blur-[10px] lg:px-32 z-50 top-0`}>
                <div className="flex-1">
                    <a className="flex items-center gap-1 text-xl font-semibold">
                        <Image
                            width={50}
                            height={50}
                            src={'/logo-jma.png'}
                            alt=""
                        />
                        CV Jelita Makmur Abadi
                    </a>
                </div>
                <div className="flex-none hidden lg:block">
                    <ul className="flex gap-5 px-1">
                        <li>
                            <a
                                href="#about-us"
                                className="hover:border-b-cyan-800 hover:border-b-2 hover:text-cyan-800 duration-100 py-2 ">
                                About Us</a>
                        </li>
                        <li>
                            <a
                                href="#vision-mission"
                                className="hover:border-b-cyan-800 hover:border-b-2 hover:text-cyan-800 duration-100 py-2 ">
                                Vision & Mission</a>
                        </li>
                        <li>
                            <a
                                href="#products"
                                className="hover:border-b-cyan-800 hover:border-b-2 hover:text-cyan-800 duration-100 py-2 ">
                                Products</a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:border-b-cyan-800 hover:border-b-2 hover:text-cyan-800 duration-100 py-2 ">
                                Contact</a>
                        </li>
                        <li>
                            <a
                                href="#location"
                                className="hover:border-b-cyan-800 hover:border-b-2 hover:text-cyan-800 duration-100 py-2 ">
                                Location</a>
                        </li>
                    </ul>
                </div>
                <div className="flex-none lg:hidden block dropdown dropdown-bottom dropdown-end dropdown-hover">
                    <button tabIndex={0} className="btn btn-square btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
                    </button>
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a
                                href="#about-us"
                                className="hover:border-b-cyan-800 hover:border-b-2 hover:text-cyan-800 duration-100 py-2 ">
                                About Us</a>
                        </li>
                        <li>
                            <a
                                href="#vision-mission"
                                className="hover:border-b-cyan-800 hover:border-b-2 hover:text-cyan-800 duration-100 py-2 ">
                                Vision & Mission</a>
                        </li>
                        <li>
                            <a
                                href="#products"
                                className="hover:border-b-cyan-800 hover:border-b-2 hover:text-cyan-800 duration-100 py-2 ">
                                Products</a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:border-b-cyan-800 hover:border-b-2 hover:text-cyan-800 duration-100 py-2 ">
                                Contact</a>
                        </li>
                        <li>
                            <a
                                href="#location"
                                className="hover:border-b-cyan-800 hover:border-b-2 hover:text-cyan-800 duration-100 py-2 ">
                                Location</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}