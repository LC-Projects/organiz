import { child, get, onValue, push, ref, set } from "firebase/database";
import { FIREBASE_DBRT } from "../connect";

export async function addBoard(userId, board) {
  try {
    let snapshot = await get(child(ref(FIREBASE_DBRT), `${userId}/boards`));
    boards = snapshot.val();
    if (boards == null || boards == "") {
      boards = [];
    }
    boards.push(board);
    set(ref(FIREBASE_DBRT, `${userId}/boards`), boards);
    return boards;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

export async function getBoards(userId) {
  try {
    const userBoards = ref(FIREBASE_DBRT, `${userId}/boards`);
    return new Promise((res, rej) => {
      onValue(userBoards, (data) => {
        res(data.val());
      });
    });
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}
