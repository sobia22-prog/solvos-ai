import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Zap, ShieldCheck, Smile } from "lucide-react";

const stats = [
  { label: "Users", value: 10000, suffix: "+" },
  { label: "Uptime", value: 99.99, suffix: "%" },
  { label: "Features", value: 120, suffix: "+" },
];

const features = [
  {
    title: "Blazing Fast",
    desc: "Our infrastructure is optimized for speed and performance.",
    icon: <Zap className="w-10 h-10 text-indigo-500" />,
  },
  {
    title: "Rock-Solid Security",
    desc: "Multi-layered encryption to keep your data safe and sound.",
    icon: <ShieldCheck className="w-10 h-10 text-indigo-500" />,
  },
  {
    title: "Simple & Intuitive",
    desc: "Even your grandma can use it! No manual required.",
    icon: <Smile className="w-10 h-10 text-indigo-500" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white text-black dark:bg-black dark:text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 text-center z-10 relative">
        <h2 className="text-4xl font-bold mb-4">
          Why Choose Us
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          A few reasons why our users love us.
        </p>

        {/* Animated Stats */}
        <div className="flex flex-wrap justify-center gap-6 mb-20">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="w-44 h-44 bg-white dark:bg-neutral-900 rounded-2xl shadow-md flex flex-col items-center justify-center space-y-2 border border-gray-200 dark:border-gray-700"
            >
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400">
                <CountUp
                  end={stat.value}
                  duration={2}
                  decimals={stat.value % 1 !== 0 ? 2 : 0}
                  separator=","
                />
                {stat.suffix}
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Zigzag Feature Cards */}
        <div className="relative space-y-24">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col md:flex-row ${
                idx % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-10 relative`}
            >
              <div className="p-6 bg-neutral-900 text-white rounded-2xl shadow-lg border border-white/10 w-full md:w-1/2">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>

              {idx < features.length - 1 && (
                <div className="absolute hidden md:block w-full h-full top-1/2 left-1/2 -translate-x-1/2 z-0 pointer-events-none">
                  <div
                    className={`border-dotted border-2 border-indigo-400 absolute w-20 h-0 transform ${
                      idx % 2 === 0
                        ? "left-full top-1/2"
                        : "right-full top-1/2"
                    }`}
                  ></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
