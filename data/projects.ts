import Project from '@/types/project';

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
    article: {
      en: '',
      ua: ''
    },
    tags: ['Next.js', 'React', 'TanStack Query', 'JavaScript', 'Tailwind CSS', 'Protected Routing'],
    image: './img/notehub-og-meta.jpg',
    demo: '',
    demoUrl: 'https://note-hub-indol-sigma-77.vercel.app/',
    githubUrl: 'https://github.com/anastacia-tkachova/NoteHub',
    featured: true,
  }, 
  // NoteHub

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
    article: {
      en: '',
      ua: ''
    },
    tags: ['HTML5', 'JavaScript', 'CSS', 'Team Leadership'],
    image: './img/match-delivery.png',
    demo: '',
    demoUrl: 'https://anastacia-tkachova.github.io/STP-13021/',
    githubUrl: 'https://github.com/anastacia-tkachova/STP-13021',
    featured: false,
  },
  // MatchDelivery

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
    article: {
      en: '',
      ua: ''
    },
    tags: ['HTML5', 'JavaScript', 'CSS', 'REST APIs', 'Git'],
    image: './img/mebleria.webp',
    demo: '',
    demoUrl: 'https://vitaliypolets.github.io/webcrafters-project-02/',
    githubUrl: 'https://github.com/anastacia-tkachova/WebCrafters-Meblieriya',
    featured: false,
  },
  // Meblieriya

  {
    id: 'EcoTotes',
    title: {
      en: 'WebCrafters - EcoTotes (Team Project 01)',
      ua: 'WebCrafters - EcoTotes (Командний проект 01)',
    },
    description: {
      en: 'A responsive web application built as part of a collaborative team project. The goal was to develop a modern, user-friendly landing page with complex layouts and interactive elements.',
      ua: 'Адаптивний вебзастосунок, розроблений у межах командного проєкту. Метою була створення сучасного, зручного для користувача лендингу зі складною версткою та інтерактивними елементами.',
    },
    article: {
      en: '',
      ua: '',
    },
    tags: ['HTML', 'JavaScript', 'CSS'],
    image: './img/EcoTote.png',
    demo: '',
    demoUrl: 'https://vitaliypolets.github.io/webcrafters-project-01/',
    githubUrl: 'https://github.com/anastacia-tkachova/WebCrafters-EcoTotes',
    featured: false,
  },
  // EcoTotes

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
    article: {
      en: '',
      ua: ''
    },
    tags: ['JavaScript', 'REST APIs', 'CSS', 'Parcel'],
    image: './img/image-search.png',
    demo: '',
    demoUrl: 'https://vitaliypolets.github.io/webcrafters-project-02/',
    githubUrl: 'https://github.com/anastacia-tkachova/Image-Search',
    featured: false,
  },
  // ImageSearch

  {
    id: 'FilmSearch',
    title: {
      en: 'React Query Film Search App',
      ua: 'FilmSearch - Сервіс пошуку фільмів на React Query',
    },
    description: {
      en: 'A front-end application built to demonstrate advanced client-server data synchronization, caching strategies, and asynchronous state management in the React ecosystem. The primary focus of the project is to replace heavy, boilerplate-driven global state.',
      ua: 'Фронтенд-застосунок, створений для демонстрації просунутих стратегій кешування, синхронізації даних між клієнтом і сервером, а також асинхронного управління станом у екосистемі React. Головна мета проєкту — позбутися важкого та перевантаженого шаблонами (boilerplate) глобального стану.',
    },
    article: {
      en: '',
      ua: '',
    },
    tags: ['React', 'React Query', 'JavaScript', 'Tailwind CSS'],
    image: './img/film-search.png',
    demo: '',
    demoUrl: 'https://04-react-query-rosy-psi.vercel.app/',
    githubUrl: 'https://github.com/anastacia-tkachova/React-Query-Data-Management-App',
    featured: false,
  },
  // FilmSearch
];