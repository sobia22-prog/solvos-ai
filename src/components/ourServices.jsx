import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaMicrophoneAlt,
  FaCut,
  FaImage,
  FaCommentDots,
  FaPenFancy,
} from "react-icons/fa";

const services = [
  {
    title: "AI Copywriting",
    desc: "Generate persuasive and brand-aligned marketing copy in seconds.",
    icon: <FaPenFancy className="w-10 h-10 text-indigo-500" />,
  },
  {
    title: "Image Generation",
    desc: "Turn ideas into stunning visuals using our advanced AI image generator.",
    icon: <FaImage className="w-10 h-10 text-indigo-500" />,
  },
  {
    title: "Chatbot Builder",
    desc: "Create powerful AI-powered chatbots without coding.",
    icon: <FaCommentDots className="w-10 h-10 text-indigo-500" />,
  },
  {
    title: "Voice Cloning",
    desc: "Replicate voices with high accuracy for use in media and products.",
    icon: <FaMicrophoneAlt className="w-10 h-10 text-indigo-500" />,
  },
  {
    title: "Background Remover",
    desc: "Remove backgrounds from images with one click using AI.",
    icon: <FaCut className="w-10 h-10 text-indigo-500" />,
  },
  {
    title: "Text-to-Speech",
    desc: "Convert written text into natural-sounding speech.",
    icon: <FaRobot className="w-10 h-10 text-indigo-500" />,
  },
];

const OurServices = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Our Services
        </h2>
        <p className="text-gray-400 mb-12">
          Powerful tools to transform your business with AI.
        </p>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-50 bg-black border border-white/10 rounded-2xl shadow-lg p-6 flex flex-col justify-between items-center text-left"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.desc}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default OurServices;
