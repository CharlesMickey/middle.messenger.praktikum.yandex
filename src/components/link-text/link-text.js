import Handlebars from "handlebars";
import linkText from "./link-text.hbs";
import "./link-text.css";

Handlebars.registerPartial("linkText", linkText);

export default ({ hrefLink, nameLink }) => {
  return linkText({ hrefLink, nameLink });
};
