import SnapChild from "../../sections/snapChild";
import {
  technologiesData,
  technologiesType,
} from "../../data/technologiesData";
import { useEffect, useState, useRef } from "react";
import SkillProgressBar from "./skillProgressBar";

const FavouriteTechnologies = () => {
  const [frontendTechnologies, setFrontendTechnologies] = useState([]);
  const [backendTechnologies, setBackendTechnologies] = useState([]);
  const [type, setType] = useState(technologiesType.frontend);
  const [firstLoad, setFirstLoad] = useState(false);

  const frontTechRef = useRef();
  const backTechRef = useRef();
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
    if(firstLoad){
      if (type === "Herramientas") {
        frontTechRef.current.scrollIntoView({ behavior: "smooth" });
        tabBar.current.style.transform = "translateX(-120%)";
      }
      if (type === "Idiomas") {
        backTechRef.current.scrollIntoView({ behavior: "smooth" });
        tabBar.current.style.transform = "translateX(145%)";
      }
    }else{
      setFirstLoad(true);
      tabBar.current.style.transform = "translateX(-120%)";
    }
  }, [type]);

  return (
    <SnapChild mobile>
      <div className="flex w-full flex-col items-center justify-evenly">
        <h2 className="text-center font-custom text-4xl text-primary">
          Mis Habilidades
        </h2>
        <div className="mt-2 h-px w-[90%] bg-primary"></div>
        <ul className="mt-5 flex w-full items-center justify-evenly">
          <li
            className={`font-custom ${
              type === "Herramientas" ? "text-primary" : "text-body"
            } cursor-pointer`}
            onClick={() => {
              if (type !== "Herramientas") {
                setType("Herramientas");
              }
            }}
          >
            Herramientas
          </li>
          <li
            className={`font-custom ${
              type === "Idiomas" ? "text-primary" : "text-body"
            } cursor-pointer`}
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
      </div>
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
    </SnapChild>
  );
};

export default FavouriteTechnologies;
