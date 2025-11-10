import { RiFlutterFill } from "react-icons/ri";
import { GrGraphQl } from "react-icons/gr";
import {
  SiPostgresql,
  SiDjango,
  SiTailwindcss,
  SiJavascript,
  SiJinja,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiCloudflare,
  SiLinux,
  SiSpringboot,
  SiApollographql,
  SiSwagger,
  SiTypescript,
} from "react-icons/si";
import { FaPython, FaReact } from "react-icons/fa";

const technologiesType = {
  frontend: "Frontend",
  backend: "Backend",
  cloud: "Cloud",
  mobile: "Mobile",
};

const technologiesData = [

  // Frontend

  {
    name: "JavaScript",
    type: technologiesType.frontend,
    icon: <SiJavascript className="h-6 w-6 fill-body" />,
    url: "https://developer.mozilla.org/es/docs/Web/JavaScript",
    progress: 100,
  },
  {
    name: "TypeScript",
    type: technologiesType.frontend,
    icon: <SiTypescript className="h-6 w-6 fill-body" />,
    url: "https://www.typescriptlang.org",
    progress: 100,
  },
  {
    name: "React",
    type: technologiesType.frontend,
    icon: <FaReact className="h-6 w-6 fill-body" />,
    url: "https://es.react.dev",
    progress: 100,
  },
  {
    name: "TailwindCSS",
    type: technologiesType.frontend,
    icon: <SiTailwindcss className="h-6 w-6 fill-body" />,
    url: "https://tailwindcss.com",
    progress: 100,
  },
  {
    name: "Apollo GraphQL",
    type: technologiesType.frontend,
    icon: <SiApollographql className="h-6 w-6 fill-body" />,
    url: "https://www.apollographql.com/",
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
    name: "Python",
    type: technologiesType.backend,
    icon: <FaPython className="h-6 w-6 fill-body" />,
    url: "https://www.python.org",
    progress: 90,
  },
  {
    name: "GraphQL",
    type: technologiesType.backend,
    icon: <GrGraphQl className="h-6 w-6 fill-body" />,
    url: "https://graphql.org",
    progress: 85,
  },
  {
    name: "PostgreSQL",
    type: technologiesType.backend,
    icon: <SiPostgresql className="h-6 w-6 fill-body" />,
    url: "https://www.postgresql.org",
    progress: 70,
  },
  {
    name: "Django",
    type: technologiesType.backend,
    icon: <SiDjango className="h-6 w-6 fill-body" />,
    url: "https://www.djangoproject.com",
    progress: 75,
  },
  {
    name: "Spring Boot",
    type: technologiesType.backend,
    icon: <SiSpringboot className="h-6 w-6 fill-body" />,
    url: "https://spring.io",
    progress: 75,
  },
  {
    name: "Swagger",
    type: technologiesType.backend,
    icon: <SiSwagger className="h-6 w-6 fill-body" />,
    url: "https://swagger.io",
    progress: 60,
  },

  // Cloud

  {
    name: "Google Cloud",
    type: technologiesType.cloud,
    icon: <SiGooglecloud className="h-6 w-6 fill-body" />,
    url: "https://cloud.google.com",
    progress: 60,
  },
  {
    name: "Docker",
    type: technologiesType.cloud,
    icon: <SiDocker className="h-6 w-6 fill-body" />,
    url: "https://www.docker.com",
    progress: 80,
  },
  {
    name: "Kubernetes",
    type: technologiesType.cloud,
    icon: <SiKubernetes className="h-6 w-6 fill-body" />,
    url: "https://kubernetes.io",
    progress: 60,
  },
  {
    name: "Cloudflare",
    type: technologiesType.cloud,
    icon: <SiCloudflare className="h-6 w-6 fill-body" />,
    url: "https://www.cloudflare.com",
    progress: 60,
  },
  {
    name: "Linux",
    type: technologiesType.cloud,
    icon: <SiLinux className="h-6 w-6 fill-body" />,
    url: "https://www.linux.org",
    progress: 80,
  },

  // Mobile

  {
    name: "Flutter",
    type: technologiesType.mobile,
    icon: <RiFlutterFill className="h-6 w-6 fill-body" />,
    url: "https://flutter.dev/",
    progress: 80,
  },
];

export {technologiesData, technologiesType};
