export const metadata = {
    title: "High-Quality Seaweed and Sea Cucumber Exports - CV Jelita Makmur Abadi",
    description: "Discover natural and multilateral marine biota exports from CV Jelita Makmur Abadi. We deliver premium quality seaweed and sea cucumbers to meet global market demands.",
    keywords: "marine biota exports, seaweed exports, sea cucumber exports, premium quality marine products, global market demands",
    url: "https://jmaindonesia.com",
    image: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1709030711/seaweed.jpg", // Replace with actual banner image URL
    author: "CV Jelita Makmur Abadi",
    siteName: "CV Jelita Makmur Abadi",
    twitterUsername: "@jmaindonesia",
    facebookAppID: "1234567890",
    type: "website",
    locale: "en_US",
    canonical: "https://jmaindonesia.com",
    publishedTime: "2024-02-28T00:00:00Z",
    modifiedTime: "2024-02-28T00:00:00Z",
    section: "Home",
    tags: ["marine biota exports", "seaweed exports", "sea cucumber exports", "premium quality products", "global market demands"],
    openGraph: {
        title: "High-Quality Seaweed and Sea Cucumber Exports - CV Jelita Makmur Abadi",
        description: "Discover natural and multilateral marine biota exports from CV Jelita Makmur Abadi. We deliver premium quality seaweed and sea cucumbers to meet global market demands.",
        url: "https://jmaindonesia.com",
        type: "website",
        locale: "en_US",
        site_name: "CV Jelita Makmur Abadi",
        images: [
            {
                url: "https://res.cloudinary.com/dzrh2ogbn/image/upload/v1709030711/seaweed.jpg", // Replace with actual banner image URL
                alt: "High-Quality Seaweed and Sea Cucumber Exports",
                width: 1200,
                height: 630
            }
        ]
    },
    twitter: {
        cardType: "summary_large_image",
        handle: "@jmaindonesia"
    }
};


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