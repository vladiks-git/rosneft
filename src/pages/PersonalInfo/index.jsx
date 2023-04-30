import React from 'react';

import user from './user.png';

import { CardContent } from '../../ui-kit';

import './style.scss';

const data = [
  {
    label: 'Общество группы',
    value: `АО "НК НПЗ"`,
  },
  {
    label: 'Подразделение',
    value: `ЦЕХ № 24`,
  },
  {
    label: 'Должность',
    value: `технолог цеха`,
  },
  {
    label: 'Снилс',
    value: `xxx-xxx-xxxx`,
  },
  {
    label: 'ИНН',
    value: `xxx-xxx-xxxx`,
  },
  {
    label: 'Табельный номер',
    value: `1911467`,
  },
];

export default function PersonaInfoPage() {
  return (
    <div className="personal-info">
      <CardContent>
        <img className="personal-info__avatar" src={user} alt="Аватар" />
        <p className="personal-info__fio">Трифонов Павел Игоревич</p>
        <div className="personal-info__info info">
          {data.map((item) => (
            <div key={Math.random()} className="info-item">
              <p className="info-label">{item.label}</p>
              <p className="info-value">{item.value}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </div>
  );
}
