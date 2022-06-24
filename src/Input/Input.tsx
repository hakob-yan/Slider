import { useState } from 'react'
import * as S from './InputStyled'


export const Input = ({ price}: {
    price: string,
    
}) => {
    const [value, setValue] = useState("");

    return (
        <S.Input onChange={(e) => setValue(e.target.value.slice(1))} value={price + value} />
    )
}