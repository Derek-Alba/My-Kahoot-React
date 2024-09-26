import { createContext, useState } from "react";
import { useForm } from "react-hook-form";


export const KahootContext = createContext()
export const KahootProvider = ({ children }) => {
    //ESTADOS
    const [activate, setActivate] = useState({
        respuesta1: true,
        respuesta2: true,
        respuesta3: true,
        respuesta4: true,
    })
    const [preguntas, setPreguntas] = useState([])
    const [count, setCount] = useState(0)
    const [respuestaCorrecta, setRespuestaCorrecta] = useState(0)
    const [respuestaIncorrecta, setRespuestaIncorrecta] = useState(0)
    const [preguntass, setPreguntass] = useState(JSON.parse(localStorage.getItem('PREGUNTAS')))
    const [test, setTest] = useState()
    const [finish, setFinish] = useState(false)

    //ESTADOS START GAME
    const [contador, setContador] = useState(3)
    const [mostrar, setMostrar] = useState(true)

    //HOOKS

    const { control, setValue, handleSubmit, getValues, register, reset, formState: { errors }, } = useForm({
        defaultValues: {
            pregunta: '',
            respuesta1: '',
            respuesta2: '',
            respuesta3: '',
            respuesta4: '',
            respuestaCorrecta: '',
            nombreTest: '',
            time: '',
            autor: '',


        },
    })

    //FUNCIONES
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => {
        setShow(false)
        setActivate({
            respuesta1: true,
            respuesta2: true,
            respuesta3: true,
            respuesta4: true,
        })
        reset({
            pregunta: '',
            respuesta1: '',
            respuesta2: '',
            respuesta3: '',
            respuesta4: '',
            respuestaCorrecta: ''
        })
    }
    const actualizarRespuestaCorrecta = (name) => {
        setValue('respuestaCorrecta', getValues(name))

    }

    const onChangeText = (event, onChange, name) => {
        if (event.target.value != true) {
            activate[name] = false
            setActivate({ ...activate })
        } else {
            activate[name] = true
            setActivate({ ...activate })
        }
        onChange(event.target.value)
    }
    //Guardar una pregunta con sus respuestas y la correcta
    const onSubmit = (data) => {
        if (getValues('respuestaCorrecta')) {
            const { autor, time, nombreTest, ...dataFilter } = data
            setPreguntas([...preguntas, dataFilter])
            handleClose()
        }

    }
    const deletePregunta = (id) => {
        const newPreguntas = preguntas.filter((item, i) => i !== id)
        setPreguntas(newPreguntas)
    }
    const cambiarPregunta = (pregunta) => {
        if (test.preguntas.length - 1 > count) {
            setCount(count + 1)
        } else {
            setFinish(true)
        }
        if (test.preguntas[count].respuestaCorrecta == pregunta) {
            setRespuestaCorrecta(respuestaCorrecta + 1)
        } else {
            setRespuestaIncorrecta(respuestaIncorrecta + 1)
        }
    }
    return (
        <>
            <KahootContext.Provider value={{
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
                count,
                respuestaCorrecta,
                respuestaIncorrecta,
                preguntass, test, setTest, finish, setFinish,
                cambiarPregunta,
                //START GAME
                contador, setContador,
                mostrar, setMostrar
                //


            }}>
                {children}
            </KahootContext.Provider>
        </>
    );
}

