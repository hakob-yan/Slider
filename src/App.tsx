import { useState } from "react"
import { Slider } from "./Slider/Slider"

export const App = () => {
    const [price, setPrice] = useState<number>(30);

    return (
        <Slider
            price={price}
            setPrice={setPrice}
            min={30}
            max={400}
            currency='$'
        />
    );
}