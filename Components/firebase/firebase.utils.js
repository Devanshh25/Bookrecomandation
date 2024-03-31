// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithRedirect, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, signOut } from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCEnFoxUP8xehJCWrC5rqMtw_VGGhdiYAc",
    authDomain: "collegeproject-75d6c.firebaseapp.com",
    projectId: "collegeproject-75d6c",
    storageBucket: "collegeproject-75d6c.appspot.com",
    messagingSenderId: "404205032952",
    appId: "1:404205032952:web:1439d66596fbf57546320d",
    measurementId: "G-VR6P37JZ1Q"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

const Fprovider = new FacebookAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);
export const signInWithFacebookPopup = () => FacebookAuthProvider(auth, Fprovider);


export const db = getFirestore();


export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const usersnapshot = await getDoc(userDocRef);
    console.log(usersnapshot);
    console.log(usersnapshot.exists());

    if (!usersnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName, email, createdAt, ...additionalInfo
            });
        } catch (error) {
            console.log('error creating the user', error.message);
        }
    }
    return userDocRef;

}


export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
}


export const signOutUser = async () => await signOut(auth);