import { HeaderType } from "../types";
import { ICONS } from "./icons";
import { pathnames } from "./pathnames";

// Ensure that `HEADER_DATA` is using valid JSX
export const HEADER_DATA: HeaderType[] = [
  { url: pathnames.home, text: 'Home', icon: ICONS.home },
  { url: pathnames.about, text: 'About', icon:ICONS.about  },
  { url: pathnames.service, text: 'Service', icon:ICONS.service  },
  { url: pathnames.contact, text: 'Contact', icon:ICONS.contact  },
];