import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "./connect";

const auth = FIREBASE_AUTH;

export async function createUser(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        return user
    }
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw new Error(`${errorCode}: ${errorMessage}`)
    }
}

export async function connectUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        return user
    }
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw new Error(`${errorCode}: ${errorMessage}`)
    }
}

import { getAuth, deleteUser } from "firebase/auth";


export async function deleteUser() {
    try {
        const auth = getAuth();
        const user = auth.currentUser;

        deleteUser(user).then(() => {
        return true;
        }).catch((error) => {
                throw new Error(error)
        });
    }
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw new Error(`${errorCode}: ${errorMessage}`)
    }
}