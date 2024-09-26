import { Container } from 'react-bootstrap';
import './style.css'
const Resultado = ({ correcta, incorrecta, preguntas }) => {
    return (
        <>
            <div className="load text-center ">Your Result</div>
            <Container className='d-flex justify-content-center align-items-centerresults-summary-container '>

                <div className="results-summary-container">
                    <div className="confetti">
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                        <div className="confetti-piece"></div>
                    </div>
                    <div className="results-summary-container__result">
                        <div className="result-box">
                            <div className="heading-primary">{correcta}</div>
                            <p className="result">of {preguntas}</p>
                        </div>
                        <div className="result-text-box">
                            <div className="heading-secondary">{correcta >= 3 ? 'excellent' : 'Keep improving' }</div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}

export default Resultado;