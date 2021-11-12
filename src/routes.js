import List from "./Pages/Home"
import Tables from "./Pages/Table";
import Soal1 from "./Pages/Soal1"
import ShortingArr from "./Pages/ShortingArr"

var LayoutRoute = [
    {
        path: "/list",
        name: "List",
        component: List
    },
    {
        path: "/table",
        name: "Table",
        component: Tables
    },
    {
        path: "/",
        name: "Home",
        exact: true,
        component: Soal1
    },
    {
        path: "/shorting",
        name: "Shorting",
        component: ShortingArr
    },
  


];

export default LayoutRoute