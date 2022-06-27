import React, { useState } from 'react';
import { Input } from '../Input/Input';
import { Slider, StyledSlider, StyledThumb, StyledTrack } from './SliderStyled';


const Track = (props: any, state: any) => {
  return <StyledTrack {...props} index={state.index} />}

const Thumb = (props: any, state: any) => <StyledThumb {...props} />





const Slidermain = ({ min, max, price, setPrice }: { min: number, max: number, price: number, setPrice: any }) => {

  const handleChangeLeft = (value: number | readonly number[]): void => {
    if (typeof value === 'number') {
      setPrice(value);
      console.log(price);
    }
  }

  return (
    <Slider >
      <Input
        max={max}
        min={min}
        currency='$'
        setPrice={setPrice}
        price={price}

      />
      <StyledSlider
        value={price}
        onChange={handleChangeLeft}
        renderTrack={Track}
        renderThumb={Thumb} />
    </Slider>
  );
}

export default Slidermain;
