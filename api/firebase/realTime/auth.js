import { getAuth, updateEmail , updatePassword } from "firebase/auth";
import { FIREBASE_DBRT } from "../connect";

export async function updateEmailUser(email) {
    try {
        const auth = getAuth();
        updateEmail(auth.currentUser, email).then(() => {
            return true;
        }).catch((error) => {
             throw new Error(err);
        });
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }

export async function updatePasswordUser(password) {
    try {
        const auth = getAuth();
        const user = auth.currentUser;
        const newPassword = password;//getASecureRandomPassword();
        updatePassword(user, newPassword).then(() => {
            return true;
        }).catch((error) => {
             throw new Error(err);
        });
    } catch (err) {
      console.error(err);
      throw new Error(err);
    }
  }


