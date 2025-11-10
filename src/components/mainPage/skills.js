import SnapChild from "../../sections/snapChild";
import {
  technologiesData,
  technologiesType,
} from "../../data/technologiesData";
import { useEffect, useState, useRef } from "react";
import SkillProgressBar from "./skillProgressBar";

const Skills = () => {
  const [frontendTechnologies, setFrontendTechnologies] = useState([]);
  const [backendTechnologies, setBackendTechnologies] = useState([]);
  const [cloudTechnologies, setCloudTechnologies] = useState([]);
  const [mobileTechnologies, setMobileTechnologies] = useState([]);
  const [type, setType] = useState(technologiesType.frontend);
  const [firstLoad, setFirstLoad] = useState(false);

  const frontTechRef = useRef();
  const backTechRef = useRef();
  const cloudTechRef = useRef();
  const mobileTechRef = useRef();
  const tabBar = useRef();

  useEffect(() => {
    setFrontendTechnologies(
      technologiesData.filter(
        (technology) => technology.type === technologiesType.frontend
      )
    );
    setBackendTechnologies(
      technologiesData.filter(
        (technology) => technology.type === technologiesType.backend
      )
    );
    setCloudTechnologies(
      technologiesData.filter(
        (technology) => technology.type === technologiesType.cloud
      )
    );
    setMobileTechnologies(
      technologiesData.filter(
        (technology) => technology.type === technologiesType.mobile
      )
    );
  }, []);

  useEffect(() => {
    if (firstLoad) {
      if (type === "Frontend") {
        frontTechRef.current.scrollIntoView({ behavior: "smooth" });
        tabBar.current.style.transform = "translateX(-210%)";
      }
      if (type === "Backend") {
        backTechRef.current.scrollIntoView({ behavior: "smooth" });
        tabBar.current.style.transform = "translateX(-55%)";
      }
      if (type === "Cloud") {
        cloudTechRef.current.scrollIntoView({ behavior: "smooth" });
        tabBar.current.style.transform = "translateX(85%)";
      }
      if (type === "Mobile") {
        mobileTechRef.current.scrollIntoView({ behavior: "smooth" });
        tabBar.current.style.transform = "translateX(222%)";
      }
    } else {
      setFirstLoad(true);
      tabBar.current.style.transform = "translateX(-210%)";
    }
  }, [type]);
  return (
    <SnapChild desktop>
      <div className="relative h-full w-full">
        {/* Sobre mí */}

        <div className="absolute left-[10%] top-[12.5%] flex h-3/4 w-[30%] flex-col">
          <h3 className="font-mono text-4xl text-primary">Sobre mí</h3>
          <div className="mb-10 h-px w-full bg-primary"></div>
          <div className="h-full w-full">
            <div className="about-me-clip-path"></div>
            <div className="text-justify font-mono text-body">
              I have always been captivated by the challenge of understanding
              systems and solving complex problems, a passion that led me to
              pursue software engineering and explore service-oriented
              computing. Driven by innovation and efficiency, I love to focus on
              crafting solutions that address real-world challenges.
              Collaboration and continuous learning shape how I work. Whether
              leading teams, presenting research, or mentoring others, I thrive
              in environments that value adaptability, effective communication,
              and critical thinking. In the end, I strive to balance creativity,
              precision, and practicality in both my professional and personal
              life.
            </div>
          </div>
        </div>

        {/* Imagen */}
        <img
          src={require("../../static/images/profile-pic.webp")}
          alt="María Espinar Mora"
          className="absolute bottom-0 left-2/4 h-full w-2/3 -translate-x-2/4 lg:w-1/4"
        />

        {/* Skills */}

        <div className="absolute right-[7.5%] top-0 flex h-full w-1/4 flex-col items-center justify-start py-36">
          <ul className="mt-5 flex w-full items-center justify-evenly">
            <li
              className={`cursor-pointer font-mono font-extrabold hover:text-over ${
                type === "Frontend" ? "text-primary" : "text-body"
              }`}
              onClick={() => {
                if (type !== "Frontend") {
                  setType("Frontend");
                }
              }}
            >
              Frontend
            </li>
            <li
              className={`cursor-pointer font-mono font-extrabold hover:text-over ${
                type === "Backend" ? "text-primary" : "text-body"
              }`}
              onClick={() => {
                if (type !== "Backend") {
                  setType("Backend");
                }
              }}
            >
              Backend
            </li>
            <li
              className={`cursor-pointer font-mono font-extrabold hover:text-over ${
                type === "Cloud" ? "text-primary" : "text-body"
              }`}
              onClick={() => {
                if (type !== "Cloud") {
                  setType("Cloud");
                }
              }}
            >
              Cloud
            </li>
            <li
              className={`cursor-pointer font-mono font-extrabold hover:text-over ${
                type === "Mobile" ? "text-primary" : "text-body"
              }`}
              onClick={() => {
                if (type !== "Mobile") {
                  setType("Mobile");
                }
              }}
            >
              Mobile
            </li>
          </ul>
          <div
            ref={tabBar}
            className="h-px w-[15%] bg-primary transition-all duration-1000"
          ></div>
          <div className="flex w-full snap-x snap-mandatory flex-row overflow-x-hidden">
            <div
              className="mt-8 flex h-full w-full flex-shrink-0 snap-start snap-always flex-col items-center justify-start"
              ref={frontTechRef}
            >
              {frontendTechnologies.map((technology, index) => {
                return <SkillProgressBar technology={technology} key={index} />;
              })}
            </div>
            <div
              className="mt-8 flex h-full w-full flex-shrink-0 snap-start snap-always flex-col items-center justify-start"
              ref={backTechRef}
            >
              {backendTechnologies.map((technology, index) => {
                return <SkillProgressBar technology={technology} key={index} />;
              })}
            </div>
            <div
              className="mt-8 flex h-full w-full flex-shrink-0 snap-start snap-always flex-col items-center justify-start"
              ref={cloudTechRef}
            >
              {cloudTechnologies.map((technology, index) => {
                return <SkillProgressBar technology={technology} key={index} />;
              })}
            </div>
            <div
              className="mt-8 flex h-full w-full flex-shrink-0 snap-start snap-always flex-col items-center justify-start"
              ref={mobileTechRef}
            >
              {mobileTechnologies.map((technology, index) => {
                return <SkillProgressBar technology={technology} key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </SnapChild>
  );
};

export default Skills;
