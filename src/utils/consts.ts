interface MainPageCategories {
  name: string;
  img: string;
}

interface PopularTea {
  name: string;
  img: string;
  price: number;
  desc?: string;
}

interface InstagramImages {
  name: string;
  img: string;
}

export interface Iphones {
  icon?: string;
  text: string;
  link?: string;
}

export const phones: Iphones[] = [
  {
    icon: "/images/icons/iconPhoneWhite.png",
    text: "375-33-334-75-71",
  },
  { icon: "/images/icons/iconPhoneWhite.png", text: "375-44-774-75-20" },
  {
    icon: "/images/icons/icon-github.svg",
    text: "Djedj",
    link: "https://github.com/Djedjij",
  },
  {
    icon: "/images/icons/icon-github.svg",
    text: "EnoticSho",
    link: "https://github.com/EnoticSho",
  },
];
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
export const images = [
  "/images/inst-images/post1.jpg",
  "/images/inst-images/post2.jpg",
  "/images/inst-images/post2.jpg",
];
export const popularTea: PopularTea[] = [
  {
    name: "Генмайча",
    img: "/images/main-images/main-categories/green-tea.jpg",
    price: 9,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, laborum nostrum quos voluptate reiciendis quas architecto quasi itaque beatae,harum aliquam nulla quis facilis, excepturi nemo cupiditate quo quod unde.",
  },
  {
    name: "Сун Чжэнь",
    img: "/images/main-images/main-categories/white-tea.jpg",
    price: 11,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, laborum nostrum quos voluptate reiciendis quas architecto quasi itaque beatae,harum aliquam nulla quis facilis, excepturi nemo cupiditate quo quod unde.",
  },
  {
    name: "Би Ло Чун",
    img: "images/main-images/main-categories/ylyn-tea.jpg",
    price: 8,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, laborum nostrum quos voluptate reiciendis quas architecto quasi itaque beatae,harum aliquam nulla quis facilis, excepturi nemo cupiditate quo quod unde.",
  },
  {
    name: "Си Ху Лун Цзин",
    img: "images/main-images/main-categories/pyer-tea.jpg",
    price: 15,
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores, laborum nostrum quos voluptate reiciendis quas architecto quasi itaque beatae,harum aliquam nulla quis facilis, excepturi nemo cupiditate quo quod unde.",
  },
];

export const mainPageCategories: MainPageCategories[] = [
  {
    name: "Зеленый чай",
    img: "/images/main-images/main-categories/green-tea.jpg",
  },
  {
    name: "Белый чай",
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
    name: "Черный чай",
    img: "/images/main-images/main-categories/black-tea.jpg",
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

export const cities: string[] = [
  "Минск",
  "Могилев",
  "Брест",
  "Гродно",
  "Витебск",
  "Гомель",
  "Костюковичи",
  "Жодино",
  "Климовичи",
  "Круглое",
];
