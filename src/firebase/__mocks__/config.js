<<<<<<< HEAD
const createUserWithEmailAndPassword = () => new Promise((resolve) => {
  resolve(
    {
      email: 'elisabeth@gmail.com',
      password: '12345678',
    },
  );
});

export default jest.fn(() => createUserWithEmailAndPassword);

// jest.fn(() => Promise.resolve({
//   email: 'elisabeth@gmail.com',
//   passqord: '1234567',
// }));
// Promise.reject({message:"no se puedo guaradar" })

// new Promise((resolve,reject)=>{
// if(!email) reject("email invalido")
// resolve({user:'élcorreo'})
// })
//  .reject para catch  document.html.innerHTML = "<div></div>"
=======
export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve());
export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve());
export const signInWithPopup = jest.fn(() => Promise.resolve());
export const sendEmailVerification = jest.fn(() => Promise.resolve());
// jest.fn --> falsa función
>>>>>>> 9b792df6a393c6ab6ace614bcb87d293c83a3ff7
