import React from "react";
import EditUserName from "../Components/EditUserName/EditUserName";
import { UseSelector, useSelector } from "react-redux";
const UserAccount = () => {
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div>
      <EditUserName />
    </div>
  );
};

export default UserAccount;
