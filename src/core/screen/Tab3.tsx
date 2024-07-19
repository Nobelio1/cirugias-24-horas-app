//importacion-react
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
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

//interfaces
import {
  ListSpecialties,
  ListSpecialtiesOut,
} from "../../interface/specialties.interface";

//servicios
import { getListSpecialties } from "../services/specialties";

//estilos
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
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

            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              modules={[FreeMode]}
              className="tab3-swiper"
            >
              {
                specialties?.map((data,index)=> (
                  <SwiperSlide key={index} className="tab3-swiper-slide">
                    <img src={data.imagen_url} alt="data" />
                    <p>{data.nombre.toLocaleLowerCase()}</p>
                  </SwiperSlide>
                ))
              }
              
            </Swiper>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
