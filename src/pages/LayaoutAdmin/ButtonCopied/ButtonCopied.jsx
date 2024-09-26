import './style.css'
const ButtonCopied = ({copyLink, codigo}) => {
    return (
        <>
            <div className="centralize">
                <div>
                    <button className='boton-copiar' onClick={() => copyLink(codigo)}>
                        <span>
                            Copy link
                        </span>
                        <span>Copied</span>
                    </button>
                </div>
            </div>

        </>
    );
}
export default ButtonCopied;