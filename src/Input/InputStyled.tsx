import styled from "styled-components"
import { LENGTH } from '../Slider/SliderStyled'
type Props = {
    price: number
}

export const Input = styled.input<Props>`
    margin-left:${props => ((props.price / 100) * LENGTH - 3)}px;
    position:relative;
    width:70px;
    border-radius:5px;
    height:30px;
    font-weight:bold;
    font-size:24px;
    outline:none;
    align-items:center;
    border:1px solid black;
    background-color:#fff;
`