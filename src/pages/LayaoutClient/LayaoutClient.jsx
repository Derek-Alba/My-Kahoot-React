import { useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const LayaoutClient = () => {
    const [preguntas, setPreguntas] = useState(JSON.parse(localStorage.getItem('PREGUNTAS')))
    const [notFound, setNotFound] = useState(false)
    const [test, setTest] = useState({})
    const { codigo } = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        const prueba = preguntas.find(item => item.codigo === codigo)
        if (!prueba) {
            setNotFound(true)
        } else {
            setTest(prueba)
        }
    })
    const start = () => {
        navigate(`/game/${codigo}/start`)
    }
    return (
        <>
            {notFound && (
                <Container>
                    <div className="circ">
                        <div className="hands"></div>
                        <div className="body"></div>
                        <div className="head">
                            <div className="eye"></div>
                        </div>
                    </div>
                    <div className="loading">
                        <h1 className="text-center ">Test no encontrado</h1>
                    </div>
                </Container>

            )}
            {!notFound && (
                <div className="  d-flex flex-column align-items-center mt-5 ">
                    <div className=" d-flex flex-column align-items-center mt-5 mb-5 fs-3 ">
                        <h1 className="loading text-center">Welcome to Kahoot Chango!</h1>
                        <p className="mt-5">The autor Games is: <strong className="fs-2">{test?.autor}</strong> </p>
                        <p>Time to take test: <strong className="fs-2"> {`${test?.time} minutos`} </strong></p>
                        <p>Total Questions in Test: <strong className="fs-1"> {test?.preguntas?.length}</strong></p>
                    </div>
                    <div>
                        <button size="lg" onClick={start} className="btn-start"><div>Start</div></button>
                    </div>


                </div>

            )}
        </>
    );
}

export default LayaoutClient;