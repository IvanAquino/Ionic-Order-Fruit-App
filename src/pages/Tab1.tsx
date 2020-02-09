import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar
} from '@ionic/react';
import React from 'react';
import ProductsGrid from '../components/productsGrid'
import './Tab1.css';
import CurvedBackground from '../components/background';

const products: any = [
  {
    title: "Fresh orange",
    image: "https://image.flaticon.com/icons/svg/1135/1135569.svg",
    price: 1.69,
    isLiked: true
  },
  {
    title: "Fresh asd 2",
    image: "https://image.flaticon.com/icons/svg/2486/2486045.svg",
    price: 2.69,
    isLiked: false
  },
  {
    title: "Fresh orange 3",
    image: "https://image.flaticon.com/icons/svg/1661/1661811.svg",
    price: 3.69,
    isLiked: false
  },
  {
    title: "Fresh orange 4",
    image: "https://image.flaticon.com/icons/svg/2482/2482074.svg",
    price: 4.69,
    isLiked: false
  },
  {
    title: "Fresh orange",
    image: "https://image.flaticon.com/icons/svg/1135/1135569.svg",
    price: 1.69,
    isLiked: true
  },
  {
    title: "Fresh asd 2",
    image: "https://image.flaticon.com/icons/svg/2486/2486045.svg",
    price: 2.69,
    isLiked: false
  }
]

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader no-border="">
        <IonToolbar color="primary">
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="content-bg">
        <CurvedBackground>
          <IonSearchbar className="search-products-bar ion-margin-bottom" />
          <ProductsGrid products={products} />
        </CurvedBackground>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
