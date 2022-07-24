import { error } from "./pages/error";
import { link } from "./components/link-text";
import { CONSTANTS, DATA_FOR_PAGE, ROUTES } from "../utils/constants";
import { login } from "./pages/login";
import { buttonMain } from "./components/button";
import { messengerTitle } from "./components/messenger-name";
import layout from "./layout/layout";
import { profile } from "./pages/profile";
import { avatarImg } from "./components/avatar";
import { chatMain } from "./pages/chat";

const location = window.location.pathname;

let res;

switch (location) {
  case ROUTES.MAIN:
    res = chatMain();
    break;
  case ROUTES.PROFILE:
    res = profile({
      avatar: avatarImg(),
      inputsProfile: DATA_FOR_PAGE.INPUTS_PROFILE,
    });
    break;
  case ROUTES.LOGIN:
    res = login({
      messengerName: messengerTitle(),
      loginTitle: "Вход",
      inputs: DATA_FOR_PAGE.INPUTS_LOGIN,
      button: buttonMain({ buttonType: "submit", name: "Вход" }),
      linkText: link({
        hrefLink: ROUTES.REGISTRATION,
        nameLink: CONSTANTS.NO_REGISTERED,
      }),
    });
    break;
  case ROUTES.REGISTRATION:
    res = login({
      messengerName: messengerTitle(),
      loginTitle: "Регистрация",
      inputs: DATA_FOR_PAGE.INPUTS_REGISTRATION,
      button: buttonMain({ buttonType: "submit", name: "Зарегистрироваться" }),
      linkText: link({
        hrefLink: ROUTES.LOGIN,
        nameLink: CONSTANTS.LOG_IN,
      }),
    });
    break;
  case ROUTES[500]:
    res = error({
      errorCode: "500",
      errorSubtitle: CONSTANTS.TITLE_500,
      linkText: link({
        hrefLink: "/",
        nameLink: CONSTANTS.TITLE_TEXT_LINK,
      }),
    });
    break;

  default:
    res = error({
      errorCode: "404",
      errorSubtitle: CONSTANTS.TITLE_404,
      linkText: link({
        hrefLink: "/",
        nameLink: CONSTANTS.TITLE_TEXT_LINK,
      }),
    });
}

document.getElementById("root").innerHTML = layout({ content: res });
