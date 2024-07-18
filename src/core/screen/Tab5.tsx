import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterLink,
  IonRow,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import UserLogo from "../../images/img/user-1.png";
import {
  calendar,
  chevronForward,
  informationCircle,
  newspaper,
  person,
  star,
} from "ionicons/icons";

import '../css/tab5.css'

const Tab5: React.FC = () => {
  const itemList = [
    {
      icon: person,
      name: "Editar Perfil",
    },
    {
      icon: newspaper,
      name: "Historial de pagos",
    },
    {
      icon: calendar,
      name: "Historial de Citas",
    },
    {
      icon: star,
      name: "Favoritos",
    },
    {
      icon: informationCircle,
      name: "Ayuda y Soporte",
    },
  ];

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonToolbar>
              <div slot="start" className="tab1-header">
                <h1>Mi Perfil</h1>
              </div>
            </IonToolbar>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <div className="ion-text-center ion-padding tab5-avatar">
                <img src={UserLogo} alt="FCC Logo" width={"50%"} />
                <p>Gino Alejandro</p>
                <p>gino@gino.com</p>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        {itemList.map((user, index) => (
          <IonCard key={index}>
            <IonCardContent className="ion-no-padding">
              <IonItem lines="none">
                <IonIcon slot="start" icon={user.icon} />
                <IonLabel>{user.name}</IonLabel>
                <IonIcon slot="end" icon={chevronForward} />
              </IonItem>
            </IonCardContent>
          </IonCard>
        ))}

        <IonRow className="recover-links">
          <IonRouterLink routerLink="">
            Registrarte aqui
          </IonRouterLink>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Tab5;
