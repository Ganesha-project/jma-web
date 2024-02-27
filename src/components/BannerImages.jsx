import { ScrollAnimation } from "./ScrollAnimation"
import { IoArrowForwardCircle } from "react-icons/io5";


export const BannerImages = () => {
    const data = [
        {
            alt: 'jelita_asset',
            imgUrl: 'https://media.istockphoto.com/id/157579808/id/foto/teripang.jpg?s=612x612&w=0&k=20&c=2CZUndl9kXmp70DYHzOMuH14V-qo1gtjV_JQ1LePft0='
        },
        {
            alt: 'jelita_asset',
            imgUrl: 'https://media.istockphoto.com/id/1017707026/id/foto/laki-laki-tangan-mengambil-rumput-laut-segar.jpg?s=612x612&w=0&k=20&c=8CP-wj7l779FRyuPNf44PXpSzIo0etiJrVEikmopaI0='
        },
        {
            alt: 'jelita_asset',
            imgUrl: 'https://media.istockphoto.com/id/802896832/id/foto/teripang-kering-kelezatan-dalam-masakan-cina.jpg?s=612x612&w=0&k=20&c=wQkPzN_UZ5xhrUmTBvxUTdmfYjiAXdm4GqOucTRA7Ms='
        },
        {
            alt: 'jelita_asset',
            imgUrl: 'https://img.freepik.com/free-photo/indonesia-lembongan-seaweed-is-dried-make-cosmetics_1321-3851.jpg?t=st=1708930183~exp=1708933783~hmac=8134ea86e649bd002586cfb4346aceec24ee6ce0e9ca8f119f3d095578087114&w=826'
        },
        {
            alt: 'jelita_asset',
            imgUrl: 'https://media.istockphoto.com/id/471712979/id/foto/teripang.jpg?s=612x612&w=0&k=20&c=J0KrQPuRbGfPH6jMUN99c1fbK7lytua1l2SeVzTl4T4='
        },
        {
            alt: 'jelita_asset',
            imgUrl: 'https://images.pexels.com/photos/3719372/pexels-photo-3719372.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            alt: 'jelita_asset',
            imgUrl: 'https://media.istockphoto.com/id/1455847550/id/foto/foto-bawah-air-teripang-raksasa-di-terumbu-karang.jpg?s=612x612&w=0&k=20&c=EQq8Gchj80ngOXIpE0tLt9tvoSWQcBRtWdbJqpUIUh0='
        }
    ]
    return (
        <>
            <div className="md:mx-32 m-5 animate__animated animate__zoomInUp">
                <div className="grid gap-4">
                    <a
                        target="_blank"
                        href={'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1709030711/seaweed.jpg'}
                        className="relative">
                        <img
                            loading="lazy"
                            className="lg:h-[56lvh] w-full object-cover rounded-lg "
                            src={'https://res.cloudinary.com/dzrh2ogbn/image/upload/v1709030711/seaweed.jpg'}
                            alt=""
                        />
                    </a>
                    <div className="carousel flex lg:flex-row gap-4 h-[30lvh] md:h-[40lvh] rounded-lg">
                        {data.map(el => (
                            <a
                                key={el.imgUrl}
                                target="_blank"
                                href={el.imgUrl}
                                className="carousel-item relative">
                                <img
                                    loading="lazy"
                                    className="h-auto md:w-[25lvw] w-[50lvw] rounded-lg object-cover"
                                    src={el.imgUrl}
                                    alt={el.alt}
                                />

                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <ScrollAnimation animation={'animate__headShake'}>
                <div className="flex lg:mx-32 mx-5 mt-[-8px] justify-end items-center gap-1 text-cyan-800">
                    <p className="text-right">
                        swipe
                    </p>
                    <IoArrowForwardCircle />
                </div>
            </ScrollAnimation>
        </>
    )
}