import { MdWork } from "react-icons/md";
import { IoNewspaper } from "react-icons/io5";
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
const publishIconStyle = {
    background: `${theme.colors.iconsBackground}`,
    boxShadow:
      `0 0 0 4px ${theme.colors.primary},inset 0 2px 0 rgba(0,0,0,.08),0 3px 0 4px rgba(0,0,0,.05)`,
  };

const timelineData = [
  {
    title: "Higher Graduate",
    subtitle: "University of Seville",
    text: ["Collaboration in the task 7.2: 'Automated configuration and analysis of service chains integrated with ITSM tools', within the project 'Mejorando el desarrollo, fiabilidad y gobierno de servicios digitales por medio de la colaboración bot-humano' (PID2021-126227NB-C22).", "Specific research field: 'Pricing-driven Development and Operation of SaaS'"],
    date: "2024 - present",
    icon: <MdWork className="fill-primary"/>,
    iconStyle: workIconStyle,
  },
  {
    title: "Weddings & Events Planner",
    subtitle: "Excelencya",
    text: ["Timing, planning and coordination of weddings and social events."],
    date: "2019 - present",
    icon: <MdWork className="fill-primary"/>,
    iconStyle: workIconStyle,
  },
  {
    title: "Best Student Paper Award",
    subtitle: "International Conference on Service-Oriented Computing (ICSOC)",
    text: ["Our work, 'Racing the Market: An Industry Support Analysis for Pricing-Driven DevOps in SaaS', has been selected as the best student paper at the 22nd International Conference on Service-Oriented Computing (ICSOC 2024)."],
    date: "2024",
    icon: <FaAward className="fill-primary"/>,
    iconStyle: awardIconStyle,
  },
  {
    title: "Distinguished Paper Award",
    subtitle: "International Conference on Service-Oriented Computing (ICSOC)",
    text: ["Our work, 'Racing the Market: An Industry Support Analysis for Pricing-Driven DevOps in SaaS', has been selected as one of the top 6 papers at the 22nd International Conference on Service Oriented Computing (ICSOC 2024), earning us the Distinguished Paper Award."],
    date: "2024",
    icon: <FaAward className="fill-primary"/>,
    iconStyle: awardIconStyle,
  },
  {
    title: "Racing the Market: An Industry Support Analysis for Pricing-Driven DevOps in SaaS",
    subtitle: "22nd International Conference on Service-Oriented Computing (ICSOC'24)",
    text: ["pp 260-275"],
    date: "2024",
    icon: <IoNewspaper className="fill-primary"/>,
    iconStyle: publishIconStyle,
  },
  {
    title: "Technical Specialist",
    subtitle: "University of Seville",
    text: ["Colaboration in IRIS research project.", "Working area: Efficient contract-driven SaaS development and operation"],
    date: "2023 - 2024",
    icon: <MdWork className="fill-primary"/>,
    iconStyle: workIconStyle,
  },
  {
    title: "Software Engineering Master's Degree: Cloud, Data and IT Management",
    subtitle: "University of Seville",
    text: [""],
    date: "2023 - 2024",
    icon: <FaGraduationCap className="fill-primary"/>,
    iconStyle: studiesIconStyle,
  },
  {
    title: "Towards Effective SaaS Pricing Design: A Case Study of CCSIM",
    subtitle: "20th International Workshop on Engineering Service-Oriented Applications and Cloud Services (WESOACS'24)",
    text: [""],
    date: "2024",
    icon: <IoNewspaper className="fill-primary"/>,
    iconStyle: publishIconStyle,
  },
  {
    title: "Towards Pricing4SaaS: A Framework for Pricing-Driven Feature Toggling in SaaS",
    subtitle: "International Conference on Web Engineering",
    text: ["pp 389-392"],
    date: "2024",
    icon: <IoNewspaper className="fill-primary"/>,
    iconStyle: publishIconStyle,
  },
  {
    title: "Best Demo Award",
    subtitle: "Sistedes",
    text: ["Best demo in XIX Jornadas de Ciencia e Ingeniería de Servicios"],
    date: "2024",
    icon: <FaAward className="fill-primary"/>,
    iconStyle: awardIconStyle,
  },
  {
    title: "Best Paper Award",
    subtitle: "Sistedes",
    text: ["Best paper in XIX Jornadas de Ciencia e Ingeniería de Servicios"],
    date: "2024",
    icon: <FaAward className="fill-primary"/>,
    iconStyle: awardIconStyle,
  },
  {
    title: "Towards a Suite of Software Libraries for Pricing-driven Feature Toggling",
    subtitle: "XIX Jornadas de Ciencia e Ingeniería de Servicios",
    text: [""],
    date: "2024",
    icon: <IoNewspaper className="fill-primary"/>,
    iconStyle: publishIconStyle,
  },
  {
    title: "Pricing-driven Development and Operation of SaaS: Challenges and Opportunities",
    subtitle: "XIX Jornadas de Ciencia e Ingeniería de Servicios",
    text: [""],
    date: "2024",
    icon: <IoNewspaper className="fill-primary"/>,
    iconStyle: publishIconStyle,
  },
  {
    title: "Pricing4SaaS: Towards a pricing model to drive the operation of SaaS",
    subtitle: "International Conference on Advanced Information Systems Engineering",
    text: ["pp 47-54"],
    date: "2024",
    icon: <IoNewspaper className="fill-primary"/>,
    iconStyle: publishIconStyle,
  },
  {
    title: "Introduction to Quantum Software Development",
    subtitle: "University of Seville",
    text: ["Microcredential"],
    date: "2023",
    icon: <FaGraduationCap className="fill-primary"/>,
    iconStyle: studiesIconStyle,
  },
  {
    title: "Data Analyst Continuous Training Course",
    subtitle: "Google",
    text: ["An official course hosted by Google that teaches students how to use Google Cloud data analysis tools, such as BigQuery, to work with real datasets and gain insights from business data."],
    date: "2023",
    icon: <FaGraduationCap className="fill-primary"/>,
    iconStyle: studiesIconStyle,
  },
  {
    title: "Associate Cloud Engineer Continuous Training Course",
    subtitle: "Google",
    text: ["The aim of this course is to train students to identify the value of Google Cloud products and services, integrate cloud-based solutions into corporate strategies, and develop proficiency in the use of flexible infrastructure and Google Cloud platforms, with a specific focus on Compute Engine."],
    date: "2023",
    icon: <FaGraduationCap className="fill-primary"/>,
    iconStyle: studiesIconStyle,
  },
  {
    title: "Best Speaker Award",
    subtitle: "University of Seville",
    text: [""],
    date: "2023",
    icon: <FaAward className="fill-primary"/>,
    iconStyle: awardIconStyle,
  },
  {
    title: "Honors in University",
    subtitle: "University of Seville",
    text: ["90% of software related subjects with a grade of 9 or higher; 50% of them with honors"],
    date: "2023",
    icon: <FaAward className="fill-primary"/>,
    iconStyle: awardIconStyle,
  },
  {
    title: "Software Engineering & Computer Science Bachelor's Degree",
    subtitle: "University of Seville",
    text: ["Computer Engineering - Software Engineering"],
    date: "2019 - 2023",
    icon: <FaGraduationCap className="fill-primary"/>,
    iconStyle: studiesIconStyle,
  },
  {
    title: "Technical Specialist",
    subtitle: "University of Seville",
    text: ["Implementation of concept tests, prototypes and software tools to evaluate the performance of automatic UI test repair algorithms in the context o[f mobile applications"],
    date: "2022",
    icon: <MdWork className="fill-primary"/>,
    iconStyle: workIconStyle,
  },
  {
    title: "React Complete Course",
    subtitle: "ED Team",
    text: [""],
    date: "2021",
    icon: <FaGraduationCap className="fill-primary"/>,
    iconStyle: studiesIconStyle,
  },
  {
    title: "C1 Advaced English Certificate",
    subtitle: "Cambridge",
    text: [""],
    date: "2019",
    icon: <FaGraduationCap className="fill-primary"/>,
    iconStyle: studiesIconStyle,
  },
  {
    title: "High School Graduation With Honors",
    subtitle: "I.E.S Miguel de Cervantes",
    text: [""],
    date: "2019",
    icon: <FaAward className="fill-primary"/>,
    iconStyle: awardIconStyle,
  },
  {
    title: "High School",
    subtitle: "I.E.S Miguel de Cervantes",
    text: [""],
    date: "2013 - 2019",
    icon: <FaGraduationCap className="fill-primary"/>,
    iconStyle: studiesIconStyle,
  },
  {
    title: "B2 First English Certificate",
    subtitle: "Cambridge",
    text: [""],
    date: "2018",
    icon: <FaGraduationCap className="fill-primary"/>,
    iconStyle: studiesIconStyle,
  },
  {
    title: "B1 Preliminary English Certificate",
    subtitle: "Cambridge",
    text: [""],
    date: "2016",
    icon: <FaGraduationCap className="fill-primary"/>,
    iconStyle: studiesIconStyle,
  },
];

export default timelineData;
