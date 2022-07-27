export default function Validate(input) {
    let error = {};
    let min = 1000;
    let max = 500000;
    if (!input.nombre) {
      error.nombre = "Por favor ingresar el nombre";
    } else if (input.nombre.length < 8) {
      error.nombre = "El nombre no puede tener menos de 8 caracteres";
    }
    if (!input.descripcion) {
      error.descripcion = "Por favor ingresa un texto descriptivo";
    }
    if (!input.precio) {
      error.precio = "Por favor ingresa el precio";
    } else if (input.precio < min || input.precio > max) {
      error.precio =`El valor del producto no puede ser menor a $${min} ni mayor a $${max}`;
    } else if (typeof input.precio === "string"){
      error.precio =`Por favor ingresa un numero valido`;
    }
    if (!input.categoria) {
      error.categoria = "Por favor ingresa una categoria";
    }
    if (!input.subCategoria) {
        error.subCategoria = "Por favor ingresa una Sub-Categoria";
      }
    if (!input.imagen) {
      error.imagen = "Por favor ingresa una imagen";
    } else if (typeof input.imagen !== "string") {
      error.imagen = "Por favor ingresa la URL de imagen correcta";
    }
    return error;
  }