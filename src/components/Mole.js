import { useEffect } from "react";
import moleImg from '../components/mole.png'

function Mole(props) {
    useEffect(() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(() => {
            props.handleClick(false)
        }, randSeconds)
        return () => clearTimeout(timer)
        })

        const handleClick = () => {
            props.handleClick();
            props.handleClick(false); // Hide the mole when clicked
          };

        return (
            <div>
              {props.handleClick && (
                <img
                  src={moleImg}
                  alt="mole-hill"
                  style={{ width: "30vw", cursor: "pointer" }}
                  onClick={handleClick}
                />
              )}
            </div>
          );
        }
        
        export default Mole