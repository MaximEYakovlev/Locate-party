import React from 'react';

import { Text } from '../../components/Text/Text';
import { Title } from '../../components/Title/Title';

import styles from './styles.module.css';
import { GameBox } from './GameBox/GameBox'
// import { Video } from './Video/Video';
// import video from './Video/videofiles/VideoDragon.mp4';


export const MainPage = () => (
  <div>
    {/* <Video source={video} /> */}
    <h3>Топ игр недели </h3>
    <GameBox />
    <Title as="h2">О нас: Сайт для любителей настольных игр и все что с этим  связанно.</Title>
    <Text>Здесь ты сможешь найти людей, котрые любят настольные игры, так же как и ты!<br />
      У нас самое большое русскоговорящее комьюнити</Text>
  <div className={styles.gamepositions}>Огромное количество различных игр </div> 
  <div></div>
      <div className={styles["registations-main"]}> Регитсрация / Авторизация</div>
  </div>
);
