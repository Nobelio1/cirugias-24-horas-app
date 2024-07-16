import {
  IonButton,
  IonText,
} from "@ionic/react";
import React from "react";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import IntroSplash1 from '../../images/intro/splash-1.jpg'
import 'swiper/css';
import './Intro.css'

interface ContainerProps {
  onFinish: () => void;
}

const SwiperButtonNext = ({ children }: any) => {
  const swiper = useSwiper();
  return <IonButton onClick={() => swiper.slideNext()}>{children}</IonButton>;
};


const Intro: React.FC<ContainerProps> = ({onFinish}) => {
  return (
    <Swiper >
      <SwiperSlide>
        <img src={IntroSplash1} alt="Intro 1" />
        <IonText>
          <h3>¡Hola! Bienvenido a Cirugías 24 horas</h3>
          <p>Una app donde podras reservar tus citas, gestionar documentos,
          chatear con los doctores y muchos más</p>
        </IonText>
        <SwiperButtonNext>Siguiente</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide>
        <img src={IntroSplash1} alt="Intro 2" />
        <IonText>
          <h3>Prueba nuestra IA especializada para resolver tus necesidades</h3>
          <p>Nuestra nueva IA entrenda para resolver tus dudas y registrate citas
          con los mejores dotores</p>
        </IonText>
        <SwiperButtonNext>Siguiente</SwiperButtonNext>
      </SwiperSlide>

      <SwiperSlide>
        <img src={IntroSplash1} alt="Intro 3" />
        <IonText>
          <h3>Enjoy learning to code!</h3>
        </IonText>
        <IonButton onClick={() => onFinish()}>Empieza ya</IonButton>
      </SwiperSlide>
    </Swiper>
  );
};

export default Intro;
