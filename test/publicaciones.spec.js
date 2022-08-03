import MockFirebase from 'mock-cloud-firestore';
import { createPost, getPostBD } from '../src/firebase/funcionesFirestore.js';

const fixtureData = {
  __collection__: {
    post: {
      __doc__: {
        a01: { // id del documento
          idUser: 'user1',
          contentPost: 'hola que hace',
          urlImg: '',
          userName: 'Elisabteth',
          userImg: '',
          status: 'público',
        },
        a02: {
          idUser: 'user2',
          contentPost: 'bienvenidos',
          urlImg: '',
          userName: 'Myriam',
          userImg: '',
          status: 'público',
        },
      },
    },
  },
};
// isNaiveSnapshotListenerEnabled es un objeto que escucha
// las actualizaciones que se agregan y esta atento al onsnapsho
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('createPost()', () => {
  it('debería agregar un post', (done) => createPost('01', 'post', '', 'Maria', '', 'publico')
    .then(() => {
      const callback = (post) => {
        console.log(post);
        done();
      };
      getPostBD(callback);
    }));
});
