import Handlebars from "handlebars";
import layout from "./layout.hbs";
import "./layout.css";

Handlebars.registerPartial("layout", layout);

export default ({content}) => {
  return layout({content});
};
