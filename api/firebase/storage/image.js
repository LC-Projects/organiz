import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { FIREBASE_STORAGE } from "../connect";

export async function upload(userId, boardId, taskId, fileName, file) {
  try {
    const fetchResponse = await fetch(file);
    const theBlob = await fetchResponse.blob();

    // Create a root reference
    const storage = FIREBASE_STORAGE;

    // Create a reference to 'mountains.jpg'
    const storageRef = ref(
      storage,
      `${userId}/${boardId}/${taskId}/images/${fileName}`
    );

    // 'file' comes from the Blob or File API
    uploadBytesResumable(storageRef, theBlob).then((snapshot) => {
      // console.log("Uploaded a blob or file!");
    });
    return;
  } catch (err) {
    throw new Error(err);
  }
}

export async function getImage(userId, boardId, taskId, fileName) {
  try {
    let image;
    let imageURI = await getDownloadURL(
      ref(FIREBASE_STORAGE, `${userId}/${boardId}/${taskId}/images/${fileName}`)
    ).then((url) => {
      // This can be downloaded directly:
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";
      xhr.onload = (event) => {
        const blob = xhr.response;
      };
      xhr.open("GET", url);
      xhr.send();

      image = url;
    });
    return image;
  } catch (err) {
    throw new Error(err);
  }
}
