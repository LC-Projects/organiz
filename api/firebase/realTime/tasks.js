import { child, get, onValue, push, ref, set } from "firebase/database";
import { FIREBASE_DBRT } from "../connect";

/**
 *
 * @param {string} userId User Id
 * @param {int} boardId Board Id (key)
 * @param {string} column todo / doing / done
 * @param {json} task Task Json
 * @returns none
 */
export async function addTask(userId, boardId, column, task) {
  try {
    let snapshot = await get(
      child(ref(FIREBASE_DBRT), `${userId}/boards/${boardId}`)
    );
    boards = snapshot.val();

    if (!boards[column]) boards[column] = [task];
    boards[column].push(task);

    set(ref(FIREBASE_DBRT, `${userId}/boards/${boardId}`), boards);
    return;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}


export async function getTasks(userId, boardId) {
  try {
    const userTasks = ref(FIREBASE_DBRT, `${userId}/boards/${boardId}`);
    return new Promise((res, rej) => {
      onValue(userTasks, (data) => {
        res(data.val());
      });
    });
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}