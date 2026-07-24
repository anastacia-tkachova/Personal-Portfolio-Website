export interface Project {
  id: string;
  title: {
    en: string;
    ua: string;
  };
  description: {
    en: string;
    ua: string;
  };
  tags: string[];
  image: string;
  demo: string;
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'NoteHub',
    title: {
      en: 'Full-Stack Note Management Ecosystem | NoteHub',
      ua: 'NoteHub — єдиний простір для зручного управління нотатками.',
    },
    description: {
      en: 'A comprehensive, production-grade web application built with Next.js for dynamic, multi-user note management. This project demonstrates advanced frontend architecture by seamlessly blending Next.js capabilities with powerful server-state synchronization and a robust client-side authentication system.',
      ua: 'Повнофункціональний вебзастосунок продакшн-рівня, створений на Next.js для динамічного багатокористувацького управління нотатками. Цей проєкт демонструє просунуту фронтенд-архітектуру, органічно поєднуючи можливості Next.js із потужною синхронізацією серверного стану та надійною системою клієнтської автентифікації.',
    },
    tags: ['React', 'Next.js', 'TanStack Query', 'JavaScript', 'Tailwind', 'Vercel'],
    image: './img/notehub-og-meta.jpg',
    demo: '',
    demoUrl: 'https://note-hub-indol-sigma-77.vercel.app/',
    githubUrl: 'https://github.com/anastacia-tkachova/NoteHub',
    featured: true,
  },

  {
    id: 'MatchDelivery',
    title: {
      en: 'Match Delivery - Puzzle game website',
      ua: 'Match Delivery — Вебсайт головоломки',
    },
    description: {
      en: 'Led a small cross-functional team consisting of 2 developers and 1 designer to build a high-quality, responsive landing page for a custom client order. Successfully managed the development lifecycle from initial design handoff to final deployment.',
      ua: 'Керувала невеликою кросфункціональною командою (2 розробники та 1 дизайнер) під час створення високоякісного адаптивного лендингу на замовлення клієнта. Успішно контролювала весь життєвий цикл розробки — від передачі початкового дизайну до фінального деплою.',
    },
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'Team Leadership'],
    image: './img/match-delivery.png',
    demo: '',
    demoUrl: 'https://anastacia-tkachova.github.io/STP-13021/',
    githubUrl: 'https://github.com/anastacia-tkachova/STP-13021',
    featured: false,
  },

  {
    id: 'Meblieriya',
    title: {
      en: 'WebCrafters - Meblieriya (Team Project)',
      ua: 'Меблерія (Командний проєкт)',
    },
    description: {
      en: 'A dynamic web application focused on interactive user experience and complex data rendering. This project involved deeper integration of JavaScript logic and advanced CSS techniques to create a seamless, high-performance interface.',
      ua: "Меблерія — це командний front-end проєкт меблевого магазину з адаптивним інтерфейсом, каталогом товарів, фільтрацією за категоріями, модальним вікном із деталями товару, формою замовлення зворотного зв'язку та секцією відгуків.",
    },
    tags: ['JavaScript', 'REST APIs', 'SASS', 'HTML5', 'Parcel', 'Git', 'BEM methodology',],
    image: './img/mebleria.webp',
    demo: '',
    demoUrl: 'https://vitaliypolets.github.io/webcrafters-project-02/',
    githubUrl: 'https://github.com/anastacia-tkachova/WebCrafters-Meblieriya',
    featured: false,
  },

  {
    id: 'ImageSearch',
    title: {
      en: 'Image Search & Pagination Engine',
      ua: 'Image Search — Сервіс пошуку зображень із пагінацією',
    },
    description: {
      en: 'A dynamic image search application that interacts with the Pixabay API. The project focuses on handling asynchronous requests, managing UI states during data loading, and implementing a smooth user experience through efficient pagination.',
      ua: "Динамічний застосунок для пошуку зображень, що взаємодіє з Pixabay API. Основна увага в проєкті приділена обробці асинхронних запитів, управлінню станами UI під час завантаження даних та створенню плавного користувацького досвіду завдяки ефективній пагінації.",
    },
    tags: ['JavaScript', 'REST APIs', 'SASS', 'SimpleLightbox', 'Parcel', 'Git'],
    image: './img/image-search.png',
    demo: '',
    demoUrl: 'https://vitaliypolets.github.io/webcrafters-project-02/',
    githubUrl: 'https://github.com/anastacia-tkachova/Image-Search',
    featured: false,
  }
];