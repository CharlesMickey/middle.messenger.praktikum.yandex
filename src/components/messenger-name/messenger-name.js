import Handlebars from "handlebars";
import messengerName from "./messenger-name.hbs";
import "./messenger-name.css";

Handlebars.registerPartial("messengerName", messengerName);

export const messengerTitle = () => {
  return messengerName();
};
