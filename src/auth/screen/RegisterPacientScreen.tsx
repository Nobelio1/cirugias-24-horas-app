import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRouterLink,
  IonRow,
  useIonLoading,
  useIonRouter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import {
  arrowForwardOutline,
  lockClosedOutline,
  logoApple,
  logoFacebook,
  logoGoogle,
  mailOpenOutline,
  personOutline,
} from "ionicons/icons";
import "./css/register.css";

const RegisterPacientScreen: React.FC = () => {
  const router = useIonRouter();
  const [present, dismiss] = useIonLoading(); //Todo:::::::::: Spinner de carga

  const doLogin = async (event: any) => {
    event.preventDefault();
    await present("Logging in...");
    setTimeout(async () => {
      dismiss();
      router.push("/app", "root"); //investigar esto
    }, 2000);
  };

  return (
    <IonPage>
      <IonContent scrollY={false} color={"tertiary"}>
        <IonGrid fixed>
          {/* Titulo */}
          <IonRow class="ion-justify-content-center header">
            <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
              <div className="ion-text-center ion-padding">
                <h1>Regístrate</h1>
                <p>Unete Unete Unete Unete!!</p>
              </div>
            </IonCol>
          </IonRow>

          {/* Formulario */}
          <IonRow class="ion-justify-content-center formulario">
            <IonCol
              size="12"
              sizeMd="8"
              sizeLg="6"
              sizeXl="4"
              class="ion-padding-horizontal"
            >
              <form onSubmit={doLogin}>
                <div className="input-container">
                  <IonLabel className="custom-ion-label">
                    Nombres
                  </IonLabel>
                  <IonItem className="custom-ion-item">
                    <IonIcon
                      icon={personOutline}
                      slot="start"
                      className="custom-ion-icon"
                    />
                    <IonInput
                      className="custom-ion-input"
                      type="email"
                      placeholder="Ingrese su nombre"
                    />
                  </IonItem>
                </div>

                <div className="input-container">
                  <IonLabel className="custom-ion-label">
                    Correo Electrónico
                  </IonLabel>
                  <IonItem className="custom-ion-item">
                    <IonIcon
                      icon={mailOpenOutline}
                      slot="start"
                      className="custom-ion-icon"
                    />
                    <IonInput
                      className="custom-ion-input"
                      type="email"
                      placeholder="Ingrese su correo"
                    />
                  </IonItem>
                </div>

                <div className="input-container">
                  <IonLabel className="custom-ion-label">Contraseña</IonLabel>
                  <IonItem className="custom-ion-item">
                    <IonIcon
                      icon={lockClosedOutline}
                      slot="start"
                      className="custom-ion-icon"
                    />
                    <IonInput
                      className="custom-ion-input"
                      placeholder="Ingrese su contraseña"
                      type="password"
                    />
                  </IonItem>
                </div>

                <IonButton
                  type="submit"
                  expand="block"
                  className="ion-margin-top custom-button ion-padding-vertical"
                >
                  Registrate
                  <IonIcon icon={arrowForwardOutline} slot="end" />
                </IonButton>
              </form>
            </IonCol>
          </IonRow>

          {/* Otro servicios */}
          <IonRow className="divider-row ion-align-items-center ion-padding-horizontal">
            <IonCol size="5" className="divider-line"></IonCol>
            <IonCol size="2" className="divider-text">
              <p>o</p>
            </IonCol>
            <IonCol size="5" className="divider-line"></IonCol>
          </IonRow>
          <IonRow className="talkSpeakers">
            <div className="talkSpeaker">
              <img src={logoFacebook} alt="avatar" />
            </div>
            <div className="talkSpeaker">
              <img src={logoGoogle} alt="avatar" />
            </div>
            <div className="talkSpeaker">
              <img src={logoApple} alt="avatar" />
            </div>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default RegisterPacientScreen;
