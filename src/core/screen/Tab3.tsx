import {
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import {
  ListSpecialties,
  ListSpecialtiesOut,
} from "../../interface/specialties.interface";
import { getListSpecialties } from "../services/specialties";
import "swiper/css";
import "../css/tab3.css";

const Tab3: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [specialties, setSpecialties] = useState<ListSpecialties[]>();

  useEffect(() => {
    listSpecialties();
  }, []);

  const listSpecialties = async () => {
    const specialties: ListSpecialtiesOut = await getListSpecialties();
    if (specialties.code !== "000") {
      console.log(specialties.message);
      return;
    }
    setSpecialties(specialties.data);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonToolbar>
              <div slot="start" className="tab1-header">
                <h1>Crea tu Cita</h1>
              </div>
            </IonToolbar>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <IonTitle>Elige tu Especialidad</IonTitle>
            
            

            <Swiper>
              <SwiperSlide>
                <img src="" alt="Intro 1" />
                <IonText>
                  <h3>¡Hola! Bienvenido a Cirugías 24 horas</h3>
                  <p>
                    Una app donde podras reservar tus citas, gestionar
                    documentos, chatear con los doctores y muchos más
                  </p>
                </IonText>
              </SwiperSlide>

              <SwiperSlide>
                <img src="" alt="Intro 2" />
                <IonText>
                  <h3>
                    Prueba nuestra IA especializada para resolver tus
                    necesidades
                  </h3>
                  <p>
                    Nuestra nueva IA entrenda para resolver tus dudas y
                    registrate citas con los mejores dotores
                  </p>
                </IonText>
              </SwiperSlide>

              <SwiperSlide>
                <img src="" alt="Intro 3" />
                <IonText>
                  <h3>Enjoy learning to code!</h3>
                </IonText>
              </SwiperSlide>
            </Swiper>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
