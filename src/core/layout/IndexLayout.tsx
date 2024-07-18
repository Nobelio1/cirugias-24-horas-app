import { IonContent, IonHeader, IonIcon, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { addCircle, addCircleOutline, calendar, calendarOutline, chatbubbleEllipses, chatbubbleEllipsesOutline, home, homeOutline, personCircle, personCircleOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import Tab1 from '../screen/Tab1';
import Tab2 from '../screen/Tab2';
import Tab3 from '../screen/Tab3';
import Tab4 from '../screen/Tab4';
import Tab5 from '../screen/Tab5';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router';
import '../../theme/floating-tab-bar.css'

const IndexLayout: React.FC = () => {

  const tabs = [
    {
      name: "Home",
      url: "/app/home",
      activeIcon: home,
      icon: homeOutline,
      component: Tab1
    },
    {
      name: "Appointments",
      url: "/app/appointments",
      activeIcon: calendar,
      icon: calendarOutline,
      component: Tab2
    },
    {
      name: "Add",
      url: "/app/add",
      activeIcon: addCircle,
      icon: addCircleOutline,
      component: Tab3
    },
    {
      name: "Chats",
      url: "/app/chats",
      activeIcon: chatbubbleEllipses,
      icon: chatbubbleEllipsesOutline,
      component: Tab4
    },
    {
      name: "Profile",
      url: "/app/profile",
      activeIcon: personCircle,
      icon: personCircleOutline,
      component: Tab5
    }
  ];

  const [ activeTab, setActiveTab ] = useState(tabs[0].name);


  return (
    <IonPage>
      <IonReactRouter>
        <IonTabs onIonTabsDidChange={ e => setActiveTab(e.detail.tab) }>
          <IonRouterOutlet>
            { tabs.map((tab, index) => {
              return (
                <Route key={ index } exact path={ tab.url }>
                  <tab.component />
                </Route>
              );
            })}

            <Route exact path="/">
              <Redirect to="/app/home" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            { tabs.map((tab, barIndex) => {
              const active = tab.name === activeTab;
              return (
                <IonTabButton key={ `tab_${ barIndex }` } tab={ tab.name } href={ tab.url }>
                  <IonIcon icon={ active ? tab.activeIcon : tab.icon } />
                </IonTabButton>
              );
            })}
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonPage>
  );
};

export default IndexLayout;
