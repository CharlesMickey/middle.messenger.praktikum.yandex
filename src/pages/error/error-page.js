import Handlebars from "handlebars";
import errorPage from "./error-page.hbs";
import "./error-page.css";

Handlebars.registerPartial("errorPage", errorPage);

export const error = ({ errorCode, errorSubtitle, linkText }) => {
  return errorPage({ errorCode, errorSubtitle, linkText });
};


