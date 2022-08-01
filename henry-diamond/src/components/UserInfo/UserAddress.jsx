import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUser } from "../../redux/actions/actions";
import UserAddressCard from "../UserInfo/UserAddressCard";
import UserAddressForm from "../UserInfo/UserAddressForm";

export const UserAddress = () => {
  const dispatch = useDispatch();
  const userAddress = useSelector((state) => state.userAddress);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);



  return (
    <div>
      {userAddress?.length!==0 ? (
        <UserAddressCard
          
        />
      )
    :<UserAddressForm/>}
    </div>
  );
};

//   username,
//   email,
//   calle,
//   direccion,
//   piso,
//   departamento,
//   telefono,
//   dni,
//   fecha_nacimiento,
//   genero