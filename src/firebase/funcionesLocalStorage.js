export const objectsLocalStorage = () =>{
    const userInfo = localStorage.getItem('users');
    const userLocalStorage = JSON.parse(userInfo);
    return userLocalStorage;
};
