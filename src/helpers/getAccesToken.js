import { auth } from "../firebase/firebase";

export const getAccesToken = () => {
  return auth.currentUser.getIdToken();
};
