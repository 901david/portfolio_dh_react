import _ from "lodash";
import {
  faEnvelope,
  faAddressCard,
  faLaptopCode,
  faUserGraduate
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faBitbucket,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";

export const iconMap = [
  {
    icon: faAddressCard,
    text: "About Me",
    path: "/skills",
    id: _.uniqueId("navBar-"),
    url: null
  },
  {
    icon: faEnvelope,
    text: "Email Me",
    path: "/contact",
    id: _.uniqueId("navBar-"),
    url: null
  },
  {
    icon: faLaptopCode,
    text: "Projects",
    path: "/projects",
    id: _.uniqueId("navBar-"),
    url: null
  },
  {
    icon: faUserGraduate,
    text: "Education",
    path: "/education",
    id: _.uniqueId("navBar-"),
    url: null
  },
  {
    icon: faGithub,
    text: "Github",
    path: null,
    id: _.uniqueId("navBar-"),
    url: "https://github.com/901david"
  },
  {
    icon: faBitbucket,
    text: "Bitbucket",
    path: null,
    id: _.uniqueId("navBar-"),
    url: "https://bitbucket.org/scriptscrawler/"
  },
  {
    icon: faLinkedinIn,
    text: "LinkedIn",
    path: null,
    id: _.uniqueId("navBar-"),
    url: "https://www.linkedin.com/in/00davidhammond/"
  }
];
