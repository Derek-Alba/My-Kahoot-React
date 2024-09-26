import { useContext, useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Temporizador from "../Temporizador/Temporizador";
import Resultado from "../Resultado/Resultado";
import '../Temporizador/styles.css'
import { KahootContext } from "../../context/KahootContext";

const MostraPregunta = () => {
    const {
        count,
        respuestaCorrecta,
        respuestaIncorrecta,
        preguntass, test, setTest, finish, setFinish,
        cambiarPregunta

    } = useContext(KahootContext)

    const { codigo } = useParams()
    useEffect(() => {
        const prueba = preguntass.find(item => item.codigo === codigo)

        setTest(prueba)

    }, [])

    return (
        <>
            {finish && (
                <Resultado
                    correcta={respuestaCorrecta}
                    preguntas={test.preguntas.length}
                    incorrecta={respuestaIncorrecta} />
            )}
            {!finish && (
                <Container >
                    <Temporizador time={test?.time} setFinish={setFinish} />
                    <h1 className="text-center mb-5 title1 text-dark">{test?.preguntas[count]?.pregunta}</h1>
                    <Row className="text-center gap-5 mt-5 ">
                        <Col md={12} className="d-flex justify-content-center gap-5 title1" >
                            <Button
                                onClick={() => cambiarPregunta(test?.preguntas[count]?.respuesta1)}
                                size="lg"
                                variant="danger"
                                style={{ width: '200px', height: '150px' }}>
                                {test?.preguntas[count]?.respuesta1}
                            </Button>
                            <Button
                                size="lg"
                                onClick={() => cambiarPregunta(test?.preguntas[count]?.respuesta2)}
                                variant="primary"
                                style={{ width: '200px', height: '150px' }}>
                                {test?.preguntas[count]?.respuesta2}
                            </Button>
                        </Col>
                        <Col md={12} className="d-flex justify-content-center gap-5">
                            <Button
                                size="lg"
                                onClick={() => cambiarPregunta(test?.preguntas[count]?.respuesta3)}
                                variant="success"
                                style={{ width: '200px', height: '150px' }}>
                                {test?.preguntas[count]?.respuesta3}
                            </Button>
                            <Button
                                size="lg"
                                onClick={() => cambiarPregunta(test?.preguntas[count]?.respuesta4)}
                                variant="warning"
                                style={{ width: '200px', height: '150px' }}>
                                {test?.preguntas[count]?.respuesta4}
                            </Button>
                        </Col>

                    </Row>
                </Container>
            )}

        </>
    );
}

export default MostraPregunta;