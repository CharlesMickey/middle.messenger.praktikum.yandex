import Handlebars from "handlebars";
import loginInput from "./login-input.hbs";
import "./login-input.css";

Handlebars.registerPartial("loginInput", loginInput);

export default ({ inputName, placeholder, inputType }) => {
  return loginInput({ inputName, placeholder, inputType });
};
