import { getAuth, updateEmail , updatePassword } from "firebase/auth";

export async function updateEmailUser(email) {
    try {
        const auth = getAuth();
        updateEmail(auth.currentUser, email).then(() => {
            return true;
        }).catch((error) => {
             throw new Error(err);
        });
    } catch (err) {
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
             throw new Error(error);
        });
    } catch (err) {
      throw new Error(err);
    }
  }


