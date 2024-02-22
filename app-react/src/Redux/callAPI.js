import axios from "axios";

import { store } from "./store"; // Ajouter l'importation du store
import { setUser, setToken } from "./features/userSlice"; // Ajouter l'importation de setUp

// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

export const loginUser = async (email, password, navigate) => {
  try {
    const response = await axios.post("http://localhost:3001/api/v1/user/login", { email, password });

    console.log(response.data.body);
    store.dispatch(setToken(response.data.body));
    // Afficher une alerte de succès
    alert("Connexion réussie !");
    navigate("/user-account");
    // Redirection si nécessaire
  } catch (error) {
    console.error(error);
    // Vous pouvez également afficher une alerte en cas d'erreur
    alert("Erreur de connexion !");
  }
};
