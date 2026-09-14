'use client';

import { useState } from 'react';

function getCookie(name: string): string | null {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

const translations = {
  uk: {
    title: 'Сталася помилка',
    btn: 'Спробувати ще раз',
  },
  en: {
    title: 'Something went wrong',
    btn: 'Try again',
  },
};

export default function GlobalError({ reset }: { reset: () => void }) {
  const [lang] = useState<'uk' | 'en'>(() => {
    const savedLang = getCookie('NEXT_LOCALE');
    return savedLang === 'en' ? 'en' : 'uk';
  });

  const t = translations[lang];

  return (
    <main>
      <h1>{t.title}</h1>
      <button type="button" onClick={reset}>
        {t.btn}
      </button>
    </main>
  );
}
