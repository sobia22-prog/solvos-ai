import Navbar from "../components/navbar";
import HowItWorks from "../components/howItWorks";
import WhyChooseUs from "../components/whyChoseUs";
import HeroSection from "../components/heroSection";
import OurServices from "../components/ourServices";
import Footer from "../components/footer";
import FAQ from "../components/faq";
import CTA from "../components/cta";
import { Toaster } from "react-hot-toast";

function Home(){
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <OurServices />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}

export default Home;