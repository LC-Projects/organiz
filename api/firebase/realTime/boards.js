import { ref, set } from "firebase/database";
import { FIREBASE_DBRT } from "../connect";

export async function addBoard(userId, board) {
  try {
    set(ref(FIREBASE_DBRT, `${userId}/boards`), board);
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}