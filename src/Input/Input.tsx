import { useState } from 'react'
import * as S from './InputStyled'

function isAlowed(str: string, max: number, min: number) {
    if (typeof str !== 'string') {
        return false;
    }
    const num = Number(str);
    if (Number.isInteger(num) &&  num >= min && num <= max) {
        return true;
    }
    return false;
}


export const Input = ({ currency, setPrice, price, max, min }: { currency: string, price: number; setPrice: any, max: number, min: number }) => {

    return (
        <S.Input
            onChange={(e) => {
                // if (+e.target.value.slice(1)! < min) { setValue(0 / (max - min) * 100) };
                if (isAlowed(e.target.value.slice(1), max, min))
                { setPrice(((+e.target.value.slice(1) - min) / (max - min) * 100)).toFixed(2) }
            }}
            value={`${currency}${((price / 100) * (max - min) + min).toFixed(2)}`}
            price={price}
        />
    )
}