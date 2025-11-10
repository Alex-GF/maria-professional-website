import "../static/css/progressBar.css";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const ProgressBar = ({ progress }) => {
  const progressBar = useRef();
  const isInView = useInView(progressBar);

  useEffect(() => {
    if (isInView) {
      progressBar.current.childNodes[0].style.width = `${progress}%`;
    } else {
      progressBar.current.childNodes[0].style.width= `0`;
    }
  }, [isInView]);

  return (
    <div
      className="relative h-4 w-3/4 overflow-hidden rounded-lg"
      ref={progressBar}
    >
      <div
        className="absolute h-3 w-0 rounded-lg bg-primary backdrop-blur-md duration-[2s] transition-all"
      ></div>
      <div className="z-10 h-3 w-full rounded-lg border border-black border-opacity-30 bg-black bg-opacity-10"></div>
    </div>
  );
};

export default ProgressBar;
