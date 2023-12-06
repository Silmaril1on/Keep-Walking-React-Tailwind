import johnnielemon from "../assets/johnnie-lemon.jpg";
import gingerr from "../assets/ginger.webp";
import elderflower from "../assets/elderflower.webp";
import peach from "../assets/peach.webp";
import lemon from "../assets/lemon.webp";
import greentea from "../assets/greentea.webp";
import oldfashioned from "../assets/oldfashioned.jpg";
import sour from "../assets/sour.webp";
import peniciline from "../assets/peniciline.webp";
import godfather from "../assets/godfather.webp";
import rusty from "../assets/rusty.webp";
import toddy from "../assets/toddy.webp";
import robroy from "../assets/robroy.webp";
import bobby from "../assets/bobby.webp";
import blood from "../assets/blood.webp";
import fashioned from "../assets/fashioned.webp";

const cocktails = [
  {
    id: 0,
    pre: "Highball Cocktails",
    image: johnnielemon,
    name: "johnnie & lemon",
    but: "johnnie & lemon recipe",
    info: "Fire tamed by a citrus caress. Johnnie & Lemon is a fusion of flavors in a whisky highball that leaves your taste buds tingling.",
    cocktail: [
      {
        name: "johnnie & ginger",
        image: gingerr,
      },
      {
        name: "johnnie & elderflower",
        image: elderflower,
      },
      {
        name: "johnnie & peach",
        image: peach,
      },
      {
        name: "johnnie & lemon",
        image: lemon,
      },
      {
        name: "johnnie & green tea",
        image: greentea,
      },
    ],
  },
  {
    id: 1,
    pre: "classic cocktails",
    image: oldfashioned,
    name: "whisky old fashioned",
    but: "old fashioned recipe",
    info: "A timeless whisky cocktail with a bold Johnnie Walker edge. Enjoy the unmistakable taste of the Old Fashioned drink.",
    cocktail: [
      {
        name: "whisky old fashioned",
        image: fashioned,
      },
      {
        name: "whisky sour",
        image: sour,
      },
      {
        name: "whisky penicillin",
        image: peniciline,
      },
      {
        name: " whisky godfather ",
        image: godfather,
      },
      {
        name: " whisky rusty nail ",
        image: rusty,
      },
      {
        name: "whisky hot toddy",
        image: toddy,
      },
      {
        name: "whisky rob roy",
        image: robroy,
      },
      {
        name: "whisky bobby burns",
        image: bobby,
      },
      {
        name: "whisky blood & sand",
        image: blood,
      },
      {
        name: "whisky rusty nail",
        image: rusty,
      },
    ],
  },
];

export default cocktails;
