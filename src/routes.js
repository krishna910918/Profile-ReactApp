
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";

import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";

import Skills from "views/examples/Skills.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
  },
  
  {
    path: "/user-profile",
    name: "My Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "My Projects",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/skills",
    name: "Skills",
    icon: "ni ni-bullet-list-67 text-blue",
    component: Skills,
    layout: "/admin",
  }
  
];
export default routes;
