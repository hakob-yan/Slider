import { useState } from "react"
import { Slider } from "./Slider/Slider"

export const App = () => {
    const [price, setPrice] = useState<number>(1);

    return (
        <Slider
            price={price}
            setPrice={setPrice}
            min={0}
            max={5}
            currency='$'
        />
    );
}