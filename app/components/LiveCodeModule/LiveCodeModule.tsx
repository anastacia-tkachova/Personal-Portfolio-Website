'use client';

import { useRef, useState } from 'react';
import css from './LiveCodeModule.module.css';
import toast from 'react-hot-toast';
import { Dictionary } from '@/lib/i18n/getDictionary';

export interface LiveCodeModuleProps {
  dict: Dictionary;
}

const LiveCodeModule = ({ dict }: LiveCodeModuleProps) => {
  const [userName, setUserName] = useState<string>('Guest');
  const [animationKey, setAnimationKey] = useState<number>(0);
  const formRef = useRef<HTMLFormElement>(null);

  const applyName = (newName: string) => {
    setUserName(newName);
    setAnimationKey(prev => prev + 1);
  };

  const handleSubmit = (formData: FormData) => {
    const name = formData.get('query') as string;
    if (name.trim()) {
      applyName(name.trim());
      formRef.current?.reset();
    } else {
      toast.error(dict.liveCodeModule.errorMsg);
    }
  };

  return (
    <div className={css.moduleContainer}>
      <div className={css.moduleTerminal}>
        <div key={animationKey} className={css.codeBlock}>
          <p className={`${css.codeLine} ${css.line1}`}>
            function greet() &lbrace;
          </p>
          <p className={`${css.codeLine} ${css.line2}`}>
            const visitor = &quot;{userName}&quot;;
          </p>
          <p className={`${css.codeLine} ${css.line3}`}>
            return `{dict.liveCodeModule.greetText},
          </p>
          <p className={`${css.codeLine} ${css.line4}`}>
            $&lbrace;visitor&rbrace;!`;{' '}
          </p>
          <p className={`${css.codeLine} ${css.line5}`}>&rbrace;</p>
          <p className={`${css.codeLine} ${css.line6}`}>greet();</p>

          <div className={css.typingContainer}>
            <p className={css.typingText}>
              {dict.liveCodeModule.greetText}, {userName}!
            </p>
          </div>
        </div>

        <form className={css.moduleTerminalForm} action={handleSubmit}>
          <input
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder={dict.liveCodeModule.placeholder}
            autoFocus
          />

          <div className={css.moduleButtons}>
            <button type="submit">{dict.liveCodeModule.btn1}</button>
            <button
              type="button"
              onClick={() => applyName(dict.liveCodeModule.btn2)}
            >
              {dict.liveCodeModule.btn2}
            </button>
            <button
              type="button"
              onClick={() => applyName(dict.liveCodeModule.btn3)}
            >
              {dict.liveCodeModule.btn3}
            </button>
            <button
              type="button"
              onClick={() => applyName(dict.liveCodeModule.btn4)}
            >
              {dict.liveCodeModule.btn4}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LiveCodeModule;
