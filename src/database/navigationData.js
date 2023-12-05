import logo1 from "../assets/black-nav.jpg";
import logo2 from "../assets/cocktail-nav.jpg";
import logo3 from "../assets/history-nav.jpg";

const navigationData = [
  {
    id: 0,
    name: "home",
    link: "/",
  },
  {
    id: 1,
    name: "our whisky",
    link: "our-whisky",
    sublink: [
      {
        id: 0,
        name: "core range",
      },
      {
        id: 1,
        name: "limited editions",
      },
      {
        id: 2,
        name: "blue label cities",
      },
      {
        id: 3,
        name: "blue lable elusive umami",
      },
    ],
    story: [
      {
        id: 0,
        name: "johnnie walker black label",
        image: logo1,
      },
    ],
  },
  {
    id: 2,
    name: "whisky coctails",
    link: "whisky-cocktails",
    sublink: [
      {
        id: 0,
        name: "highball cocktails",
      },
      {
        id: 1,
        name: "classic cocktails",
      },
      {
        id: 2,
        name: "seasonal cocktails",
      },
    ],
    story: [
      {
        id: 0,
        name: "johnnie & peach highball",
        image: logo2,
      },
    ],
  },
  {
    id: 3,
    name: "whisky guide",
    link: "whisky-guide",
    sublink: [
      {
        id: 0,
        name: "types of whisky",
      },
      {
        id: 1,
        name: "blended scotch whisky",
      },
      {
        id: 2,
        name: "how whisky is made",
      },
      {
        id: 3,
        name: "this history of whisky",
      },
      {
        id: 4,
        name: "how to drikn whisky",
      },
      {
        id: 5,
        name: "the johnnie walker story",
      },
    ],
    story: [
      {
        id: 0,
        name: "the history of whisky",
        image: logo3,
      },
    ],
  },
  {
    id: 4,
    name: "our whisky gifts",
    link: "our-whisky-gifts",
    sublink: [
      {
        id: 0,
        name: "gifts from our range",
      },
    ],
  },
  {
    id: 5,
    name: "sustainability",
    link: "nextsteps",
    sublink: [
      {
        id: 0,
        name: "restore",
      },
      {
        id: 1,
        name: "reinvent",
      },
      {
        id: 2,
        name: "reduce",
      },
      {
        id: 3,
        name: "pulp future",
      },
    ],
  },
  {
    id: 6,
    name: "visit johnnie walker princes street",
    link: "visit-us-princes-street",
    sublink: [
      {
        id: 0,
        name: "book tours & events",
      },
      {
        id: 1,
        name: "book a table",
      },
      {
        id: 2,
        name: "retail",
      },
      {
        id: 3,
        name: "1820 rooftop bar",
      },
      {
        id: 4,
        name: "expllorers' bothy bar",
      },
      {
        id: 5,
        name: "venuew hire",
      },
    ],
  },
  {
    id: 7,
    name: "keep walking",
    link: "keep-walking",
    sublink: [
      {
        id: 0,
        name: "keep walking stories",
      },
      {
        id: 1,
        name: "our walkers",
      },
      {
        id: 2,
        name: "keep walking proudly",
      },
    ],
  },
  {
    id: 8,
    name: "newsletter",
  },
];

export default navigationData;
