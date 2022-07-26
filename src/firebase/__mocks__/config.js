<<<<<<< HEAD
export const createUserWithEmailAndPassword = jest.fn((auth,email,password) => Promise.resolve({email:'elcorreo@email.com', nombre:"el nombre"}))
=======
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
>>>>>>> 676d00e75fcf7f754e0de51501e151ca09015f55
// Promise.reject({message:"no se puedo guaradar" })

// new Promise((resolve,reject)=>{
// if(!email) reject("email invalido")
// resolve({user:'élcorreo'})
// })
//  .reject para catch  document.html.innerHTML = "<div></div>"
