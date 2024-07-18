import {
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const Tab3: React.FC = () => {
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
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
