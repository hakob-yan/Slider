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


export const Track = styled.div`
    top: 0 ;
    bottom: 0;
    background: ${(props: any) => (props.index === 1 ? '#DCDCDC' : '#FF69B4')};
    border - radius: 999px;
  
  
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
  `


type Props = {
    price: number
}

export const Input = styled.input<Props>`
    margin-left:${props => ((props.price / 100) * LENGTH)}px;
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
