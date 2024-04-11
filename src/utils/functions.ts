export const createMonthDate = () => {
  const months = [
    "Янв",
    "Фев",
    "Мар",
    "Апр",
    "Май",
    "Июн",
    "Июл",
    "Авг",
    "Сен",
    "Окт",
    "Ноя",
    "Дек",
  ];

  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = months[currentDate.getMonth()];

  return `${day} ${month}`;
};

export const parseJSON = (json: string) => {
  const string = localStorage.getItem(json);
  if (string !== null) {
    return JSON.parse(string);
  }
};
