import axios from "axios";
import { store } from "./Redux/store";
import { setUser } from "./Redux/features/userSlice";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post("URL_API/sign-in", { email, password });
    const { token, name, firstname, username } = response.data;
    store.dispatch(setUser({ token, name, firstname, username }));

    alert("Connexion reussie !");
    // Redirection
  } catch (error) {
    console.error(error);
    alert("Erreur de connexion !");
  }
};

// Fonction pour récupérer les infos utilisateur
export const fetchUserInfo = async (token) => {
  try {
    const response = await axios.get("URL_API/userinfo", { headers: { Authorization: `Bearer ${token}` } });
    const { name, firstname, username } = response.data;
    store.dispatch(setUser({ name, firstname, username }));
  } catch (error) {
    console.error(error);
  }
};
