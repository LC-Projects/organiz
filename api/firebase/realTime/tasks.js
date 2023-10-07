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
    console.log(userId, boardId, column, task);
    let snapshot = await get(
      child(ref(FIREBASE_DBRT), `${userId}/boards/${boardId}/${column}`)
    );

    boards = snapshot.val();

    if (!boards) boards = [];
    boards.push(task);

    set(ref(FIREBASE_DBRT, `${userId}/boards/${boardId}/${column}`), boards);
    return;
  } catch (err) {
    throw new Error(err);
  }
}


export function modifyTask(userId, boardId, column, taskId, task, columns) {
  try {
    console.log(userId, boardId, column, taskId, task, columns);
    if (column == columns[task.status - 1].keyName) {
      update(child(ref(FIREBASE_DBRT), `${userId}/boards/${boardId}/${column}/${taskId}`), task);
    } else {
      set(child(ref(FIREBASE_DBRT), `${userId}/boards/${boardId}/${columns[task.status - 1].keyName}/${taskId}`), task);
      remove(ref(FIREBASE_DBRT, `${userId}/boards/${boardId}/${column}/${taskId}`));
    }
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