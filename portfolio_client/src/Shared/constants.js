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
    linkTo: "/nowhere",
    id: _.uniqueId("navBar-")
  },
  {
    icon: faEnvelope,
    text: "Email Me",
    linkTo: "/nowhere",
    id: _.uniqueId("navBar-")
  },
  {
    icon: faLaptopCode,
    text: "Projects",
    linkTo: "/nowhere",
    id: _.uniqueId("navBar-")
  },
  {
    icon: faUserGraduate,
    text: "Skills",
    linkTo: "/nowhere",
    id: _.uniqueId("navBar-")
  },
  {
    icon: faGithub,
    text: "Github",
    linkTo: "/nowhere",
    id: _.uniqueId("navBar-")
  },
  {
    icon: faBitbucket,
    text: "Bitbucket",
    linkTo: "/nowhere",
    id: _.uniqueId("navBar-")
  },
  {
    icon: faLinkedinIn,
    text: "LinkedIn",
    linkTo: "/nowhere",
    id: _.uniqueId("navBar-")
  }
];
