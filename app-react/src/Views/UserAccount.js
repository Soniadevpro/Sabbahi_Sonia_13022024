import React from "react";
import EditUserName from "../Components/EditUserName/EditUserName";
import { useSelector } from "react-redux";
const UserAccount = () => {
  // Utilisation de useSelector : Le hook useSelector permet d'accéder à l'état Redux. Ici, vous extrayez l'état user et l'affichez dans la console.
  const user = useSelector((state) => state.user);
  console.log(user);
  return (
    <div>
      <EditUserName />
    </div>
  );
};

export default UserAccount;
