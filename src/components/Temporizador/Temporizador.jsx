import { useEffect, useState } from "react";
import './styles.css'

const Temporizador = ({ time, setFinish }) => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(59)


    useEffect(() => {
        const horas = parseInt(time / 60)
        const minutos = time - (horas * 60)
        setHours(minutos === 0 ? horas - 1 : horas)
        setMinutes(minutos === 0 ? 59 : minutos - 1)
    }, [time])

    useEffect(() => {
        const myCallback = () => {
            setSeconds(seconds - 1)
        }
        if (seconds > 0) {
            let intervalID = setInterval(myCallback, 1000)
            setTimeout(() => {
                clearInterval(intervalID)
            }, 1000)
        } else if (minutes > 0) {
            setMinutes(minutes - 1)
            setSeconds(59)
        } else if (hours > 0) {
            setHours(hours - 1)
            setMinutes(59)
            setSeconds(59)
        } else {
            setFinish(true)
        }

    }, [seconds])
    return (
        <>
        <div className="contenedorr">
        <div className="card bg-black text-center">
                <p className="title1">
                    {
                        `${hours}:${minutes}:${seconds}`
                    }
                </p>
            </div>

        </div>
            

        </>
    );
}

export default Temporizador;