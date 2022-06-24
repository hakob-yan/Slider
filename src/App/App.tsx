import React, { useState } from 'react';
import { Input } from '../Input/Input';
import { Slider, StyledSlider, StyledThumb, StyledTrack } from './AppStyled';


const Track = (props: any, state: any) => {
  console.log(props);
  return <StyledTrack {...props} index={state.index} />
}

const Thumb = (props: any, state: any) => <StyledThumb {...props} />

function App() {

  const [leftState, setLeftState] = useState(0);

  const handleChangeLeft = (value: number | readonly number[]): void => {
    if (typeof value === 'number') {
      setLeftState(value);
    }
  }

  return (
    <Slider>
      <Input price='$' />
      <StyledSlider value={leftState} onChange={handleChangeLeft} renderTrack={Track} renderThumb={Thumb} />
    </Slider>
  );
}

export default App;
