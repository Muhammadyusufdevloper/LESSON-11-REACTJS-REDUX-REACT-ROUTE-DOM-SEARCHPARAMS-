import "./Modal.scss";

const Modal = ({ children, close }) => {
    return (
        <>
            <div className="modal__overlay" onClick={close}></div>
            <div className="modal">
                <div className="modal__wrapper">
                    {children}
                </div>
            </div>
        </>
    );
}

export default Modal;
