import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonPage,
  IonRouterLink,
  IonRow,
  IonSearchbar,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "../css/tab1.css";
import { notificationsOutline } from "ionicons/icons";
import conoceDoctores from "../../images/img/conoce-docotres.png";
import conoceServicios from "../../images/img/conoce-servicios.png";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonToolbar>
              <div slot="start" className="tab1-header">
                <h1>Hola Gino</h1>
                <span>Buenos días!</span>
              </div>
              <div slot="end" className="center-vertical">
                <IonButtons>
                  <IonButton className="tab1-button-notification">
                    <IonIcon slot="icon-only" icon={notificationsOutline} />
                  </IonButton>
                </IonButtons>
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

        <IonGrid>
          <IonRow>
            <p className="tab1-title-card">Conoce a nuestros doctores</p>
          </IonRow>
          <IonRow className="ion-align-items-center tab1-card-option tab1-card-option--doctores">
            <IonCol size="4">
              <img src={conoceDoctores} alt="order method" />
            </IonCol>

            <IonCol size="8">
              <div className="tab1-card-option-body">
                <p>Lorem ipsum dolor sit amet.</p>
                <IonRouterLink routerLink="/">Conoce más {" > "}</IonRouterLink>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          <IonRow>
            <p className="tab1-title-card">Todos los servicios que brindamos</p>
          </IonRow>
          <IonRow className="ion-align-items-center tab1-card-option tab1-card-option--pacientes">
            <IonCol size="4">
              <img src={conoceServicios} alt="order method" />
            </IonCol>

            <IonCol size="8">
              <div className="tab1-card-option-body">
                <p>Lorem ipsum dolor sit amet.</p>
                <IonRouterLink routerLink="/">Conoce más {" > "}</IonRouterLink>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid className="ion-padding-bottom">
          <IonRow>
            <p className="tab1-title-card">Nuestras Sedes</p>
          </IonRow>
          <IonRow className="ion-align-items-center tab1-card-option tab1-card-option--clinicas">
            <IonCol size="4">
              <img src={conoceServicios} alt="order method" />
            </IonCol>

            <IonCol size="8">
              <div className="tab1-card-option-body">
                <p>Lorem ipsum dolor sit amet.</p>
                <IonRouterLink routerLink="/">Conoce más {" > "}</IonRouterLink>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
