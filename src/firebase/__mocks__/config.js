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
