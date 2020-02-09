import React from 'react'

import { IonIcon } from '@ionic/react'
import { heart, add, checkmark } from 'ionicons/icons'

import classnames from 'classnames'

interface PropTypes {
    image: string;
    title: string;
    price: Number;
    isLiked: Boolean;
    onLike?(isLiked: Boolean): any;
    onAdd?(): any;
}

export default function index(props: PropTypes) {
    const isAdded: Boolean = Boolean(Math.round(Math.random()))

    const likeColumnClassNames = classnames({
        "product-card-actions-icon": true,
        "ion-align-items-center": true,
        "ion-justify-content-center": true,
        "product-card-actions-icon-liked": props.isLiked
    })

    const addedColumnClassNames = classnames({
        "product-card-actions-icon" : true,
        "ion-align-items-center" : true,
        "ion-justify-content-center" : true,
        "product-card-actions-icon-added": isAdded
    })

    return (
        <div className="product-card">
            <div className="product-card-title">{props.title}</div>
            <img src={props.image} className="product-card-image"/>

            <div className="product-info-row">
                <div className="product-info-column ion-justify-content-start">
                    <span className="text-muted text-semibold">Price</span>
                </div>
                <div className="product-info-column ion-justify-content-end">
                    <span className="text-semibold">$ {props.price}</span>
                </div>
            </div>

            <div className="product-card-actions">

                <div 
                    className="product-card-actions-column ion-justify-content-start"
                    onClick={() => {
                        if ( !!props.onLike ) 
                            props.onLike(!props.isLiked)
                    }}
                >
                    <div className={likeColumnClassNames}>
                        <IonIcon icon={heart}/>
                    </div>
                </div>

                <div 
                    className="product-card-actions-column ion-justify-content-end"
                    onClick={() => {
                        if ( !!props.onAdd )
                            props.onAdd()
                    }}
                >
                    <div className={addedColumnClassNames}>
                        {!isAdded && (<IonIcon icon={add}/>)}
                        {isAdded && (<IonIcon icon={checkmark}/>)}
                    </div>
                </div>

            </div>
        </div>
    )
}
