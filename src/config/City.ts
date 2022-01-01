import axios from "axios";

export default axios.create({
  params: {
    q: "",
    maxRows: 10,
    username: "weknowit",
  },
});

// http://api.geonames.org/searchJSON?q=stockholm&maxRows=10&username=weknowit
