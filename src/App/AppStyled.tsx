import ReactSlider from 'react-slider';
import styled from 'styled-components';
export const StyledSlider = styled(ReactSlider)`
    width: 500px; 
    height: 25px;
    margin:0 32px;
    margin-top:10px;
    
`;

export const StyledThumb = styled.div`

    height: 25px;
    line-height: 25px;
    width: 5px;
    text-align: center;
    background-color: #000;
    color: #fff;
    border-radius: 10px;
    cursor: grab;
    font-size:10px;
`;


export const StyledTrack = styled.div`
    top: 0 ;
    bottom: 0;
    background: ${(props: any) => (props.index === 1 ? '#DCDCDC' : '#FF69B4')};
    border - radius: 999px;
  
  
`;

export const Slider = styled.div`
   width:auto;
   position: relative;
   background-color:red;
   display:inline-block;
   margin:100px;
  `;
