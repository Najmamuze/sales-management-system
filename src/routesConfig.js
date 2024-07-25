// routesConfig.js
import { Contact, Home, Info } from "lucide-react"; // Import necessary icons

const routesConfig = [
  {
    path: "/",
    text: "Home",
    icon: Home ,
  },
  {
    path: "/about",
    text: "About",
    icon: Info,
  },
  {
    path: "/contact",
    text: "Contact",
    icon: Contact,
  },
];

export default routesConfig;
