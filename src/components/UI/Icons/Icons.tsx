import React from 'react'
// @ts-ignore
import IconsSVG from './icons.svg'

type Props = {
    name: string
    color?: any
    width?: string
    height?: string
    className?: string
}

const Icons = ({ name, color, width, height, className }: Props) => {
    return (
        <svg
            className={`${className ? className : ''}`}
            fill={color}
            stroke={color}
            width={width}
            height={height}
        >
            <use xlinkHref={`${IconsSVG}#icon-${name}`} />
        </svg>
    )
}

export { Icons }
