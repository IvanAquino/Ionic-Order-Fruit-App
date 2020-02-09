import React from 'react'

// SVG created with https://codepen.io/anthonydugois/pen/mewdyZ

export default function CurvedBackground(props: any) {
    return (
        <>
        <div className="background-svg">
            <svg viewBox="0 0 800 400" className="svg">
                <path fill="#343549" d="M 0 0 L 0 350 C 400 150 500 450 800 300 L 800 0 Z" data-reactid=".0.0.0.0.1"></path>
            </svg>
        </div>
        <div className="background-container ion-padding">
            
            {props.children}
            
        </div>
        </>
    )
}
