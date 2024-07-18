import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonChip,
  IonContent,
  IonGrid,
  IonImg,
  IonItem,
  IonLabel,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonRow,
  IonSearchbar,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import React, { useEffect, useState } from "react";
import "../css/tab4.css";

const Tab4: React.FC = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedUser, setSelectedUser] = useState<any>(null);

  useEffect(() => {
    console.log("iniciando tab4");
  }, []);

  useIonViewWillEnter(() => {
    const fetchUsers = async () => {
      const usersData = await getUsers();
      setUsers(usersData);
      setLoading(false);
    };
    fetchUsers();
  });

  const getUsers = async () => {
    const data = await fetch("https://randomuser.me/api?results=4");
    const users = await data.json();
    return users.results;
  };

  const doRefresh = async (event: any) => {
    const data = await getUsers();
    setUsers(data);
    event.detail.complete();
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" onIonRefresh={(ev) => doRefresh(ev)}>
          <IonRefresherContent />
        </IonRefresher>

        <IonGrid>
          <IonRow>
            <IonToolbar>
              <div slot="start" className="tab1-header">
                <h1>Mis Chats</h1>
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

        <IonCard className="tab4-custom-card-ia">
          <IonCardContent className="tab4-custom-card-content-ia ion-no-padding">
            <IonItem lines="none" className="tab4-custom-item-ia">
              <p>Inicia una nueva conversación con nuestra IA especializada</p>
            </IonItem>
          </IonCardContent>
        </IonCard>

        {users.map((user, index) => (
          <IonCard key={index} onClick={() => setSelectedUser(user)} className="tab4-custom-card">
            <IonCardContent className="tab4-custom-card-content ion-no-padding">
              <IonItem lines="none" className="tab4-custom-item">
                <IonAvatar slot="start">
                  <IonImg src={user.picture.large} />
                </IonAvatar>
                <IonLabel className="tab4-custom-label">
                  Dr. {user.name.first} {user.name.last}
                  <p>{user.cell}</p>
                </IonLabel>
              </IonItem>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
