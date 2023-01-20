import React from 'react';
import { CardContent } from '../../ui-kit';

import './style.scss';

const dates = [
  {
    workshop: 'Цех №24',
    date: '07.02.2023 - 14.02.2023',
  },
  {
    workshop: 'Цех №3',
    date: '14.02.2023 - 21.02.2023',
  },
  {
    workshop: 'Цех №73',
    date: '21.02.2023 - 28.02.2023',
  },
];

const GraphicPage = () => {
  return (
    <CardContent>
      <h4>График мед. осмотров</h4>
      {dates.map((date) => (
        <div className="graphic__item">
          <p className="graphic__workshop">{date.workshop}</p>
          <p className="graphic__date">{date.date}</p>
        </div>
      ))}
    </CardContent>
  );
};

export default GraphicPage;
