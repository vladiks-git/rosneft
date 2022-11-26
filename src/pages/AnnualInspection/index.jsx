import { CardContent } from '../../ui-kit';
import React from 'react';

import warning from './warning.png';
import recResult from './result.png';

import './style.scss';

const data2021 = [
  {
    doctor: 'Терапевт',
    result: 'Не имеет',
  },
  {
    doctor: 'Психиатр',
    result: 'Не имеет',
  },
  {
    doctor: 'Нарколог',
    result: 'Не имеет',
  },
  {
    doctor: 'Невролог',
    result: 'Не имеет',
  },
  {
    doctor: 'Офтальмолог',
    result: 'Не имеет',
  },
  {
    doctor: 'Хирург',
    result: 'Не имеет',
  },
  {
    doctor: 'Онколог',
    result: 'Не имеет',
  },
  {
    doctor: 'Уроолог',
    result: 'Не имеет',
  },
  {
    doctor: 'Стоматолог',
    result: 'Не имеет',
  },
  {
    doctor: 'Эндокринолог',
    result: 'Не имеет',
  },
  {
    doctor: 'Инфекционист',
    result: 'Не имеет',
  },
  {
    doctor: 'Окулист',
    result: 'Имеет',
  },
  {
    doctor: 'Фтизиатр',
    result: 'Не имеет',
  },
];

const data2020 = [
  {
    doctor: 'Терапевт',
    result: 'Не имеет',
  },
  {
    doctor: 'Психиатр',
    result: 'Не имеет',
  },
  {
    doctor: 'Нарколог',
    result: 'Не имеет',
  },
  {
    doctor: 'Невролог',
    result: 'Иимеет',
  },
  {
    doctor: 'Офтальмолог',
    result: 'Не имеет',
  },
  {
    doctor: 'Хирург',
    result: 'Не имеет',
  },
  {
    doctor: 'Онколог',
    result: 'Не имеет',
  },
  {
    doctor: 'Уроолог',
    result: 'Не имеет',
  },
  {
    doctor: 'Стоматолог',
    result: 'Не имеет',
  },
  {
    doctor: 'Эндокринолог',
    result: 'Не имеет',
  },
  {
    doctor: 'Инфекционист',
    result: 'Не имеет',
  },
  {
    doctor: 'Фтизиатр',
    result: 'Не имеет',
  },
];

function AnnualInspectionPage() {
  return (
    <div className='annualInspection__content'>
      <CardContent>
        <h4>{'Заключения медицинского осмотра. \n 2021 год'}</h4>
        {data2021.map((item) => (
          <div className='annualInspection__item'>
            <div className='annualInspection__doctor'>{item.doctor}</div>
            <div
              className={`annualInspection__result ${
                item.result === 'Имеет' ? 'annualInspection__attension' : ''
              }`}
            >
              {item.result === 'Имеет' && (
                <img className='annualInspection__warning' src={warning} />
              )}
              {item.result}
            </div>
          </div>
        ))}
        <img
          className='annualInspection__recomendation-img'
          src={recResult}
          alt=''
        />
        <div className='annualInspection__recomendation'>
          Рекомендации по результатам ПМО (направление в специализированное или
          пропаталогическое медицинское учреждение; использование СИЗ, или др.):
          <ul>
            <li>Ограничения по работе в сиз.</li>
            <li>Ограничения по работе на высоте.</li>
          </ul>
        </div>
        <div className='annualInspection__main-doctor'>
          Предсетадель врачебной комиссии: <p>Лапенков И.О.</p>
        </div>
      </CardContent>
      <CardContent>
        <h4>{'Заключения медицинского осмотра. \n 2020 год'}</h4>
        {data2020.map((item) => (
          <div className='annualInspection__item'>
            <div className='annualInspection__doctor'>{item.doctor}</div>
            <div
              className={`annualInspection__result ${
                item.result === 'Имеет' ? 'annualInspection__attension' : ''
              }`}
            >
              {item.result === 'Имеет' && (
                <img className='annualInspection__warning' src={warning} />
              )}
              {item.result}
            </div>
          </div>
        ))}
        <img
          className='annualInspection__recomendation-img'
          src={recResult}
          alt=''
        />
        <div className='annualInspection__recomendation'>
          Рекомендации по результатам ПМО (направление в специализированное или
          пропаталогическое медицинское учреждение; использование СИЗ, или др.):
          <ul>
            <li>Болезни не выявлены</li>
          </ul>
        </div>
        <div className='annualInspection__main-doctor'>
          Предсетадель врачебной комиссии: <p>Лапенков И.О.</p>
        </div>
      </CardContent>
    </div>
  );
}

export default AnnualInspectionPage;
