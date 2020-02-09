import React from 'react'

import {
    IonGrid, IonRow, IonCol
} from '@ionic/react'
import ProductCard from '../productCard'

interface PropTypes {
    products: Array<any>
}

export default function index(props: PropTypes) {

    return (
        <IonGrid className="ion-no-padding">
            <IonRow className="ion-no-padding">
                {props.products.map((row, index) => (
                    <IonCol size="6" sizeSm="4" sizeLg="3" sizeXl="3" key={index}>
                        <ProductCard 
                            image={row.image} 
                            title={row.title} 
                            price={row.price} 
                            isLiked={row.isLiked}
                            onAdd={() => {
                                alert(`Add ${row.title}`)
                            }}
                            onLike={(isLiked) => {
                                isLiked ? alert(`Liked ${row.title}`): alert(`Like removed ${row.title}`);
                            }}
                        />
                    </IonCol>
                ))}
            </IonRow>
        </IonGrid>
    )
}
