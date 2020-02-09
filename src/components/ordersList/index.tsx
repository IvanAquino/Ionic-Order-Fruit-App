import React from 'react'
import {
    IonList, IonItem, IonLabel, IonThumbnail, IonIcon
} from '@ionic/react'
import { pin } from 'ionicons/icons'

interface PropTypes {
    ordersList: Array<any>;
}

export default function OrdersList(props: PropTypes) {
    return (
        <IonList lines="none" className="order-list-container">
            {props.ordersList.map((row, index) => (
                <IonItem key={index} className="order-list-item">
                    <IonThumbnail slot="start">
                        <img src={row.image} alt="Product image"/>
                    </IonThumbnail>
                    <IonLabel>
                        <div className="font-12pt text-primary">
                            {row.title}
                        </div>
                        <div className="product-info-row">
                            <div className="product-info-column ion-justify-content-start">
                                <span className="font-10pt text-muted text-semibold">Price</span>
                            </div>
                            <div className="product-info-column ion-justify-content-end">
                                <span className="font-10pt text-semibold">$ {row.price}</span>
                            </div>
                        </div>
                        <div className="product-info-row">
                            <div className="product-info-column ion-justify-content-start">
                                <span className="font-10pt text-muted text-semibold">Your order</span>
                            </div>
                            <div className="product-info-column ion-justify-content-end">
                                <span className="font-10pt text-semibold">$ {row.total}</span>
                            </div>
                        </div>
                        <br/>
                        <div className="font-10pt text-muted">
                            <IonIcon icon={pin} /> {row.address}
                        </div>
                    </IonLabel>
                </IonItem>
            ))}
        </IonList>
    )
}
