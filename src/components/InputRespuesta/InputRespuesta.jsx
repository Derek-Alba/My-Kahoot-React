import { Form, InputGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";

const InputRespuesta = ({ activate, onChange, name, onChangeTwo, inputRef, nameRadio, ...props }) => {

    return (
        <>
            <InputGroup
            >
                <Form.Control
                    onChange={onChange}
                    name={name}
                    ref={inputRef}
                    {...props}
                    aria-label="Text input with radio button" />
                <InputGroup.Radio
                    
                    disabled={activate}
                    onChange={onChangeTwo}
                    name={nameRadio}
                    aria-label="Radio button for following text input" />

            </InputGroup>
        </>
    );
}

export default InputRespuesta;