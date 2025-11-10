import { HiChevronDoubleDown } from "react-icons/hi";
import SnapChild from "../../sections/snapChild";
import { motion } from "framer-motion";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    if (sessionStorage.getItem("showedMainAnimation") === null) {
      setTimeout(() => {
        sessionStorage.setItem("showedMainAnimation", true);
      }, 3000);
    }
  });

  return (
    <SnapChild>
      <div className="relative flex h-full flex-col items-center justify-center">
        <div>
          <motion.h2
            initial={
              sessionStorage.getItem("showedMainAnimation") === null
                ? { opacity: 0, x: "-100%" }
                : { opacity: 1, x: 0 }
            }
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 1.5, duration: 1 },
            }}
            className="mb-6 px-5 text-2xl text-secondary fold:text-3xl"
          >
            Hi, I am
          </motion.h2>
          <motion.h1
            initial={
              sessionStorage.getItem("showedMainAnimation") === null
                ? { opacity: 0, x: "100%" }
                : { opacity: 1, x: 0 }
            }
            animate={{
              opacity: 1,
              x: 0,
              transition: { delay: 1.5, duration: 1 },
            }}
            className="px-5 text-5xl font-bold text-primary fold:text-6xl"
          >
            María Espinar Mora
          </motion.h1>
        </div>
        <div className="absolute bottom-0 flex w-screen justify-center">
          <HiChevronDoubleDown className="h-10 w-20 animate-bounce fill-slate-500" />
        </div>
      </div>
    </SnapChild>
  );
};

export default Hero;
