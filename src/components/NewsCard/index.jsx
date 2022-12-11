import React from 'react';

import './style.scss';

export default function NewsCard({ src, title, subtitle }) {
  return (
    <div className='news-card'>
      <img src={src} alt='Картинка' />
      <div className='news-card__content'>
        <div className='news-card__title'>{title}</div>
        <div className='news-card__subtitle'>{subtitle}</div>
      </div>
    </div>
  );
}
