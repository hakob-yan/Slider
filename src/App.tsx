import { useState } from "react"
import { Slider } from "./Slider/Slider"

export const App = () => {
    const [price, setPrice] = useState<number>(1);

    return (
        <Slider
            price={price}
            setPrice={setPrice}
            min={1}
            max={5}
            currency='$'
        />
    );
}