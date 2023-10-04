import { child, get, ref, set } from "firebase/database";
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
    const dbRef = ref(FIREBASE_DBRT);
    let snapshot = await get(child(dbRef, `${userId}/boards/0`));
    
    
    boards = snapshot.val();
    console.log(boards);
    // if (boards == null || boards == "") return;
    
    
    // let getBoard;
    // getBoard = (boards.length > 1) ? boards.find((_, key) => key == boardId) : boards[0];
    
    // if (!getBoard[column]) getBoard[column] = [];
    // getBoard[column] = [task]

    // getBoard[column].push(task);
    
    // // let newBoard = [getBoard];
    // console.log(getBoard);

    // set(ref(FIREBASE_DBRT, `${userId}/boards`), newBoard);
    return;
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}
