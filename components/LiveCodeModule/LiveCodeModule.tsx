import { useState } from 'react';
import css from './LiveCodeModule.module.css';
import toast from 'react-hot-toast';
import { Dictionary } from '@/lib/i18n/getDictionary';

const LiveCodeModule = (dict: Dictionary) => {
  const [userName, setUserName] = useState<string>('Guest');
  const [animationKey, setAnimationKey] = useState<number>(0);

  const applyName = (newName: string) => {
    setUserName(newName);
    setAnimationKey(prev => prev + 1);
  };

  const handleSubmit = (formData: FormData) => {
    const name = formData.get('query') as string;
    if (name.trim()) {
      applyName(name.trim());
    } else {
      toast.error('Please enter your name.');
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
            return `Welcome to my portfolio,
          </p>
          <p className={`${css.codeLine} ${css.line4}`}>
            $&lbrace;visitor&rbrace;!`;{' '}
          </p>
          <p className={`${css.codeLine} ${css.line5}`}>&rbrace;</p>
          <p className={`${css.codeLine} ${css.line6}`}>greet();</p>

          <div className={css.typingContainer}>
            <p className={css.typingText}>
              Welcome to my portfolio, {userName}!
            </p>
          </div>
        </div>

        <form className={css.moduleTerminalForm} action={handleSubmit}>
          <input
            className={css.input}
            type="text"
            name="query"
            autoComplete="off"
            placeholder="> Enter your name..."
            autoFocus
          />

          <div className={css.moduleButtons}>
            <button type="submit">Try!</button>
            <button type="button" onClick={() => applyName('Recruiter')}>
              Recruiter
            </button>
            <button type="button" onClick={() => applyName('Client')}>
              Client
            </button>
            <button type="button" onClick={() => applyName('Friend')}>
              Friend
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LiveCodeModule;
