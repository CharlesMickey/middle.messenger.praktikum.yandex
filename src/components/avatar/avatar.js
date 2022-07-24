import Handlebars from "handlebars";
import avatar from "./avatar.hbs";
import * as img from "../../../static/images/svg/avatar.svg"
import "./avatar.css";

Handlebars.registerPartial("avatar", avatar);

export const avatar = ( imgAvatar = img ) => {
  return avatar( {imgAvatar} );
};
