import ReactSlider from 'react-slider';
import styled from 'styled-components';
export const LENGTH = 500;

export const Slider = styled(ReactSlider)`
    width: ${LENGTH}px;
    height: 25px;
    margin:0 32px;
    margin-top:10px;
   
`;

export const Thumb = styled.div`
    height: 16px;
    line-height: 25px;
    width: 16px;
    text-align: center;
    background-color: #000;
    color: #fff;
    border-radius: 10px;
    cursor: grab;
    font-size:10px;
    margib-top:0px;
`;


export const Track = styled.div<{ index: number }>`
    top: 6px;
    bottom: 0;
    height:5px;
    background: ${({ index }) => (index === 1 ? '#DCDCDC' : '#000')};
    border-radius: 999px;
`;

export const Wrapper = styled.div`
   width:auto;
   position: relative;
   display:inline-block;
   margin:100px;
`;

export const Warning = styled.div`
    margin-left:50px;
    color:red;
    transition:all 300ms ease;
`;


export const Input = styled.input<{ price: number }>`
    margin-left:${props => ((props.price / 104) * LENGTH + 4)}px;
    position:relative;
    width:70px;
    height:30px;
    font-weight:bold;
    font-size:20px;
    outline:none;
    align-items:center;
    border:1px solid gray;
    background-color:#fff;
    text-align:center;
`
