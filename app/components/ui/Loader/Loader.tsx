import css from './Loader.module.css';

interface LoaderProps {
  label?: string;
}

export function Loader({ label = 'Loading...' }: LoaderProps) {
  return (
    <div className={css.loader} role="status" aria-live="polite">
      <span className={css.spinner} aria-hidden="true" />
      <span className={css.label}>{label}</span>
    </div>
  );
}
