import {MozikaApp, TokyblogApp} from "../../assets";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  ambientColor?: string;
}

const projectData: Project[] = [
  {
    title: "Mozika",
    link: "mozika.netlify.app",
    description:
      "A landing page to show all my local favorite artist , with a nice parallax effect on Desktop and a drag and drop on mobile.",
    image: MozikaApp,
    ambientColor: "rgba(172, 172, 172, 0.4)",
  },
  {
    title: "TokyBlog",
    link: "tokyblog.netlify.app",
    description:
      "My portfolio and blog , so I can share my knowledge with other developer, I has a admin panel so i write article on the browser",
    image: TokyblogApp,
    ambientColor: "rgba(172, 172, 172, 0.4)",
  },
];
export default projectData;
