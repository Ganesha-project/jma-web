import { AboutUs } from "@/components/AboutUs";
import { AnimateOnce } from "@/components/AnimateOnce";
import { Banner } from "@/components/Banner";
import { BannerImages } from "@/components/BannerImages";
import { Contact } from "@/components/Contact";
import { Location } from "@/components/Location";
import { Products } from "@/components/Products";
import { VisionMission } from "@/components/VisionMision";

export default function Home() {
  return (
    <>
      <Banner />
      <BannerImages />
      <AnimateOnce id={'about-us'} animation={'animate__fadeInUp'}>
        <AboutUs />
      </AnimateOnce>
      <AnimateOnce animation={'animate__fadeInUp'}>
        <VisionMission />
      </AnimateOnce>
      <AnimateOnce animation={'animate__fadeInUp'}>
        <Products />
      </AnimateOnce>
      <AnimateOnce animation={'animate__fadeInUp'}>
        <Contact />
      </AnimateOnce>
      <AnimateOnce animation={'animate__fadeInUp'}>
        <Location />
      </AnimateOnce>
    </>
  );
}
