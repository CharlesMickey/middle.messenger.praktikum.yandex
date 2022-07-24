import Handlebars from "handlebars";
import loginPage from "./login.hbs";
import loginInput from "../../components/login-input/login-input";
import "./login.css";

Handlebars.registerPartial("loginPage", loginPage);

export const login = ({ messengerName, loginTitle, inputs, button, linkText }) => {
  return loginPage({ messengerName, loginTitle, inputs, button, linkText });
};
