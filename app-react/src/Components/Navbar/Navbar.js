import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/features/userSlice"; // Assurez-vous que le chemin est correct
import "../Navbar/Navbar.css";
import Logo from "../../assets/argentBankLogo.png";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log("User state in Navbar:", user); // Pour le débogage
  const handleLogout = () => {
    console.log("Logging out..."); // Pour le débogage
    dispatch(logout());
    // Rediriger vers la page de connexion si nécessaire
    // navigate("/login");
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {user.token ? (
          // Affichage lorsque l'utilisateur est connecté
          <>
            <span className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {user.username}
            </span>
            <button onClick={handleLogout} className="main-nav-item logout-button">
              Sign Out
            </button>
          </>
        ) : (
          // Affichage lorsque l'utilisateur n'est pas connecté
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
