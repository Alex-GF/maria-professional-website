// Imports removed: unused icon components caused build to fail (no-unused-vars).

const technologiesType = {
  frontend: "Frontend",
  backend: "Backend",
  cloud: "Cloud",
  mobile: "Mobile",
};

const StyledText = ({ text }) => {
  return <span className="h-6 w-6 text-primary font-bold text-2xl">{text}</span>;
}

const technologiesData = [

  // Frontend

  {
    type: technologiesType.frontend,
    icon: <StyledText text="Proactividad" />,
    progress: 100,
  },
  {
    type: technologiesType.frontend,
    icon: <StyledText text="Proactividad" />,
    progress: 100,
  },
  {
    type: technologiesType.frontend,
    icon: <StyledText text="Proactividad" />,
    progress: 100,
  },
  {
    type: technologiesType.frontend,
    icon: <StyledText text="Proactividad" />,
    progress: 100,
  },
  {
    type: technologiesType.frontend,
    icon: <StyledText text="Proactividad" />,
    progress: 70,
  },
  // {
  //   name: "Jinja",
  //   type: technologiesType.frontend,
  //   icon: <SiJinja className="h-6 w-6 fill-body" />,
  //   url: "https://jinja.palletsprojects.com/en/3.1.x/",
  //   progress: 60,
  // },

  // Backend

  {
    type: technologiesType.backend,
    icon: <StyledText text="Proactividad" />,
    progress: 90,
  },
  {
    type: technologiesType.backend,
    icon: <StyledText text="Proactividad" />,
    progress: 85,
  },
  {
    type: technologiesType.backend,
    icon: <StyledText text="Proactividad" />,
    progress: 70,
  },
  {
    type: technologiesType.backend,
    icon: <StyledText text="Proactividad" />,
    progress: 75,
  },
  {
    type: technologiesType.backend,
    icon: <StyledText text="Proactividad" />,
    progress: 75,
  },
  {
    type: technologiesType.backend,
    icon: <StyledText text="Proactividad" />,
    progress: 60,
  },

  // Cloud

  {
    type: technologiesType.cloud,
    icon: <StyledText text="Proactividad" />,
    progress: 60,
  },
  {
    type: technologiesType.cloud,
    icon: <StyledText text="Proactividad" />,
    progress: 80,
  },
  {
    type: technologiesType.cloud,
    icon: <StyledText text="Proactividad" />,
    progress: 60,
  },
  {
    type: technologiesType.cloud,
    icon: <StyledText text="Proactividad" />,
    progress: 60,
  },
  {
    type: technologiesType.cloud,
    icon: <StyledText text="Proactividad" />,
    progress: 80,
  },

  // Mobile

  {
    type: technologiesType.mobile,
    icon: <StyledText text="Proactividad" />,
    progress: 80,
  },
];

export {technologiesData, technologiesType};
