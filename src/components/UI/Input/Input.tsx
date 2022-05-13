import React from 'react'

type Props = {
    className?: string
    title: string
    value: string
    type: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ className, title, value, type, onChange }: Props) => {
    return (
        <div>
            <div className={'input__title'}>{title}</div>
            <input
                className={`input ${className ? className : ''}`}
                value={value}
                onChange={onChange}
                type={type}
            />
        </div>
    )
}

export { Input }
