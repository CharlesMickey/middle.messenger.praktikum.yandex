import Handlebars from "handlebars";
import chat from "./chat.hbs";
import "./chat.css";

Handlebars.registerPartial("chat", chat);

export const chat = () => {
  return chat();
};
