import Handlebars from "handlebars";
import profilePage from "./profile.hbs";
import profileInput from "../../components/profile-input/profile-input";
import * as img from "../../../static/images/svg/edit-avatar.svg";
import "./profile.css";

Handlebars.registerPartial("profilePage", profilePage);

export const profile = ({ avatar, editAvatar = img, inputsProfile }) => {
  return profilePage({ avatar, editAvatar, inputsProfile });
};
