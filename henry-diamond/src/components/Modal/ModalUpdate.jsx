import "./Modal.css";
import { useSelector, useDispatch } from "react-redux";

const ModalUpdate = ({children, isOpen, closeModal}) => {
    const productoEditado = useSelector((state) => state.product);
    const handleModalConteinerClick = e => e.stopPropagation();
    return (
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalConteinerClick}>
                <button className="modal-close" onClick={closeModal}>X</button>
                {children}
            </div>
        </article>
    )
}

export default ModalUpdate;