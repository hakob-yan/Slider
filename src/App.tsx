import { useState } from "react"
import Slider from "./Slider/Slider"

export const App = () => {
    const [value, setPrice] = useState(200)
    return <Slider price={value} setPrice={setPrice} min={0} max={5} />
}