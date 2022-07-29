import style from "./vistaPrevia.module.css";

export default function VistaPrevia({
    nombre,
    descripcion,
    precio,
    imagen,
    categoria,
    subCategoria,
    material_id,
    //stock
}) {
    return (
        <div>
            <div className={style.CardContainer}>
                <label style={{ display: "flex", justifyContent: "center" }}>Preview</label>

                <div className={style.CardImage}>
                    <img className={style.imagen} src={imagen} alt="image not found" />
                </div>
                <div className={style.CardInfo}>
                    <div>
                        <p>Nombre: {nombre}</p>
                    </div>

                    <div>
                        <p>Descripcion: {descripcion}</p>
                    </div>

                    <div>
                        <p>Precio: {precio}</p>
                    </div>

                    <div>
                        <p>Imagen: {imagen}</p>
                    </div>

                    <div>
                        <p>Categoria: {categoria}</p>
                    </div>

                    <div>
                        <p>Sub-Categoria: {subCategoria}</p>
                    </div>

                    <div>
                        <p>Material-ID: {material_id}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}