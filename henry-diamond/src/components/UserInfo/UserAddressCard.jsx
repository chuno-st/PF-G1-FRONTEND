import React from "react";
import { NavLink } from "react-router-dom";

const UserAddressCard = ({
  username,
  email,
  calle,
  direccion,
  piso,
  departamento,
  telefono,
  dni,
  fecha_nacimiento,
  genero
}) => {
  return (
    <div>
      <h1>Mi Direccion</h1>
    
        <div>
          <p>Nombre: {username}</p>
          <p>E-mail: {email}</p>
          <p>Calle: {calle}</p>
          <p>Direccion: {direccion}</p>
          <p>Piso: {piso}</p>
          <p>Departamento: {departamento}</p>
          <p>Código postal: {codigo_postal}</p>
          <p>Departamento: {departamento}</p>
          <p>Provincia: {provincia}</p>
          <p>Localidad: {localidad}</p>
          <p>Departamento: {departamento}</p>
          <p>Telefono: {telefono}</p>
          <p>DNI: {dni}</p>
          <p>Fecha de nacimiento: {fecha_nacimiento}</p>
          <p>Género: {genero}</p>
        </div>
        <NavLink to={`/userAddressForm/`}>
          <button className={styles.cardButton}>Editar direccion</button>
        </NavLink>
    </div>
  );
};

export default UserAddressCard;