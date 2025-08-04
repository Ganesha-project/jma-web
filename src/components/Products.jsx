export const metadata = {
    title: "Explore Our Premium Marine & Agricultural Products - JMA Indonesia",
    description: "Discover JMA Indonesia's high-quality marine products including seaweed and sea cucumbers, plus premium coconut products like mature coconuts, coconut shell charcoal, and charcoal briquettes.",
    keywords: "JMA Indonesia, marine products, seaweed, sea cucumbers, marine biota, coconut products, coconut shell charcoal, charcoal briquettes, mature coconuts, premium exports",
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
    tags: ["JMA Indonesia", "marine products", "seaweed", "sea cucumbers", "marine biota", "coconut products", "charcoal", "premium exports"],
    openGraph: {
        title: "Explore Our Premium Marine & Agricultural Products - JMA Indonesia",
        description: "Discover JMA Indonesia's high-quality marine products including seaweed and sea cucumbers, plus premium coconut products like mature coconuts, coconut shell charcoal, and charcoal briquettes.",
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

// Products Data Configuration
const productsData = {
    header: {
        title: "Our Products",
        subtitle: "Explore our premium exports: High-quality Marine Products and Sustainable Coconut-based Solutions"
    },
    marineProducts: {
        title: "Marine Products",
        subtitle: "Premium quality marine biota sourced from Indonesian waters",
        color: "cyan",
        items: [
            {
                id: 1,
                name: "Sea Cucumber",
                description: "Premium quality sea cucumbers",
                image: "https://media.istockphoto.com/id/1155562024/id/foto/teripang.jpg?s=612x612&w=0&k=20&c=j5VBVAhUPB68y5gvZoqQUoRWQkl73Rr2nS1tlj4g-_8=",
                alt: "sea-cucumber",
                gridArea: "item1"
            },
            {
                id: 2,
                name: "Sea Cucumber",
                description: "Dried and processed sea cucumbers",
                image: "https://media.istockphoto.com/id/1351724821/id/foto/teripang-kering-untuk-dijual-di-sebuah-toko-di-chinatown-manhattan-nyc.jpg?s=612x612&w=0&k=20&c=H8bEpBtfaPIbtjZaFthubHjq4VPFwoJgTU8Nx4M3DcU=",
                alt: "sea-cucumber",
                gridArea: "item2"
            },
            {
                id: 3,
                name: "Seaweed",
                description: "Sustainable seaweed cultivation",
                image: "https://media.istockphoto.com/id/491685029/id/foto/petani-mengumpulkan-rumput-laut-di-indonesia.jpg?s=612x612&w=0&k=20&c=rtM19Pz6ZjevEdMkCJxRH-Asa-zSWDTpZltgdlxeTqc=",
                alt: "seaweed",
                gridArea: "item3"
            },
            {
                id: 4,
                name: "Seaweed",
                description: "Traditional harvesting methods",
                image: "https://media.istockphoto.com/id/927545834/id/foto/wanita-memanen-ganja-laut-di-perkebunan-laut-dengan-pakaian-tradisional.jpg?s=612x612&w=0&k=20&c=SrBn1N7S8VdKWlOGlI5TgDD-uqw8p5S1xoVnwdUUlzY=",
                alt: "seaweed",
                gridArea: "item4"
            },
            {
                id: 5,
                name: "Seaweed",
                description: "Fresh harvested premium seaweed",
                image: "https://media.istockphoto.com/id/639420966/id/foto/pria-dewasa-memegang-rumput-laut-segar.jpg?s=612x612&w=0&k=20&c=i7kYOqMtUl11N2GOr6slqNqVuMDPaDQtV-VtCTpr-q0=",
                alt: "seaweed",
                gridArea: "item5"
            },
            {
                id: 6,
                name: "Sea Cucumber",
                description: "Export quality sea cucumbers",
                image: "https://media.istockphoto.com/id/124138171/id/foto/teripang.jpg?s=612x612&w=0&k=20&c=x1ZoSRatjiNre5NzmTPJlcirjX4MW6yYHWyQonoa0ZA=",
                alt: "seaweed-farm",
                gridArea: "item6"
            }
        ]
    },
    coconutProducts: {
        title: "Coconut Products",
        subtitle: "Premium coconut-based products and sustainable charcoal solutions",
        color: "amber",
        items: [
            {
                id: 1,
                name: "Kelapa Tua",
                description: "Premium quality mature coconuts with rich meat and water",
                image: "/klapa.png",
                alt: "Mature Coconuts"
            },
            {
                id: 2,
                name: "Arang Batok Kelapa",
                description: "High-quality coconut shell charcoal for various applications",
                image: "/arang.png",
                alt: "Coconut Shell Charcoal"
            },
            {
                id: 3,
                name: "Arang Briket",
                description: "Eco-friendly charcoal briquettes made from coconut shells",
                image: "/briket.png",
                alt: "Charcoal Briquettes"
            }
        ]
    },
    callToAction: {
        title: "Interested in Our Premium Products?",
        description: "Contact us to learn more about our premium marine and coconut products, competitive pricing, and reliable export capabilities to global markets.",
        buttons: [
            {
                text: "Marine Products Inquiry",
                colorFrom: "cyan-600",
                colorTo: "cyan-700",
                hoverFrom: "cyan-700",
                hoverTo: "cyan-800"
            },
            {
                text: "Coconut Products Inquiry",
                colorFrom: "amber-600",
                colorTo: "amber-700",
                hoverFrom: "amber-700",
                hoverTo: "amber-800"
            }
        ]
    }
};

// Product Card Component
const ProductCard = ({ product, className = "" }) => {
    const baseClasses = "relative group";
    const imageClasses = "rounded-lg w-full object-cover transition-all duration-300 group-hover:scale-100 group-hover:shadow-xl";
    const overlayClasses = "absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-300 bg-gradient-to-t from-black/70 to-transparent text-white rounded-lg";

    return (
        <div className={`${baseClasses} ${className}`}>
            <img
                src={product.image}
                alt={product.alt}
                className={`${imageClasses} md:min-h-[50vh] md:max-h-[40vh] min-h-[60vh] max-h-[60vh] h-full object-cover`}
            />
            <div className={overlayClasses}>
                <div className="text-center p-4">
                    <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                    <p className="text-sm">{product.description}</p>
                </div>
            </div>

            <div className="group-hover:opacity-0 absolute left-3 bottom-3 right-3 z-30">
                <h1 className="px-3 py-1 bg-black/50 text-white rounded-full text-sm font-bold w-fit backdrop-blur-md">
                    {product.name}
                </h1>
            </div>
            <div className="group-hover:opacity-0 absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
    );
};

// Section Header Component
const SectionHeader = ({ title, subtitle, colorClass }) => (
    <div className="text-left mb-8">
        <h2 className={`text-2xl lg:text-3xl font-semibold text-${colorClass}-700 mb-2`}>
            {title}
        </h2>
        <p className="text-gray-600">{subtitle}</p>
    </div>
);

export const Products = () => {
    const { header, marineProducts, coconutProducts, callToAction } = productsData;

    return (
        <>
            <div id="products" />
            <div className="lg:mx-32 mx-5 mt-20">
               

                {/* Marine Products Section */}
                <div className="mb-16">
                    <SectionHeader
                        title={marineProducts.title}
                        subtitle={marineProducts.subtitle}
                        colorClass={marineProducts.color}
                    />

                    <div className="flex flex-col md:grid md:grid-cols-4 gap-3">
                        <ProductCard className="aspect-square" product={marineProducts.items[0]} />
                        <ProductCard className="aspect-square" product={marineProducts.items[1]} />
                        <ProductCard className="aspect-square" product={marineProducts.items[2]} />
                        <ProductCard className="aspect-square" product={marineProducts.items[3]} />
                        <div className="col-span-3">
                            <ProductCard product={marineProducts.items[4]} className="w-full" />
                        </div>
                        <ProductCard product={marineProducts.items[5]} className="aspect-square" />
                    </div>
                </div>

                {/* Coconut Products Section */}
                <div className="mb-16">
                    <SectionHeader
                        title={coconutProducts.title}
                        subtitle={coconutProducts.subtitle}
                        colorClass={coconutProducts.color}
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                        {coconutProducts.items.map((product) => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                className=""
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}