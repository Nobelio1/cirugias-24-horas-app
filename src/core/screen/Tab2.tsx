import {
  IonButton,
  IonButtons,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonToolbar>
              <div slot="start" className="tab1-header">
                <h1>Mis Citas</h1>
              </div>
            </IonToolbar>
          </IonRow>
          <IonRow className="ion-margin-top">
            <IonSearchbar
              className="tab1-searchbar"
              placeholder="Busca a tu doctor"
            />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
