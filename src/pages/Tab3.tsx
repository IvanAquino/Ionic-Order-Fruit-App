import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Tab3Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader no-border="">
        <IonToolbar color="primary">
          <IonTitle>Tab Three</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="content-bg ion-padding"></IonContent>
    </IonPage>
  );
};

export default Tab3Page;
