export const CONSTANTS = {
  TITLE_TEXT_LINK: "Перейти к чатам",
  TITLE_404: "Кажется такой страницы не существует ;(",
  TITLE_500: "Произошла ошибка на сервере",
  NO_REGISTERED: "Ещё не зарегистрированы?",
  LOG_IN: "Войти",
};

export const ROUTES = {
  MAIN: "/",
  PROFILE: "/profile",
  500: "/500",
  404: "/404",
  LOGIN: "/login",
  REGISTRATION: "/registration",
};

export const DATA_FOR_PAGE = {
  INPUTS_PROFILE: [
    { inputName: "email", placeholder: "Почта", inputType: "email" },
    { inputName: "login", placeholder: "Логин", inputType: "text" },
    { inputName: "first_name", placeholder: "Имя", inputType: "text" },
    { inputName: "second_name", placeholder: "Фамилия", inputType: "text" },
    { inputName: "nickname", placeholder: "Ник", inputType: "text" },
    { inputName: "phone", placeholder: "Телефон", inputType: "tel" },
  ],

  INPUTS_LOGIN: [
    { inputName: "login", placeholder: "Логин", inputType: "text" },
    { inputName: "password", placeholder: "Пароль", inputType: "password" },
  ],

  INPUTS_REGISTRATION: [
    { inputName: "email", placeholder: "Почта", inputType: "email" },
    { inputName: "login", placeholder: "Логин", inputType: "text" },
    { inputName: "first_name", placeholder: "Имя", inputType: "text" },
    { inputName: "second_name", placeholder: "Фамилия", inputType: "text" },
    { inputName: "phone", placeholder: "Телефон", inputType: "tel" },
    { inputName: "password", placeholder: "Пароль", inputType: "password" },
    {
      inputName: "password",
      placeholder: "Пароль (еще раз)",
      inputType: "password",
    },
  ],
};
