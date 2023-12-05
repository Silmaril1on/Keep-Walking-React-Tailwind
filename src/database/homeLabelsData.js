import red from "../assets/red-label-video.mp4";
import black from "../assets/black-label-video.mp4";
import double from "../assets/double-black.webp";
import gold from "../assets/gold-label.webp";
import green from "../assets/green-label.webp";
import blue from "../assets/blue-label.webp";
import redImage from "../assets/red-label.webp";
import blackImage from "../assets/black-label.webp";

const labels = [
  {
    id: 0,
    headline: "red label",
    color: "#e02a29",
    whisky: [
      {
        id: 0,
        video: red,
        image: redImage,
        name: "JOHNNIE WALKER red LABEL",
        info: "Flowers that bloom into flames. Johnnie Walker Red Label is the world’s best-selling Blended Scotch Whisky. And is made for mixing, both in exhilarating cocktails and with your favorite people. It brings together whiskies specially chosen for their bold, vibrant flavors that add a fiery kick to any mix.",
        button: "more about red label",
      },
    ],
  },
  {
    id: 1,
    headline: "black label",
    color: "#555555",
    whisky: [
      {
        id: 0,
        video: black,
        image: blackImage,
        name: "JOHNNIE WALKER BLACK LABEL 12 YEARS",
        info: "Johnnie Walker Black Label is one of life’s true icons. A masterful blend of single malt and grain whiskies from across Scotland, aged for at least 12 years. The result is a timeless classic with depth and balance of flavor. Drink it with ice, neat or in a Highball.",
        button: "more about black label",
      },
    ],
  },
  {
    id: 2,
    headline: "double black",
    color: "#000",
    whisky: [
      {
        id: 0,
        image: double,
        name: "JOHNNIE WALKER DOUBLE BLACK",
        info: "Johnnie Walker Double Black Whisky is the rebellious younger sibling of Johnnie Walker Black Label with a deep, brooding intensity. It's a sibling of Johnnie Walker Black Label, but youthful, spikier and more rebellious.",
        button: "more about double label",
      },
    ],
  },
  {
    id: 3,
    headline: "gold label",
    color: "#fcb913",
    whisky: [
      {
        id: 0,
        image: gold,
        name: "JOHNNIE WALKER GOLD LABEL RESERVE",
        info: "Johnnie Walker Gold Label Reserve is a whisky that plays nicely with others but always holds its own. This award-winning Scotch is made from whiskies chosen for their sweet, honeyed qualities. We select them when they're at their most vibrant for vivid flavor in every mouthful.",
        button: "more about gold label",
      },
    ],
  },
  {
    id: 4,
    headline: "green label",
    color: "#3f5b52",
    whisky: [
      {
        id: 0,
        image: green,
        name: "JOHNNIE WALKER GREEN LABEL 15 YEARS",
        info: "Our only Scotch blended entirely with single malts. Johnnie Walker Green Label is a hidden gem with vibrant secrets to reveal. And with malts from the four corners of Scotland, aged for at least 15 years, it captures the distinct flavors of each landscape in perfect balance. A whisky that’s in harmony with nature.",
        button: "more about green label",
      },
    ],
  },
  {
    id: 5,
    headline: "blue label",
    color: "#0f63af",
    whisky: [
      {
        id: 0,
        image: blue,
        name: "JOHNNIE WALKER BLUE LABEL",
        info: "Where velvety smooth flavors blossom on the tongue. Johnnie Walker Blue Label comes from hand-selecting rare Scotch Whiskies with a remarkable depth of flavor. Only one in 10,000 casks make the cut. Best served neat, along with an ice-cold water to enhance its powerful character.",
        button: "more about blue label",
      },
    ],
  },
];

export default labels;
