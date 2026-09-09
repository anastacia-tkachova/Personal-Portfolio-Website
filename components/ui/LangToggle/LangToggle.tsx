'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import clsx from 'clsx';
import type { Language } from '@/types/project';
import css from './LangToggle.module.css';

interface LangToggleProps {
  currentLang: Language;
}

export function LangToggle({ currentLang }: LangToggleProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const changeLanguage = (newLang: Language) => {
    if (newLang === currentLang) return;

    Cookies.set('NEXT_LOCALE', newLang, {
      expires: 365,
      path: '/',
      sameSite: 'lax',
    });

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <div className={css.container}>
      <button
        type="button"
        disabled={isPending}
        className={clsx(css.langBtn, { [css.active]: currentLang === 'ua' })}
        onClick={() => changeLanguage('ua')}
      >
        UA
      </button>
      <span className={css.divider}>/</span>
      <button
        type="button"
        disabled={isPending}
        className={clsx(css.langBtn, { [css.active]: currentLang === 'en' })}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
    </div>
  );
}
