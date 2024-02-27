export const Banner = () => {
    return (
        <>
            <section className="lg:mx-32 mt-20 lg:mt-28 mx-5">
                <div className="flex flex-col gap-3 animate__animated animate__zoomIn animate_slow">
                    <div className="lg:w-[60%] ">
                        <h1 className="lg:text-5xl text-3xl font-semibold text-cyan-800">
                        Natural And Multilateral
                        </h1>
                    </div>
                    <div className="flex items-center flex-col lg:flex-row justify-between">
                        <p className="text-gray-500 lg:w-[50%]">
                        Delivering the Best Quality from the Sea to the World: High-Quality Seaweed and Sea Cucumber Exports to Meet Global Market Demands
                        </p>
                        <a
                            href="#about-us"
                            className="bg-cyan-800 rounded-full lg:mt-0 mt-5 text-white px-5 py-2 hover:bg-cyan-600 transform ease-in-out duration-500 hover:scale-110 self-end lg:self-auto"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}