import {devto, dezzer, facebook, github, instagram, linkedIn, npm, reddit, spotify,} from "../../assets/icons";

interface Link {
  platform: string;
  userName: string;
  link: string;
  icons?: string;
}

const LinkData: Link[] = [
  {
    platform: "Github",
    userName: "TokyFy",
    link: "#",
    icons: github,
  },
  {
    platform: "LinkedIn",
    userName: "TokyFy",
    link: "#",
    icons: linkedIn,
  },
  {
    platform: "Dev.to",
    userName: "TokyFy",
    link: "#",
    icons: devto,
  },
  {
    platform: "NPM",
    userName: "TokyFy",
    link: "#",
    icons: npm,
  },
  {
    platform: "Reddit",
    userName: "TokyFy",
    link: "#",
    icons: reddit,
  },
  {
    platform: "Instagram",
    userName: "TokyFy",
    link: "#",
    icons: instagram,
  },
  {
    platform: "Facebook",
    userName: "TokyFy",
    link: "#",
    icons: facebook,
  },
  {
    platform: "Deezer",
    userName: "TokyFy",
    link: "#",
    icons: dezzer,
  },
  {
    platform: "Spotify",
    userName: "TokyFy",
    link: "#",
    icons: spotify,
  },
];

export default LinkData;
