import { child, get, onValue, ref, remove, set, update } from "firebase/database";
import { FIREBASE_DBRT } from "../connect";

/**
 *
 * @param {string} userId User Id
 * @param {int} boardId Board Id (key)
 * @param {string} column todo / doing / done
 * @param {json} task Task Json
 * @returns none
 */
export async function getTasks(userId, boardId) {
  try {
    const userTasks = ref(FIREBASE_DBRT, `${userId}/boards/${boardId}`);
    return new Promise((res, rej) => {
      onValue(userTasks, (data) => {
        res(data.val());
      });
    });
  } catch (err) {
    throw new Error(err);
  }
}

export async function getTask(userId, boardId, column, taskId) {
  try {
    const userTask = ref(FIREBASE_DBRT, `${userId}/boards/${boardId}/${column}/${taskId}`);
    return new Promise((res, rej) => {
      onValue(userTask, (data) => {
        res(data.val());
      });
    });
  } catch (err) {
    throw new Error(err);
  }
}

export async function addTask(userId, boardId, column, task) {
  try {
    let snapshot = await get(
      child(ref(FIREBASE_DBRT), `${userId}/boards/${boardId}`)
    );
    boards = snapshot.val();

    if (!boards[column]) boards[column] = [];
    boards[column].push(task);

    set(ref(FIREBASE_DBRT, `${userId}/boards/${boardId}`), boards);
    return;
  } catch (err) {
    throw new Error(err);
  }
}


export function modifyTask(userId, boardId, column, taskId, task, columns) {
  try {
    let deleted = false
    columns?.forEach((col, key) => {
      if ((key+1) == task.status) {
        console.log();
        set(child(ref(FIREBASE_DBRT), `${userId}/boards/${boardId}/${col.keyName}/${taskId}`), task);
        remove(ref(FIREBASE_DBRT, `${userId}/boards/${boardId}/${column}/${taskId}`));
        deleted = true;
      }
    });

    if (!deleted) update(child(ref(FIREBASE_DBRT), `${userId}/boards/${boardId}/${column}/${taskId}`), task);
    return true;
  } catch (err) {
    throw new Error(err);
  }
}

export function deleteTask(userId, boardId, column, taskId) {
  try {
    remove(ref(FIREBASE_DBRT, `${userId}/boards/${boardId}/${column}/${taskId}`));
    return true;
  } catch (err) {
    throw new Error(err);
  }
}