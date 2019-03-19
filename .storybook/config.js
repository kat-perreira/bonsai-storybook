import { configure } from "@storybook/react";
import "../src/index.css";


// To get the config to notice our stories.js files
const req = require.context("../src", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}




configure(loadStories, module);
