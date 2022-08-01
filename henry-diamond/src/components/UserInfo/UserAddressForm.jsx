import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { postUserAddress, updateUserAddress, getUser } from "../../actions/actions";
import swal from 'sweetalert'


export default function UserAddressForm() {
    const dispatch = useDispatch();
    const [validator, setValidator] = useState("");
    const { id } = useParams();
    const user = useSelector((state) => state.user);
    const [updated, setUpdated] = useState(false);
    const adressId = user.id;
    const navigate = useNavigate()
  
  
  
    const [dataState, setDataState] = useState({
      nombre: user.nombre,
      apellido: user.apellido,
      dni: user.dni,
      telefono: user.telefono,
      calle: user.calle,
      numero: user.numero,
      ciudad: user.ciudad,
      provincia: user.provincia,
      codigo_postal: user.codigo_postal,
    });
  
    useEffect(()=>{
      dispatch(getUser())
    },[])
  
    useEffect(() => {
      setDataState({
        nombre: user.nombre,
        apellido: user.apellido,
        dni: user.dni,
        telefono: user.telefono,
        calle: user.calle,
        numero: user.numero,
        ciudad: user.ciudad,
        provincia: user.provincia,
        codigo_postal: user.codigo_postal,
      });
    }, [user]);
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (!dataState.nombre) {
        setValidator("El nombre del contacto es requerido");
      } else if (!dataState.apellido) {
        setValidator("El apellido de contacto es requerido");
      } else if (!dataState.dni) {
        setValidator("El DNI del contacto es requerido");
      } else if (!dataState.telefono) {
        setValidator("El teléfono del contacto es requerido"); 
      } else if (!dataState.calle) {
        setValidator("La calle del envio es requerida");      
      } else if (!dataState.numero) {
        setValidator("El número del domicilio para el envio es requerido");
      } else if (!dataState.ciudad) {
        setValidator("La ciudad es requerida");
      } else if (!dataState.provincia) {
        setValidator("La provincia es requerida");
      } else if (!dataState.codigo_postal) {
        setValidator("El código postal es requerido");
      } else {
        if (dataState) {
          if (user.length === 0) {
          
          dispatch(postUserAddress(dataState))
           return swal({
              title: "Direccion creada corectamente",
              icon: "success",
              button: "Aceptar",})
              .then(()=>{
              window.location.reload()
              })
          } else  {
           
            dispatch(updateUserAddress(adressId, dataState));
            return swal({
              title: "Direccion actualizada corectamente",
              icon: "success",
              button: "Aceptar",})
              .then(()=>{
                navigate("/useraddress");
              })
  
          }
        }
        setValidator("");
        setDataState({
          nombre: "",
          apellido: "",
          dni: "",
          telefono: "",
          calle: "",
          numero: "",
          ciudad: "",
          provincia: "",
          codigo_postal: "",        
        });
        document.getElementById("form").reset();
      }
    };
  
    if (id && user && !updated) {
      setDataState({
        ...dataState,
        nombre: user.nombre,
        apellido: user.apellido,
        dni: user.dni,
        telefono: user.telefono,
        calle: user.calle,
        numero: user.numero,
        ciudad: user.ciudad,
        provincia: user.provincia,
        codigo_postal: user.codigo_postal,
      });
      setDataState(!updated);
    }
  
    const handleChange = (e) => {
      e.preventDefault();
      setDataState({
        ...dataState,
        [e.target.name]: e.target.value,
      });
    };


  return (
    <div >
      <div >
        {id ? (
          <h1>Actualiza tus datos envio</h1>
        ) : (
          <h1>Completa tus datos de envio</h1>
        )}

        <form
          id="form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div>
            <label>NOMBRE:</label>
            <input
              required
              placeholder="Nombre"
              type="text"
              name="name"
              key="name"
              value={dataState.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>APELLIDO:</label>
            <input
              required
              placeholder="Apellido"
              type="text"
              name="lastname"
              key="name"
              value={dataState.lastname}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>DNI:</label>
            <input
              required
              placeholder="dni"
              name="dni"
              type="number"
              key="dni"
              value={dataState.dni}
              onChange={handleChange}
            />
          </div>


          <div>
            <label>TELEFONO:</label>
            <input
              required
              placeholder="Telefono"
              name="phone_number"
              type="number"
              key="phone"
              value={dataState.phone_number}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>CALLE:</label>
            <input
              placeholder="Direccion"
              type="text"
              name="address"
              key="address"
              value={dataState.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>NÚMERO:</label>
            <input
              placeholder="Direccion"
              type="number"
              name="number"
              key="number"
              value={dataState.number}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>CIUDAD:</label>
            <input
              placeholder="Ciudad"
              type="text"
              name="city"
              key="city"
              value={dataState.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>PROVINCIA:</label>
            <input
              placeholder="Provincia"
              type="text"
              name="province"
              key="province"
              value={dataState.province}
              onChange={handleChange}
            />
          </div>
          <div>
              <label>CODIGO POSTAL:</label>
              <input
                placeholder="Codigo Postal"
                type="text"
                name="zipcode"
                value={dataState.postal}
              />
            </div>

          
          {validator && (
            <div>
              <h3>{validator}</h3>
            </div>
          )}
          <div>
            <button
              type="submit"
              key="submit"
              value="submit"
              id="form_button"
              onChange={handleChange}
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};