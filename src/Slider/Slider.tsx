import React, { useState } from 'react';
import * as S from './SliderStyled';
import { Thumb, Track } from "./utils"
interface IProps { min: number, max: number, price: number, setPrice: any, currency: string }



export const Slider = ({ min, max, price, setPrice, currency }: IProps) => {
  const [writted, setWritted] = useState(`${price}`);
  const handleChangeLeft = (value: number | readonly number[]): void => {
    setWritted(String(value))
    if (typeof value === 'number') {
      setWritted(String((value / 100) * (max - min) + min))
      setPrice((value / 100) * (max - min) + min)
    }
  }

  const handleInput = (e: any) => {
    const value = e.target.value.slice(1);
    if (+value > max) { setWritted(String(max)); }
    else
      if (+value < min) { setWritted(String(min)); }
      else {
        setWritted(value);
      }
  }
        return (
          <S.Wrapper>
            <S.Input
              onChange={handleInput}
              value={`${currency}${writted}`} price={(price - min) / (max - min) * 100} />
            <S.Slider
              value={(price - min) / (max - min) * 100}
              onChange={handleChangeLeft}
              renderTrack={Track}
              renderThumb={Thumb} />
            <S.Warning hidden >PLease, write a valid number</S.Warning>
          </S.Wrapper >

        );
      }
  
