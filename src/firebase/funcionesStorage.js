import {
  storage, ref, uploadBytes, getDownloadURL,
} from './config.js';

export const cargarImg = async (nameImg, file) => {
  const storageRef = ref(storage, nameImg);
  // 'file' comes from the Blob or File API
  await uploadBytes(storageRef, file).then((snapshot) => {
    console.log('cargo el archivo', snapshot);
  });
  const traerFile = await getDownloadURL(storageRef);
  console.log('url de img ', traerFile);
  return traerFile;
};
