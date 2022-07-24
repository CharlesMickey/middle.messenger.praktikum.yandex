import Handlebars from "handlebars";
import button from "./button.hbs";
import "./button.css";

Handlebars.registerPartial("button", button);

export default ({buttonType, name}) => {
  return button({ buttonType, name });
};
