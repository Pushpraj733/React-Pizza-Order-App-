import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block text-sm rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2  disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-stone-400 ';

  const styles = {
    primary: base + 'px-4 py-4 md:px-6 md:py-4',
    small: base + 'py-2 px-4 md:px-5 md:py-2.5 text-xs',
    round: base + 'py-2 px-3 md:px-3.5 md:py-2 text-sm sm:px-3.5',
    secondary:
      base +
      'bg-transparent text-sm border-2 border-stone-200 px-4 py-2.5 md:px-6 md:py-3.5',
  };

  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button className={styles[type]} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}
