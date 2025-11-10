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
    if(firstLoad){
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
    }else{
      setFirstLoad(true);
      tabBar.current.style.transform = "translateX(-210%)";
    }
  }, [type]);

  return (
    <SnapChild mobile>
      <div className="flex w-full flex-col items-center justify-evenly">
        <h2 className="text-center font-mono text-4xl text-primary">
          My technologies
        </h2>
        <div className="mt-2 h-px w-[90%] bg-primary"></div>
        <ul className="mt-5 flex w-full items-center justify-evenly">
          <li
            className={`font-mono ${
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
            className={`font-mono ${
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
            className={`font-mono ${
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
            className={`font-mono ${
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
    </SnapChild>
  );
};

export default FavouriteTechnologies;
