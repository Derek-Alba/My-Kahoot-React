import { useContext } from "react";
import { Col, Container, Form, Row, Table, Button, Modal } from "react-bootstrap";
import InputRespuesta from "../../components/InputRespuesta/InputRespuesta";
import { Controller } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { KahootContext } from "../../context/KahootContext";

const CreateTest = () => {
    const navigate = useNavigate()
    const {
        show,
        handleShow,
        preguntas,
        setPreguntas,
        activate,
        actualizarRespuestaCorrecta,
        onChangeText,
        control,
        handleSubmit,
        handleClose,
        register,
        reset,
        formState: { errors },
        onSubmit,
        deletePregunta,
    } = useContext(KahootContext)

    const handleCreateTest = (data) => {
        const { autor, time, nombreTest } = data
        if (preguntas.length <= 0) {

        } else {
            const guardar = { codigo: Math.random().toString(36).substring(2, 9), autor, time, nombreTest, preguntas };
            const tests = JSON.parse(localStorage.getItem('PREGUNTAS'))
            if (tests) {
                tests.push(guardar)
                localStorage.setItem('PREGUNTAS', JSON.stringify(tests))
            } else {
                localStorage.setItem('PREGUNTAS', JSON.stringify([guardar]))
            }
            reset()
            setPreguntas([])
            alert('Se guardo con exito')
            navigate('/')

        }
    }
    return (
        <>

            <Container>
                <h1 className="text-center mt-5 loading">Crear una Evaluacion </h1>
                <Form className="mt-5">
                    <Row>
                        <Col md={6}>
                            <Form.Group className="mb-3 font-weight-bold fs-6">
                                <Form.Label >Nombre del Test</Form.Label>
                                <Form.Control   {...register('nombreTest', {
                                    required: "Este campo es obligatorio",

                                })} type="text" placeholder="Test" />
                                {errors.nombreTest && <p role="alert" className="text-danger">{errors.nombreTest.message}</p>}
                            </Form.Group>
                            <Form.Group className="mb-3 font-weight-bold fs-6">
                                <Form.Label>Autor del Test</Form.Label>
                                <Form.Control
                                    {...register('autor', { required: "Este campo es obligatorio" })} type="text" placeholder="Autor" />
                                {errors.autor && <p role="alert" className="text-danger">{errors.autor.message}</p>}
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group className="mb-3 font-weight-bold fs-6">
                                <Form.Label>{`Duracion del Test    `}
                                    <Form.Text className="text-muted">
                                        (Ingreselo en Minutos)
                                    </Form.Text>
                                </Form.Label>
                                <Form.Control
                                    {...register('time', {
                                        required: "Este campo es obligatorio",
                                        min: 1
                                    })}
                                    type="number" placeholder="1" />
                                {errors.time && <p role="alert" className="text-danger">{errors.time.message}</p>}
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
                <Row>
                    <Col>
                        <Row>
                            <Col className="d-flex justify-content-end gap-3">
                                <Button className="mb-2" variant="primary" onClick={handleShow}>
                                    Crear Preguntas
                                </Button>
                                <NavLink to={'/'} className="btn btn-danger mb-2" onClick={handleSubmit(handleCreateTest)}>
                                    Guardar Cambios
                                </NavLink>
                            </Col>
                        </Row>
                        <Table bordered>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Pregunta</th>
                                    <th>Respuestas</th>
                                    <th>Respuesta Correcta</th>
                                    <th>Opciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {preguntas.map((pregunta, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{pregunta.pregunta} </td>
                                        <td>{`${pregunta.respuesta1}, ${pregunta.respuesta2}, ${pregunta.respuesta3}, ${pregunta.respuesta4}.`} </td>
                                        <td>{pregunta.respuestaCorrecta}</td>
                                        <td>
                                            <button onClick={() => deletePregunta(index)} className="btn btn-dark" type="button">Eliminar</button>
                                        </td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Crear Pregunta</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Pregunta</Form.Label>
                                <Controller
                                    name="pregunta"
                                    control={control}
                                    rules={{ required: 'Este campo es requerido' }}
                                    render={({ field }) => (
                                        <Form.Control
                                            type="text"
                                            placeholder="Ingrese su pregunta"
                                            autoFocus
                                            {...field} />
                                    )}
                                />
                                <p role="alert" className="text-danger">{errors.pregunta?.message}</p>

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Respuesta 1 </Form.Label>
                                <Controller
                                    name='respuesta1'
                                    control={control}
                                    rules={{ required: 'Este campo es requerido' }}
                                    render={({ field: { onChange, name, ref } }) => (
                                        <InputRespuesta
                                            onChange={(e) => onChangeText(e, onChange, name)}
                                            inputRef={ref}
                                            control={control}
                                            name={name}
                                            onChangeTwo={(e) => actualizarRespuestaCorrecta(name)}
                                            nameRadio='respuestaCorrecta'
                                            activate={activate[name]}

                                        />
                                    )}
                                />
                                <p role="alert" className="text-danger">{errors.respuesta1?.message}</p>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Respuesta 2 </Form.Label>
                                <Controller
                                    name='respuesta2'
                                    control={control}
                                    rules={{ required: 'Este campo es requerido' }}
                                    render={({ field: { onChange, name, ref } }) => (
                                        <InputRespuesta
                                            onChange={(e) => onChangeText(e, onChange, name)}
                                            inputRef={ref}
                                            control={control}
                                            name={name}
                                            onChangeTwo={(e) => actualizarRespuestaCorrecta(name)}
                                            nameRadio='respuestaCorrecta'
                                            activate={activate[name]}
                                        />
                                    )}
                                />
                                <p role="alert" className="text-danger">{errors.respuesta2?.message}</p>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Respuesta 3 </Form.Label>
                                <Controller
                                    name='respuesta3'
                                    control={control}
                                    rules={{ required: 'Este campo es requerido' }}
                                    render={({ field: { onChange, name, ref } }) => (
                                        <InputRespuesta
                                            onChange={(e) => onChangeText(e, onChange, name)}
                                            inputRef={ref}
                                            control={control}
                                            name={name}
                                            onChangeTwo={(e) => actualizarRespuestaCorrecta(name)}
                                            nameRadio='respuestaCorrecta'
                                            activate={activate[name]}
                                        />
                                    )}
                                />
                                <p role="alert" className="text-danger">{errors.respuesta3?.message}</p>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Respuesta 4 </Form.Label>
                                <Controller
                                    name='respuesta4'
                                    control={control}
                                    rules={{ required: 'Este campo es requerido' }}
                                    render={({ field: { onChange, name, ref } }) => (
                                        <InputRespuesta
                                            onChange={(e) => onChangeText(e, onChange, name)}
                                            inputRef={ref}
                                            control={control}
                                            name={name}
                                            onChangeTwo={(e) => actualizarRespuestaCorrecta(name)}
                                            nameRadio='respuestaCorrecta'
                                            activate={activate[name]}
                                        />
                                    )}
                                />
                                <p role="alert" className="text-danger">{errors.respuesta4?.message}</p>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cerrar
                        </Button>
                        <Button className="" variant="primary" onClick={handleSubmit(onSubmit)}>
                            Guardar
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Container>
        </>
    );
}

export default CreateTest;