import { Toaster } from "react-hot-toast";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Contact from "../components/contact";

function Home(){
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Navbar />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;