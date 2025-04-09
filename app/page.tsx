// import NavMenu from "@/components/nav-menu";
import { AboutUs } from "@/components/website/about-us";
import ContactUs from "@/components/website/contact-us";
import HeroSection from "@/components/website/hero-section";
import PromoSection from "@/components/website/promo";

export default function Home() {
  return (
    <>
      {/* <NavMenu /> */}
      <HeroSection />
      <AboutUs />
      <PromoSection />
      <ContactUs />
    </>
  );
}
