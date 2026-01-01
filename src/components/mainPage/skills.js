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
  }, []);

  useEffect(() => {
    if (firstLoad) {
      if (type === "Herramientas") {
        frontTechRef.current.scrollIntoView({ behavior: "smooth" });
        tabBar.current.style.transform = "translateX(-120%)";
      }
      if (type === "Idiomas") {
        backTechRef.current.scrollIntoView({ behavior: "smooth" });
        tabBar.current.style.transform = "translateX(155%)";
      }
    } else {
      setFirstLoad(true);
      tabBar.current.style.transform = "translateX(-120%)";
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
              Soy una persona motivada y comprometida, con una gran vocación por
              la química y la organización de proyectos. Me caracterizo por ser
              una persona cercana, empática y proactiva; con una fuerte motivación
              por el crecimiento personal y profesional. Adoro afrontar nuevos
              retos y buscar oportunidades de mejora a diario.
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
                type === "Herramientas" ? "text-primary" : "text-body"
              }`}
              onClick={() => {
                if (type !== "Herramientas") {
                  setType("Herramientas");
                }
              }}
            >
              Herramientas
            </li>
            <li
              className={`cursor-pointer font-mono font-extrabold hover:text-over ${
                type === "Idiomas" ? "text-primary" : "text-body"
              }`}
              onClick={() => {
                if (type !== "Idiomas") {
                  setType("Idiomas");
                }
              }}
            >
              Idiomas
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
          </div>
        </div>
      </div>
    </SnapChild>
  );
};

export default Skills;
