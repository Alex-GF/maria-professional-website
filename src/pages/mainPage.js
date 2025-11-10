import PageTemplate from "../sections/pageTemplate";
import Hero from "../components/mainPage/hero";
import SnapCarrousel from "../sections/snapCarousel";
import AboutMeMobile from "../components/mainPage/aboutMe";
import FavouriteTechnologies from "../components/mainPage/favouriteTechnologies";
import Skills from "../components/mainPage/skills";
import { useEffect, useState } from "react";
import LoadingAnimationPage from "./loadingAnimationPage";

const MainPage = () => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    console.log(sessionStorage.getItem("showed"));
    if (sessionStorage.getItem("showed")===null) {
      let timer1 = setTimeout(() => {
        setShowAnimation(false);
        sessionStorage.setItem("showed", true);
      }, 2000);
      return () => {
        clearTimeout(timer1);
      };
    }else{
      setShowAnimation(false);
    }
  }, []);

  return (
    <>
      {showAnimation ? (
        <LoadingAnimationPage />
      ) : (
        <PageTemplate>
          <SnapCarrousel>
            <Hero />
            <Skills />
            <AboutMeMobile />
            <FavouriteTechnologies />
          </SnapCarrousel>
        </PageTemplate>
      )}
    </>
  );
};

export default MainPage;
