export const metadata = {
    title: "Explore Our Premium Marine Products - JMA Indonesia",
    description: "Discover JMA Indonesia's high-quality marine products including seaweed and sea cucumbers. Explore our range of premium exports and find the best marine biota for your needs.",
    keywords: "JMA Indonesia, marine products, seaweed, sea cucumbers, marine biota, premium exports",
    url: "https://jmaindonesia.com",
    image: "https://example.com/products-image.jpg", // Replace with actual products image URL
    author: "JMA Indonesia",
    siteName: "JMA Indonesia",
    twitterUsername: "@jmaindonesia",
    facebookAppID: "1234567890",
    type: "website",
    locale: "en_US",
    canonical: "https://jmaindonesia.com",
    publishedTime: "2024-02-28T00:00:00Z",
    modifiedTime: "2024-02-28T00:00:00Z",
    section: "Products",
    tags: ["JMA Indonesia", "marine products", "seaweed", "sea cucumbers", "marine biota", "premium exports"],
    openGraph: {
        title: "Explore Our Premium Marine Products - JMA Indonesia",
        description: "Discover JMA Indonesia's high-quality marine products including seaweed and sea cucumbers. Explore our range of premium exports and find the best marine biota for your needs.",
        url: "https://jmaindonesia.com",
        type: "website",
        locale: "en_US",
        site_name: "JMA Indonesia",
        images: [
            {
                url: "https://example.com/products-image.jpg", // Replace with actual products image URL
                alt: "JMA Indonesia Products",
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


export const Products = () => {
    return (
        <>
            <div id="products" />
            <div className="lg:mx-32 mx-5 mt-20">
                <div className="flex justify-center">
                    <h1 className="lg:w-[50%] text-3xl text-center lg:text-5xl font-semibold text-cyan-800">
                        Our Products˝
                    </h1>
                </div>
                <p className="text-center">
                    Explore our products: Our high-quality exports of Seaweed and Sea Cucumbers
                </p>
                <div className="flex flex-col gap-3 mt-5">
                    <div className="flex gap-3">
                        <div className="flex lg:flex-row flex-col gap-3 w-full">
                            <div className="relative">
                                <img
                                    src="https://media.istockphoto.com/id/1155562024/id/foto/teripang.jpg?s=612x612&w=0&k=20&c=j5VBVAhUPB68y5gvZoqQUoRWQkl73Rr2nS1tlj4g-_8="
                                    alt="sea-cucumber"
                                    className="rounded-lg w-full lg:w-[20lvw] h-[30lvh] lg:h-[20lvw] object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:backdrop-blur-sm transition-opacity duration-300 bg-black bg-opacity-50 text-white rounded-lg">
                                    <h2 className="text-xl font-bold">Sea Cucumber</h2>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="https://media.istockphoto.com/id/1351724821/id/foto/teripang-kering-untuk-dijual-di-sebuah-toko-di-chinatown-manhattan-nyc.jpg?s=612x612&w=0&k=20&c=H8bEpBtfaPIbtjZaFthubHjq4VPFwoJgTU8Nx4M3DcU="
                                    alt="sea-cucumber"
                                    className="rounded-lg w-full lg:w-[20lvw] h-[30lvh] lg:h-[20lvw] object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:backdrop-blur-sm transition-opacity duration-300 bg-black bg-opacity-50 text-white rounded-lg">
                                    <h2 className="text-xl font-bold">Sea Cucumber</h2>
                                </div>
                            </div>
                        </div>
                        <div className="flex lg:flex-row flex-col gap-3 w-full">
                            <div className="relative">
                                <img
                                    src="https://media.istockphoto.com/id/491685029/id/foto/petani-mengumpulkan-rumput-laut-di-indonesia.jpg?s=612x612&w=0&k=20&c=rtM19Pz6ZjevEdMkCJxRH-Asa-zSWDTpZltgdlxeTqc="
                                    alt=""
                                    className="rounded-lg w-full lg:w-[20lvw] h-[30lvh] lg:h-[20lvw] object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:backdrop-blur-sm transition-opacity duration-300 bg-black bg-opacity-50 text-white rounded-lg">
                                    <h2 className="text-xl font-bold">Seaweed</h2>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="https://media.istockphoto.com/id/927545834/id/foto/wanita-memanen-ganja-laut-di-perkebunan-laut-dengan-pakaian-tradisional.jpg?s=612x612&w=0&k=20&c=SrBn1N7S8VdKWlOGlI5TgDD-uqw8p5S1xoVnwdUUlzY="
                                    alt=""
                                    className="rounded-lg w-full lg:w-[20lvw] h-[30lvh] lg:h-[20lvw] object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:backdrop-blur-sm transition-opacity duration-300 bg-black bg-opacity-50 text-white rounded-lg">
                                    <h2 className="text-xl font-bold">Seaweed</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col gap-3">
                        <div className="relative lg:w-[70%]">
                            <img
                                src="https://media.istockphoto.com/id/639420966/id/foto/pria-dewasa-memegang-rumput-laut-segar.jpg?s=612x612&w=0&k=20&c=i7kYOqMtUl11N2GOr6slqNqVuMDPaDQtV-VtCTpr-q0="
                                alt=""
                                className="rounded-lg w-full lg:h-[20lvw] object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:backdrop-blur-sm transition-opacity duration-300 bg-black bg-opacity-50 text-white rounded-lg">
                                <h2 className="text-xl font-bold">Seaweed</h2>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="https://media.istockphoto.com/id/124138171/id/foto/teripang.jpg?s=612x612&w=0&k=20&c=x1ZoSRatjiNre5NzmTPJlcirjX4MW6yYHWyQonoa0ZA="
                                alt="seaweed-farm"
                                className="rounded-lg w-full lg:h-[20lvw] object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 hover:backdrop-blur-sm transition-opacity duration-300 bg-black bg-opacity-50 text-white rounded-lg">
                                <h2 className="text-xl font-bold">Sea Cucumber</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}