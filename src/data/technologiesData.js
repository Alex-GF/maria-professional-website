// Imports removed: unused icon components caused build to fail (no-unused-vars).

const technologiesType = {
  frontend: "Herramientas",
  backend: "Idiomas",
  cloud: "Cloud",
  mobile: "Mobile",
};

const StyledText = ({ text }) => {
  return <span className="h-6 w-6 text-primary font-bold text-2xl">{text}</span>;
}

const technologiesData = [

  // Herramientas

  {
    type: technologiesType.frontend,
    icon: <StyledText text="Excel" />,
    progress: 90,
  },
  {
    type: technologiesType.frontend,
    icon: <StyledText text="Word" />,
    progress: 85,
  },
  {
    type: technologiesType.frontend,
    icon: <StyledText text="Power Point" />,
    progress: 95,
  },
  {
    type: technologiesType.frontend,
    icon: <StyledText text="FIJI" />,
    progress: 100,
  },

  // Idiomas

  {
    type: technologiesType.backend,
    icon: <StyledText text="Español" />,
    progress: 100,
  },
  {
    type: technologiesType.backend,
    icon: <StyledText text="Inglés" />,
    progress: 70,
  },

  // Cloud

  // {
  //   type: technologiesType.cloud,
  //   icon: <StyledText text="Proactividad" />,
  //   progress: 60,
  // },
  // {
  //   type: technologiesType.cloud,
  //   icon: <StyledText text="Proactividad" />,
  //   progress: 80,
  // },
  // {
  //   type: technologiesType.cloud,
  //   icon: <StyledText text="Proactividad" />,
  //   progress: 60,
  // },
  // {
  //   type: technologiesType.cloud,
  //   icon: <StyledText text="Proactividad" />,
  //   progress: 60,
  // },
  // {
  //   type: technologiesType.cloud,
  //   icon: <StyledText text="Proactividad" />,
  //   progress: 80,
  // },

  // Mobile

  // {
  //   type: technologiesType.mobile,
  //   icon: <StyledText text="Proactividad" />,
  //   progress: 80,
  // },
];

export {technologiesData, technologiesType};
