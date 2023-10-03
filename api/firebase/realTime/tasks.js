import { child, get, ref, set } from "firebase/database";
import { FIREBASE_DBRT } from "../connect";

const database = FIREBASE_DBRT;

export async function addTask(userId, column, task) {
  try {
    const dbRef = ref(database);
    
    let snapshot = await get(child(dbRef, `${userId}/${column}`));
    // console.log(snapshot);

    let tasks = [snapshot.val()];
    if (tasks == null || tasks == "") tasks = [];
    console.log(tasks);

    tasks.push(task);
    // set(ref(database, `${userId}/${column}`), tasks);

    return tasks;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}
