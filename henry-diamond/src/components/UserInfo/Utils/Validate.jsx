export default function Validate(input) {
    let error = {};
    let min = 1000;
    let max = 500000;
    if (!input.name) {
      error.name = "Por favor ingresar el nombre";
    } else if (input.name.length < 8) {
      error.name = "El nombre no puede tener menos de 8 caracteres";
    }
    if (!input.description) {
      error.description = "Por favor ingresa un texto descriptivo";
    }
    if (!input.price) {
      error.price = "Por favor ingresa el precio";
    } else if (input.price < min || input.price > max) {
      error.price =`El valor del producto no puede ser menor a $${min} ni mayor a $${max}`;
    } else if ( typeof parseInt(input.price) === 'string'){
       error.price =`Por favor ingresa un valor numerico`;
    }
    if (!input.category_id) {
      error.category_id = "Por favor ingresa una categoria";
    }
    if (!input.subCategory_id) {
        error.subCategory_id = "Por favor ingresa una Sub-Categoria";
      }
    if (!input.image) {
      error.image = "Por favor ingresa una imagen";
    } else if (typeof input.image !== "string") {
      error.image = "Por favor ingresa la URL de imagen correcta";
    }
    if (!input.stock) {
      error.stock = "Por favor ingresa el stock disponible";
    }
    return error;
  }