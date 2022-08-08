<<<<<<< HEAD
export const createUserWithEmailAndPassword = jest.fn();
export const signInWithEmailAndPassword = jest.fn();
export const signInWithPopup = jest.fn();
export const sendEmailVerification = jest.fn();
// jest.fn --> falsa función
=======
// USER
export const createUserWithEmailAndPassword = jest.fn(() => Promise.resolve());
export const signInWithPopup = jest.fn((_auth_, provider) => Promise.resolve({ provider }));
export const signInWithEmailAndPassword = jest.fn(() => Promise.resolve());
export const sendEmailVerification = jest.fn(() => Promise.resolve());
export const signOut = jest.fn(() => Promise.resolve());
export const auth = jest.fn();

// POST
export const db = jest.fn();
export const collection = jest.fn((_db_, _collection_) => _collection_);
export const addDoc = jest.fn((Collection, data) => Promise.resolve({ [Collection]: data }));
export const doc = jest.fn((_db_, nameCol, idDoc) => Object({ [nameCol]: idDoc }));
export const serverTimestamp = jest.fn();
export const getDoc = jest.fn(() => Promise.resolve({}));
>>>>>>> a9ba55bba2ac3ea17cf65d5e5830375436d92e22
