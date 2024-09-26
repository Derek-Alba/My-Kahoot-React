import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import ButtonCopied from "./ButtonCopied/ButtonCopied";

const LayaoutAdmin = () => {
    const tests = JSON.parse(localStorage.getItem('PREGUNTAS'))
    const copyLink = (code) => {
        navigator.clipboard.writeText(`${window.location}game/${code}`)
    }
    return (
        <>
            <div className="container pt-5">
                <div className=" d-flex justify-content-end">
                    <Link className="btn btn-primary mb-4"
                        to={'/create'}>
                        Creat Test
                    </Link>
                </div>
                <div className="d-flex justify-content-center flex-column">
                    <Table responsive className="table-light table-hover" >
                        <thead className="text-center table-dark">
                            <tr>
                                <th>#</th>
                                <th>Nombre de la Prueba</th>
                                <th>Duracion</th>
                                <th>Autor</th>
                                <th>Total de Preguntas</th>
                                <th>Codigo</th>
                                <th>Opciones</th>
                            </tr>
                        </thead>
                        <tbody className="text-center">
                            {
                                tests?.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index}</td>
                                        <td>{item.nombreTest}</td>
                                        <td>{item.time}</td>
                                        <td>{item.autor}</td>
                                        <td>{item.preguntas.length}</td>
                                        <td>{item.codigo}</td>
                                        <td><ButtonCopied copyLink={copyLink} codigo={item.codigo} /></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default LayaoutAdmin;
