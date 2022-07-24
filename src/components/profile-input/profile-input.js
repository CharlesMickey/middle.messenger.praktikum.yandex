import Handlebars from "handlebars";
import profileInput from "./profile-input.hbs";
import "./profile-input.css";

Handlebars.registerPartial("profileInput", profileInput);

export default ({ inputName, placeholder, inputType }) => {
  return profileInput({ inputName, placeholder, inputType });
};
