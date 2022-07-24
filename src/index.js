import { errorPage } from "./pages/error/error-page";
import { linkText } from "./components/link-text/link-text";
import { CONSTANTS, DATA_FOR_PAGE, ROUTES } from "../utils/constants";
import { loginPage } from "./pages/login/login";
import { button } from "./components/button/button";
import { messengerName } from "./components/messenger-name/messenger-name";
import layout from "./layout/layout";
import { profilePage } from "./pages/profile/profile";
import { avatar } from "./components/avatar/avatar";
import { chat } from "./pages/chat/chat";

const location = window.location.pathname;

let res;

switch (location) {
  case ROUTES.MAIN:
    res = chat();
    break;
  case ROUTES.PROFILE:
    res = profilePage({
      avatar: avatar(),
      inputsProfile: DATA_FOR_PAGE.INPUTS_PROFILE,
    });
    break;
  case ROUTES.LOGIN:
    res = loginPage({
      messengerName: messengerName(),
      loginTitle: "Вход",
      inputs: DATA_FOR_PAGE.INPUTS_LOGIN,
      button: button({ buttonType: "submit", name: "Вход" }),
      linkText: linkText({
        hrefLink: ROUTES.REGISTRATION,
        nameLink: CONSTANTS.NO_REGISTERED,
      }),
    });
    break;
  case ROUTES.REGISTRATION:
    res = login({
      messengerName: messengerName(),
      loginTitle: "Регистрация",
      inputs: DATA_FOR_PAGE.INPUTS_REGISTRATION,
      button: button({ buttonType: "submit", name: "Зарегистрироваться" }),
      linkText: linkText({
        hrefLink: ROUTES.LOGIN,
        nameLink: CONSTANTS.LOG_IN,
      }),
    });
    break;
  case ROUTES[500]:
    res = errorPage({
      errorCode: "500",
      errorSubtitle: CONSTANTS.TITLE_500,
      linkText: linkText({
        hrefLink: "/",
        nameLink: CONSTANTS.TITLE_TEXT_LINK,
      }),
    });
    break;

  default:
    res = errorPage({
      errorCode: "404",
      errorSubtitle: CONSTANTS.TITLE_404,
      linkText: linkText({
        hrefLink: "/",
        nameLink: CONSTANTS.TITLE_TEXT_LINK,
      }),
    });
}

document.getElementById("root").innerHTML = layout({ content: res });
