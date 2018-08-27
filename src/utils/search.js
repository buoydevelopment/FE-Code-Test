import Fuse from "fuse.js";

const options = {
  shouldSort: true,
  threshold: 0.6,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    "strDrink",
  ]
};

export function getFuseSearch(list) {
  return new Fuse(list, options);
}