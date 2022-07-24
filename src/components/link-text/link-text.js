import Handlebars from "handlebars";
import linkText from "./link-text.hbs";
import "./link-text.css";

Handlebars.registerPartial("linkText", linkText);

export const link = ({ hrefLink, nameLink }) => {
  return linkText({ hrefLink, nameLink });
};
