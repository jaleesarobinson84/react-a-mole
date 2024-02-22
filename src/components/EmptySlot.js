import { useEffect } from "react";
import MoleHill from './molehill.png'

const EmptySlot = (props) => {

    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return (
        <div>
            <img 
            src={MoleHill}
            alt="mole-hill"
            style={{'width': '30vw'}} />

        </div>
    )
}

export default EmptySlot