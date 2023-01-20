import React from 'react';
import { CardContent } from '../../ui-kit';

import './style.scss';

const DispensaryPage = () => {
  return (
    <div className="dispensary">
      <h3>Информация о профилактории</h3>
      <p className="dispensary__info">
        Санаторий-профилакторий "Дубки" структурное подразделение Акционерного
        общества "Новокуйбышевский нефтеперерабатывающий завод"
      </p>
      <div className="dispensary__galery">
        <img
          src="https://avatars.mds.yandex.net/get-altay/2815220/2a000001743a990401ac46f1454e82dd0871/XXXL"
          alt=""
        />
        <img
          src="https://avatars.mds.yandex.net/get-altay/2809325/2a000001743ca5b2522bc3361daad00543e0/XXXL"
          alt=""
        />
        <img
          src="https://avatars.mds.yandex.net/get-altay/2366463/2a000001743ca5addd9f10a952b8f8288598/XXXL"
          alt=""
        />
        <img
          src="https://avatars.mds.yandex.net/get-altay/1987173/2a000001743ca5b25ff7974027bc71621c17/XXXL"
          alt=""
        />
      </div>
      <h3 className="dispensary__graphics-title">График заездов</h3>
      <div className="dispensary__graphics-items">
        <CardContent>
          <h4>01.06.2023-15.06.2023 с квотами по цехам </h4>
          <p>Цех №24  –  6 человек.</p>
          <p>Цех №73  –  5 человек.</p>
          <p>Цех №3  –  7 человек.</p>
        </CardContent>
        <CardContent>
          <h4>01.06.2023-15.06.2023 с квотами по цехам </h4>
          <p>Цех №21  –  3 человек.</p>
          <p>Цех №43  –  2 человек.</p>
          <p>Цех №5  –  17 человек.</p>
        </CardContent>
        <CardContent>
          <h4>01.06.2023-15.06.2023 с квотами по цехам </h4>
          <p>Цех №244  –  6 человек.</p>
          <p>Цех №13  –  5 человек.</p>
          <p>Цех №18  –  7 человек.</p>
        </CardContent>
      </div>
    </div>
  );
};

export default DispensaryPage;
