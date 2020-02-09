import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import CurvedBackground from '../components/background';
import Segment from '../components/segment';
import OrdersList from '../components/ordersList';

const segments: Array<{title: string; key:string}> = [
  { title: "All",    key: "all" },
  { title: "Newest", key: "newest" },
  { title: "Oldest", key: "oldest" }
]

const ordersList: Array<any> = [
  {
    title: "Fresh orange",
    image: "https://image.flaticon.com/icons/svg/1135/1135569.svg",
    price: 1.69,
    total: 8.45,
    address: "Avenida Siempre Viva 123"
  },
  {
    title: "Fresh 2",
    image: "https://image.flaticon.com/icons/svg/2486/2486045.svg",
    price: 2.69,
    total: 9.45,
    address: "Avenida Siempre Viva 123"
  },
  {
    title: "Fresh 3",
    image: "https://image.flaticon.com/icons/svg/1661/1661811.svg",
    price: 3.69,
    total: 10.45,
    address: "Avenida Siempre Viva 123"
  }
]

const Tab2: React.FC = () => {
  const [segment, setSegment] = useState("all")
  return (
    <IonPage>
      <IonHeader no-border="">
        <IonToolbar color="primary">
          <IonTitle>Order Shipped</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="content-bg ion-padding">
        <CurvedBackground>

          <Segment segements={segments} activeSegment={segment} onChange={segmentPicked => {
            setSegment(segmentPicked.key)
          }}/>

          <OrdersList ordersList={ordersList} />

        </CurvedBackground>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;