import { createPost } from '../src/firebase/funcionesFirestore';
import {
  addDoc, collection,
} from '../src/firebase/config';
import { dateTime } from '../src/view/datePost.js';

jest.mock('../src/firebase/config');

describe('createPost()', () => {
  it('Deberia subir data a coleccion posts', () => createPost('idUser', 'contentPost', 'urlImg', 'userName', 'userImg', 'status')
    .then(async () => {
      const prueba = await addDoc(collection.mock.results[0].value, addDoc.mock.calls[0][1]);
      const variable = {
        post: {
          idUser: 'idUser',
          contentPost: 'contentPost',
          urlImg: 'urlImg',
          userName: 'userName',
          userImg: 'userImg',
          status: 'status',
          time: dateTime(),
          likes: [],
        },
      };
      expect(prueba).toEqual(variable);
    }));
});
