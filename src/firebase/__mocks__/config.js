export const createUserWithEmailAndPassword = jest.fn((auth,email,password) => Promise.resolve({email:'élcorreo@em,ail.com', nombre:"ël nombre"}))
// Promise.reject({message:"no se puedo guaradar" })

// new Promise((resolve,reject)=>{
// if(!email) reject("email invalido")
// resolve({user:'élcorreo'})
// })
//  .reject para catch  document.html.innerHTML = "<div></div>"
