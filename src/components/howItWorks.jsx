import { motion } from "framer-motion";
import {
  UserPlus,
  Settings,
  CalendarCheck,
  BarChart2,
} from "lucide-react";

const steps = [
  {
    title: "Send Request",
    desc: "Send request to get a free demo about Solvos AI.",
    icon: UserPlus,
  },
  {
    title: "Schedule",
    desc: "Book your first demo in just one go.",
    icon: CalendarCheck,
  },
  {
    title: "Customize",
    desc: "Tailor your experience with easy settings.",
    icon: Settings,
  },
  
  {
    title: "Get Value",
    desc: "See real-time insights and results instantly.",
    icon: BarChart2,
  },
];

const Workflow = () => {
  return (
    <section className="bg-black py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          How It Works
        </h2>

        <div className="relative flex flex-col gap-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 relative z-10 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Arrow between steps */}
                {!isLast && (
  <svg
    className={`absolute w-44 h-24 text-blue-500 opacity-60 z-0 ${
      index % 2 === 0
        ? "left-1/2 top-full -translate-x-1/2 -translate-y-1"
        : "right-1/2 top-full translate-x-1/2 -translate-y-1"
    }`}
    viewBox="0 0 200 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d={
        index % 2 === 0
          ? "M10 10 C 100 70, 100 10, 190 70" 
          : "M190 10 C 100 70, 100 10, 10 70" 
      }
      stroke="currentColor"
      strokeWidth="3"
      strokeDasharray="6 6"
      fill="none"
    />
    <circle
      cx={index % 2 === 0 ? "190" : "10"}
      cy="70"
      r="5"
      fill="currentColor"
    />
  </svg>
)}


                <motion.div
                  className="bg-gray-900 border border-gray-700 rounded-2xl p-6 shadow-xl w-full md:w-1/2 z-10"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gray-800 rounded-full">
                      <Icon className="w-8 h-8 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 mt-1">{step.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
