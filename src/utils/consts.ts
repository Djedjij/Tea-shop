interface MainPageCategories {
  name: string;
  img: string;
}

interface PopularTea {
  name: string;
  img: string;
  price: number;
}

interface InstagramImages {
  name: string;
  img: string;
}

export const instagramImages: InstagramImages[] = [
  {
    name: "photo1",
    img: "/images/inst-images/post1.jpg",
  },
  {
    name: "photo2",
    img: "/images/inst-images/post2.jpg",
  },
  {
    name: "photo3",
    img: "/images/inst-images/post3.jpg",
  },
  {
    name: "photo4",
    img: "/images/inst-images/post4.jpg",
  },
];

export const popularTea: PopularTea[] = [
  {
    name: "Генмайча",
    img: "/images/main-images/main-categories/green-tea.jpg",
    price: 9,
  },
  {
    name: "Сун Чжэнь",
    img: "/images/main-images/main-categories/white-tea.jpg",
    price: 11,
  },
  {
    name: "Би Ло Чун",
    img: "images/main-images/main-categories/ylyn-tea.jpg",
    price: 8,
  },
  {
    name: "Си Ху Лун Цзин",
    img: "images/main-images/main-categories/pyer-tea.jpg",
    price: 15,
  },
];

export const mainPageCategories: MainPageCategories[] = [
  {
    name: "Зеленый",
    img: "/images/main-images/main-categories/green-tea.jpg",
  },
  {
    name: "Белый",
    img: "images/main-images/main-categories/white-tea.jpg",
  },
  {
    name: "Улун",
    img: "images/main-images/main-categories/ylyn-tea.jpg",
  },
  {
    name: "Пуэр",
    img: "images/main-images/main-categories/pyer-tea.jpg",
  },
  {
    name: "Черный",
    img: "/images/main-images/main-categories/black-tea.jpg",
  },
];

export const menuNavbar = [
  {
    name: "Главная",
    link: "/",
  },
  {
    name: "О нас",
    link: "/about",
  },
  {
    name: "Ассортимент",
    link: "/products",
  },
  {
    name: "Блог",
    link: "/blog",
  },
  {
    name: "Контакты",
    link: "/contacts",
  },
];

export const historyAndAwards = [
  {
    id: 1,
    year: "1999",
    text: "Наша компания вводит на рынок новую линейку органически выращенных чаев, отмеченных сертификатом Fair Trade. Это позволяет компании получить признание за ее несомненный вклад в этическое потребительское движение.",
  },
  {
    id: 2,
    year: "2004",
    text: "Наша компания полностью переходит на использование упаковки, которая 100% биоразлагаема. Это приводит к значительному снижению экологического воздействия и позитивным отзывам от потребителей.",
  },
  {
    id: 3,
    year: "2009",
    text: "Мы запускаем новые технологии для улучшения условий труда на плантациях чая, включая обучение и поддержку местных фермеров. Это приводит к увеличению доходов и улучшению качества жизни местных сообществ.",
  },
  {
    id: 4,
    year: "2016",
    text: "Наша компания становится первой, кто полностью переходит на упаковку без пластика. Это признано отличием в индустрии и помогает снизить количество пластиковых отходов в окружающей среде.",
  },
  {
    id: 5,
    year: "2023",
    text: "Наша компания становится лидером среди производителей чая по устойчивости и социальной ответственности. Ее продукция пользуется высоким спросом, оставаясь органической, этически выращенной, с упаковкой без пластика и с острым фокусом на коммуникации своих достижений покупателям.",
  },
];
