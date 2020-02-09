import React from 'react'
import classnames from 'classnames'

interface PropTypes {
    activeSegment: string;
    segements: Array<{title: string; key:string}>;
    onChange (segment: any): void
}

export default function Segment(props: PropTypes) {
    return (
        <div className="segment-container">
            {props.segements.map(row => {
                const segmentItemClass = classnames({
                    "segment-item": true,
                    "segment-item-active": row.key === props.activeSegment
                })

                return (
                    <div 
                        key={row.key} 
                        className={segmentItemClass}
                        onClick={() => {
                            props.onChange(row)
                        }}
                    >
                        {row.title}
                    </div>
                )
            })}
        </div>
    )
}
