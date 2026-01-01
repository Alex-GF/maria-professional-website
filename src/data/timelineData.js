import { MdWork } from "react-icons/md";
import { FaGraduationCap, FaAward } from "react-icons/fa";
import {theme} from "../static/theme/theme";

const studiesIconStyle = {
  background: `${theme.colors.iconsBackground}`,
  boxShadow:
    `0 0 0 4px ${theme.colors.primary},inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)`,
};
const workIconStyle = {
  background: `${theme.colors.iconsBackground}`,
  boxShadow:
    `0 0 0 4px ${theme.colors.primary},inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)`,
};
const awardIconStyle = {
    background: `${theme.colors.iconsBackground}`,
    boxShadow:
      `0 0 0 4px ${theme.colors.primary},inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)`,
  };
// publishIconStyle removed because it wasn't used (avoids no-unused-vars lint error).

const timelineData = [
  {
    title: "Grado en Química",
    subtitle: "Universidad de Sevilla",
    text: ["Química"],
    date: "2025",
    icon: <FaGraduationCap className="fill-primary"/>,
    iconStyle: studiesIconStyle,
  },
  {
    title: "B2 First English Certificate",
    subtitle: "APTIS General",
    text: [""],
    date: "2025",
    icon: <FaGraduationCap className="fill-primary"/>,
    iconStyle: studiesIconStyle,
  },
  {
    title: "Weddings & Events Planner",
    subtitle: "Excelencya",
    text: ["Programación, planificación y coordinación de bodas y eventos sociales."],
    date: "2019 - 2025",
    icon: <MdWork className="fill-primary"/>,
    iconStyle: workIconStyle,
  },
  {
    title: "Bachillerato",
    subtitle: "I.E.S Miguel de Cervantes",
    text: ["Nota media: 9.2/10"],
    date: "2019",
    icon: <FaAward className="fill-primary"/>,
    iconStyle: awardIconStyle,
  },
  {
    title: "Educación Secundaria Obligatoria",
    subtitle: "I.E.S Miguel de Cervantes",
    text: [""],
    date: "2013 - 2019",
    icon: <FaGraduationCap className="fill-primary"/>,
    iconStyle: studiesIconStyle,
  },
];

export default timelineData;
