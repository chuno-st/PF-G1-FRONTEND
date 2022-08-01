import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserAddress } from "../../redux/actions/actions";
//import UserAddressCard from "../UserProfile/UserAddressCard";
//import {UserAddressForm} from "../UserProfile/UserAddressForm";

export const UserAddress = () => {
  const dispatch = useDispatch();
  const userAddress = useSelector((state) => state.userAddress);

  useEffect(() => {
    dispatch(getUserAddress());
  }, [dispatch]);



  return (
    <div>
      {userAddress?.length!==0 ? (
        <UserAddressCard
          address={userAddress[0]?.address}
          name={userAddress[0]?.name}
          city={userAddress[0]?.city}
          province={userAddress[0]?.province}
          phone_number={userAddress[0]?.phone_number}
          notes={userAddress[0]?.notes}
        />
      )
    :<UserAddressForm/>}
    </div>
  );
};