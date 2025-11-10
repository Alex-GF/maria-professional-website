import Header from "./header";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const PageTemplate = (props) => {
  return (
    <>
      <Header />
      <div
        className="relative h-screen w-screen overflow-y-scroll bg-gradient-to-tr from-background1 via-background2 to-background1 lg:pt-28 pt-20"
        id="main-page"
      >
        {props.children}
        <motion.div
          initial={
            sessionStorage.getItem("showedMainAnimation") === null
              ? { y: 500 }
              : { y: 0 }
          }
          animate={{ y: 0, transition: { delay: 1, duration: 0.5 } }}
          className="absolute bottom-0 left-5 hidden h-72 w-10 flex-col items-center justify-between xl:flex 2xl:left-10"
        >
          <a
            href="https://www.linkedin.com/in/marespmor/"
            target="_blank"
            rel="noreferrer"
            className="mb-5 h-8 w-8 cursor-pointer"
          >
            <FaLinkedin className="h-full w-full fill-body hover:fill-primary" />
          </a>
          <div className="h-[60%] w-px grow bg-body"></div>
        </motion.div>
        <motion.div
          initial={
            sessionStorage.getItem("showedMainAnimation") === null
              ? { y: 500 }
              : { y: 0 }
          }
          animate={{ y: 0, transition: { delay: 1, duration: 0.5 } }}
          className="absolute bottom-0 right-5 hidden h-72 w-10 flex-col items-center justify-between xl:flex 2xl:right-10"
        >
          <a
            className="rotate-90 cursor-pointer font-mono text-sm text-body hover:text-primary"
            href="mailto:espinarmora@gmail.com"
          >
            espinarmora@gmail.com
          </a>
          <div className="h-[60%] w-px bg-body"></div>
        </motion.div>
      </div>
    </>
  );
};

export default PageTemplate;
