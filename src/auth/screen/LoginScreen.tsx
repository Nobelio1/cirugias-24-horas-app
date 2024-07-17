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
import { Preferences } from "@capacitor/preferences";
import Intro from "../../UI/Intro/Intro";
import {
  arrowForwardOutline,
  lockClosedOutline,
  logoApple,
  logoFacebook,
  logoGoogle,
  mailOpenOutline,
} from "ionicons/icons";
import "./css/login.css";

const INTRO_KEY = "intro-seen";

const LoginScreen: React.FC = () => {
  const router = useIonRouter();
  const [introSeen, setIntroSeen] = useState(true);
  const [present, dismiss] = useIonLoading(); //Todo:::::::::: Spinner de carga

  useEffect(() => {
    const checkStorage = async () => {
      const seen = await Preferences.get({ key: INTRO_KEY });
      setIntroSeen(seen.value === "true");
    };
    checkStorage();
  }, []);

  const doLogin = async (event: any) => {
    event.preventDefault();
    await present("Logging in...");
    setTimeout(async () => {
      dismiss();
      router.push("/app", "root");
    }, 2000);
  };

  const finishIntro = async () => {
    setIntroSeen(true);
    Preferences.set({ key: INTRO_KEY, value: "true" });
  };

  //Se puede eliminar
  const seeIntroAgain = () => {
    setIntroSeen(false);
    Preferences.remove({ key: INTRO_KEY });
  };

  return (
    <>
      {!introSeen ? (
        <Intro onFinish={finishIntro} />
      ) : (
        <IonPage>
          <IonContent scrollY={false} color={"tertiary"}>
            <IonGrid fixed>
              {/* Titulo */}
              <IonRow class="ion-justify-content-center header">
                <IonCol size="12" sizeMd="8" sizeLg="6" sizeXl="4">
                  <div className="ion-text-center ion-padding">
                    <h1>Inicia Sesión</h1>
                    <p>Accede a todas tus citas y agenda nuevas</p>
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
                      <IonLabel className="custom-ion-label">
                        Contraseña
                      </IonLabel>
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
                      Ingresar
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

              {/* Relacion-Cuenta */}
              <IonRow className="recover-links">
                <p>¿Aún no tienes cuenta? {""}
                <IonRouterLink routerLink="/register-pacient">Registrarte aqui</IonRouterLink>
                </p>
                <IonRouterLink href="/app/home">¿Te olvidaste tu contraseña?</IonRouterLink>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonPage>
      )}
    </>
  );
};

export default LoginScreen;
