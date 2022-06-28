
import * as S from './SliderStyled';


export function isValid(str: string) {
    if (typeof str !== 'string') {
        return false;
    }
    const num = Number(str);
    if (Number.isInteger(num) && num >= 0) {
        return true;
    }
    return false;
}

export const Track = (props: any, state: any) => {
    return <S.Track {...props} index={state.index} />
}

export const Thumb = (props: any, state: any) => <S.Thumb {...props} />
