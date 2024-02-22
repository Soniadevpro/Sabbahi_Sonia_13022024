// import React from "react";
// import { useDispatch } from "react-redux";
// import { logout } from "../../Redux/features/userSlice";
// import { useNavigate } from "react-router-dom";

// const LogoutButton = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate("/login").catch((error) => {
//       // Gérer l'erreur de navigation ici, si nécessaire
//       console.error("Failed to navigate to login page:", error);
//     });
//   };

//   return (
//     <button onClick={handleLogout} className="logout-button">
//       Déconnexion
//     </button>
//   );
// };

// export default LogoutButton;
