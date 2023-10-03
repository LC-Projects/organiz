import { child, get, onValue, push, ref, set } from "firebase/database";
import { FIREBASE_DBRT } from "../connect";

export async function addBoard(userId, board) {
  try {
    const dbRef = ref(FIREBASE_DBRT);
    let snapshot = await get(child(dbRef, `${userId}/boards`))
    boards = snapshot.val()
    if (boards == null || boards == "") {
        boards = []
    }
    boards.push(board)
    set(ref(FIREBASE_DBRT, `${userId}/boards`), boards);
    return boards


    // push(ref(FIREBASE_DBRT, `${userId}/boards`), board);
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}

export async function getBoards(userId) {
  try {
    const userBoards = ref(FIREBASE_DBRT, `${userId}/boards`);
    let res 
    onValue(userBoards, (data) => {
    //   console.log(data.val())
      // res(data.val())
      res = data.val();
    });

    return res
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}
