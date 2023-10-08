import { child, get, onValue, ref, remove, set, update } from "firebase/database";
import { FIREBASE_DBRT } from "../connect";

export async function getBoards(userId) {
  try {
    const userBoards = ref(FIREBASE_DBRT, `${userId}/boards`);
    return new Promise((res, rej) => {
      onValue(userBoards, (data) => {
        res(data.val());
      });
    });
  } catch (err) {
    throw new Error(err);
  }
}

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
    throw new Error(err);
  }
}

export async function getBoard(userId, boardId) {
  try {
    const userBoard = ref(FIREBASE_DBRT, `${userId}/boards/${boardId}`);
    return new Promise((res, rej) => {
      onValue(userBoard, (data) => {
        res(data.val());
      });
    });
  } catch (err) {
    throw new Error(err);
  }
}

export function modifyBoard(userId, boardId, board) {
  try {
    update(child(ref(FIREBASE_DBRT), `${userId}/boards/${boardId}`), board );
    return true;
  } catch (err) {
    throw new Error(err);
  }
}

export function deleteBoard(userId, boardId) {
  try {
    remove(ref(FIREBASE_DBRT, `${userId}/boards/${boardId}`));
    return true;
  } catch (err) {
    throw new Error(err);
  }
}