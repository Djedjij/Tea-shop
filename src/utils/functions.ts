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
