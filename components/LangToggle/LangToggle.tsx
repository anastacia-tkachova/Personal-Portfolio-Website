'use client';

import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export function LangToggle() {
  const router = useRouter();

  const changeLanguage = (newLang: 'en' | 'ua') => {
    Cookies.set('NEXT_LOCALE', newLang, { expires: 365 });

    router.refresh();
  };

  return (
    <div>
      <button onClick={() => changeLanguage('ua')}>UA</button>
      <button onClick={() => changeLanguage('en')}>EN</button>
    </div>
  );
}
