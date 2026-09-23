import { RawProject } from '@/types/project';

const projects: RawProject[] = [
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
      en: {
        summary: `A comprehensive, production-grade web application built with Next.js for dynamic, multi-user note management. This project demonstrates advanced frontend architecture by seamlessly blending Next.js capabilities with powerful server-state synchronization and a robust client-side authentication system.`,
        featuresTitle: 'Key Features & Architecture:',
        features: [{
          title: '- Next.js Architecture:',
          description: ' Utilized Next.js for efficient routing, optimized rendering, and structural scalability.',
          },
        {
          title: '- Secure Authentication & Middleware Protection:',
          description: ' Implemented user registration, secure login, and token-based session persistence. Built route guards to protect sensitive user dashboards and isolate personal note data.',
          },
        {
          title: '- Advanced Server-State Management:',
          description: ' Leveraged TanStack Query (React Query) alongside Next.js to handle asynchronous data fetching, replacing complex global state with efficient, declarative caching.',
          },
        {
          title: '- Smart Pagination & Prefetching:',
          description: ' Implemented seamless page-by-page data fetching paired with background prefetching, ensuring instant transitions and a layout-blocking-free user experience.',
          },
        {
          title: '- Optimistic UI Updates:',
          description: ' Engineered instant-response flows for CRUD actions (creating, updating, and deleting notes) where UI changes render immediately before server confirmation, complete with automatic error-rollback logic.',
          },
        {
          title: '- Modern & Responsive UI:',
          description: ' Developed a highly adaptive, accessible layout utilizing modern CSS practices to ensure a flawless experience across mobile and desktop devices.',
          },
    ]
      }
       ,
      ua: {
        summary: '',
        featuresTitle: '',
        features: [
          {
            title: '',
            description: ''
          }
        ]
      }
    },
    tags: ['Next.js', 'React', 'TanStack Query', 'JavaScript', 'Tailwind CSS', 'Protected Routing'],
    image: '/img/notehub-og-meta.jpg',
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
      en: {
        summary: 'Led a small cross-functional team consisting of 2 developers and 1 designer to build a high-quality, responsive landing page for a custom client order. Successfully managed the development lifecycle from initial design handoff to final deployment.',
        featuresTitle: 'Key Achievements & Responsibilities:',
        features: [
          {
            title: 'Key Achievements & Responsibilities:',
            description: ' Distributed development tasks, tracked progress, managed timelines, and facilitated smooth communication between design and engineering.'
          },
          {
            title: '- Quality Assurance:',
            description: ' Conducted regular code reviews to ensure semantic layout, responsiveness, and consistent coding standards across the repository.'
          },
          {
            title: '- Design-to-Code Alignment:',
            description: ' Collaborated with the designer to resolve technical constraints early and ensure a pixel-perfect implementation of the original UI/UX layout.'
          },
          {
            title: '- Development:',
            description: ' mobile-first Header, FAQ sections.'
          },
        ]
      },
      ua: {
        summary: '',
        featuresTitle: '',
        features: [
          {
            title: '',
            description: ''
          }
        ]
      }
    },
    tags: ['HTML5', 'JavaScript', 'CSS', 'Team Leadership'],
    image: '/img/match-delivery.png',
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
      en: {
        summary: 'A dynamic web application focused on interactive user experience and complex data rendering. This project involved deeper integration of JavaScript logic and advanced CSS techniques to create a seamless, high-performance interface.',
        featuresTitle: 'Key contributions & features:',
        features: [
          {
            title: '- Integrated REST API',
            description: ' to dynamically fetch and display data, ensuring smooth content updates without page reloads.'
          },
          {
            title: '- Developed complex UI components ',
            description: 'including modals, sliders, and interactive forms with built-in validation.'
          },
          {
            title: '- Applied advanced SASS features',
            description: '(mixins, variables) and maintained a modular BEM structure for scalable styling.'
          },
          {
            title: '- Collaborated effectively in a team',
            description: ' using GitFlow, resolving merge conflicts and participating in peer code reviews.'
          },
          {
            title: '- Ensured high accessibility standards',
            description: ' and cross-device responsiveness.'
          },
        ]
      },
      ua: {
        summary: '',
        featuresTitle: '',
        features: [
          {
            title: '',
            description: ''
          }
        ]
      }
    },
    tags: ['HTML5', 'JavaScript', 'CSS', 'REST APIs', 'Git'],
    image: '/img/mebleria.webp',
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
      en: {
        summary: '',
        featuresTitle: '',
        features: [
          {
            title: '',
            description: ''
          }
        ]
      },
      ua: {
        summary: '',
        featuresTitle: '',
        features: [
          {
            title: '',
            description: ''
          }
        ]
      },
    },
    tags: ['HTML', 'JavaScript', 'CSS'],
    image: '/img/EcoTote.png',
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
      en: {
        summary: 'A dynamic image search application that interacts with the Pixabay API. The project focuses on handling asynchronous requests, managing UI states during data loading, and implementing a smooth user experience through efficient pagination.',
        featuresTitle: 'Key features & implementations:',
        features: [
          {
            title: '- Asynchronous Data Fetching:',
            description: ' Built a robust logic using Axios and Async/Await to retrieve high-quality images based on user queries.'
          },
          {
            title: '- Pagination Logic:',
            description: ' Implemented a "Load More" functionality, managing page increments and handling the end of search results gracefully.'
          },
          {
            title: '- Dynamic UI Rendering:',
            description: ' Used Handlebars templates (or template literals) for efficient DOM updates and integrated SimpleLightbox for an immersive gallery preview.'
          },
          {
            title: '- UX Enhancements:',
            description: ' Added a smooth scroll feature and loading indicators (Notiflix/IZiToast) to provide real-time feedback during network requests.'
          },
          {
            title: '- Error Handling:',
            description: ' Developed comprehensive error catch blocks to notify users of empty results or connection issues.'
          },
        ]
      },
      ua: {
        summary: '',
        featuresTitle: '',
        features: [
          {
            title: '',
            description: ''
          }
        ]
      }
    },
    tags: ['JavaScript', 'REST APIs', 'CSS', 'Parcel'],
    image: '/img/image-search.png',
    demo: '',
    demoUrl: 'https://vitaliypolets.github.io/webcrafters-project-02/',
    githubUrl: 'https://github.com/anastacia-tkachova/Image-Search',
    featured: false,
  },
  // ImageSearch

  {
    id: 'FilmSearch',
    title: {
      en: 'Film Search - Movie Database App',
      ua: 'FilmSearch - Сервіс пошуку фільмів на React Query',
    },
    description: {
      en: 'A front-end application built to demonstrate advanced client-server data synchronization, caching strategies, and asynchronous state management in the React ecosystem. The primary focus of the project is to replace heavy, boilerplate-driven global state.',
      ua: 'Фронтенд-застосунок, створений для демонстрації просунутих стратегій кешування, синхронізації даних між клієнтом і сервером, а також асинхронного управління станом у екосистемі React. Головна мета проєкту — позбутися важкого та перевантаженого шаблонами (boilerplate) глобального стану.',
    },
    article: {
      en: {
        summary: 'A front-end application built to demonstrate advanced client-server data synchronization, caching strategies, and asynchronous state management in the React ecosystem. The primary focus of the project is to replace heavy, boilerplate-driven global state (like Redux for API data) with a clean, declarative approach using TanStack Query (React Query).',
        featuresTitle: 'Key Features & Architecture:',
        features: [
          {
            title: '- Advanced Cache Management:',
            description: ' Configured optimal staleTime and gcTime settings to minimize redundant network requests, reduce server load, and deliver an instant UI response.'
          },
          {
            title: '- Smart Pagination & Filtering:',
            description: ' Implemented seamless page-by-page data fetching paired with background prefetching for the next pages, eliminating loading spinners and providing an uninterrupted UX.'
          },
          {
            title: '- Data Mutations & Synchronization:',
            description: ' Handled creating, updating, and deleting records using React Query mutations with automated cache invalidation (invalidateQueries) to keep the UI perfectly in sync with the server.'
          },
          {
            title: '- Optimistic Updates:',
            description: ' Built an instant UI response flow where user actions reflect immediately on the screen before the server response completes, including robust rollback functionality in case of network failures.'
          },
          {
            title: '- Graceful Error & Loading Handling:',
            description: ' Designed dedicated, user-friendly loading and error states to ensure a highly stable and resilient interface.'
          },
        ]
      },
      ua: {
        summary: '',
        featuresTitle: '',
        features: [
          {
            title: '',
            description: ''
          }
        ]
      },
    },
    tags: ['React', 'React Query', 'JavaScript', 'Tailwind CSS'],
    image: '/img/film-search.png',
    demo: '',
    demoUrl: 'https://04-react-query-rosy-psi.vercel.app/',
    githubUrl: 'https://github.com/anastacia-tkachova/React-Query-Data-Management-App',
    featured: false,
  },
  // FilmSearch
];

export default projects;