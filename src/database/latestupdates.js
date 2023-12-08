import update1 from "../assets/update1.webp";
import update2 from "../assets/update2.webp";
import update3 from "../assets/update3.webp";

const updates = [
  {
    id: 0,
    name: "reinvent",
    child: [
      {
        id: 1,
        name: "PUSHING BOUNDARIES THROUGH INNOVATION",
        info: "When it comes to helping protect the environment, inaction is not an option. That’s why from grain to glass, we’re making positive and progressive changes with sustainability at the heart of our decisions.",
        btn: "reinvent",
        image: update1,
      },
    ],
  },
  {
    id: 1,
    name: "reduce",
    child: [
      {
        id: 2,
        name: "FROM GRAIN TO GLASS, LESS IS MORE",
        info: "Making great whisky is about finding balance. All elements working together in perfect harmony. It’s the same when it comes to caring for our planet. We’ve taken a close look at everything we do to find creative ways to reduce our footprint.",
        btn: "reduce",
        image: update2,
      },
    ],
  },
  {
    id: 2,
    name: "restore",
    child: [
      {
        id: 3,
        name: "PROTECTING THE ENVIRONMENT FOR FUTURE GENERATIONS",
        info: "From the Highlands of Scotland to the southern tip of South America, we’re working with our partners and investing to protect and restore wondrous landscapes all around the world.",
        btn: "restore",
        image: update3,
      },
    ],
  },
];

export default updates;
