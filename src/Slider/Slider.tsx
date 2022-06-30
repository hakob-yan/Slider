import React, { useState } from 'react';
import * as S from './SliderStyled';
import { isValid, Thumb, Track } from "./utils"
interface IProps { min: number, max: number, price: number, setPrice: any, currency: string }

export const Slider = ({ min, max, price, setPrice, currency }: IProps) => {

  const [writted, setWritted] = useState(`${price}`);
  const [hide, setHide] = useState(true);
  const handleInput = (e: any) => {
    let value = e.target.value.slice(1);
    const dot = value.indexOf(".")
    console.log(dot);
    if(dot>0) {value=value.slice(0,dot+3) }
    const zero = value;
    const io = Number(value);
    if (io !== NaN && io >= min) { setHide(true) }
    else setHide(false);
    if (value <= min && isValid(value)) { setPrice(min) } else
      if (value >= max && isValid(value)) { setPrice(max) } else
        if (value > min && +value < max) { setPrice(value) };

    if (+value > max) { setWritted(String(max)); } else
      if (+value < min) { setWritted(String(value)) } else
        if ((+value || +value === 0)) setWritted(value);
    if (zero[0] === "0" && zero[1] !== ".") { setWritted("0"); setPrice(0); }
  }




  const handleSlider = (value: number | readonly number[]): void => {
    setWritted(String(value))
    if (typeof value === 'number') {
      setHide(true);
      setWritted(String((value / 100) * (max - min) + min).slice(0, 4))
      setPrice((value / 100) * (max - min) + min)
    }
  }
  return (
    <S.Wrapper>
      <S.Input
        onChange={handleInput}
        value={`${currency}${writted}`} price={(price - min) / (max - min) * 100} />
      <S.Slider
        value={(price - min) / (max - min) * 100}
        onChange={handleSlider}
        renderTrack={Track}
        renderThumb={Thumb} />
      <S.Warning hidden={hide} >PLease, write a valid number</S.Warning>
    </S.Wrapper >

  );
}

