import { useContext, useEffect, useState } from "react";
import MostraPregunta from "../../components/MostraPregunta/MostraPregunta";
import { KahootContext } from "../../context/KahootContext";
import { Container } from "react-bootstrap";
import './style.css'



const StartGame = () => {
    const {
        contador, setContador,
        mostrar, setMostrar
    } = useContext(KahootContext)


    useEffect(() => {
        function myCallback() {
            setContador(contador - 1)
        }

        if (contador > 0) {
            let intervalID = setInterval(myCallback, 1000)
            setTimeout(() => {
                clearInterval(intervalID)
            }, 1000)
        } else {
            setMostrar(false)
        }
    }, [contador])

    return (
        <>
            {mostrar && (
                <>
                    <Container>
                        <div className="circ">                        
                            <div className="hands"></div>
                            <div className="body"></div>
                            <div className="head">
                                <div className="eye"></div>
                            </div>
                        </div>
                        <div className="loading">
                        <h1 className="text-center ">Empezando....</h1>
                        <h1 className="text-center number"> {contador} </h1>
                        </div>
                    </Container>
                </>

            )}
            {!mostrar && <MostraPregunta />
            }


        </>
    );
}

export default StartGame;