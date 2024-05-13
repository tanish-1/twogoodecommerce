import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword , signInWithEmailAndPassword , sendPasswordResetEmail , GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// const firebaseConfig = {
//     apiKey: "AIzaSyA1EWcGL2hOdSRGGw-_gv2SHePEljT4TKY",
//     authDomain: "ecommerce-1fa46.firebaseapp.com",
//     projectId: "ecommerce-1fa46",
//     storageBucket: "ecommerce-1fa46.appspot.com",
//     messagingSenderId: "548275399968",
//     appId: "1:548275399968:web:bd665bf9b8c43b351b7b45",
//     measurementId: "G-JG62X1WDJ7",
//     databaseURL:"https://ecommerce-1fa46-default-rtdb.firebaseio.com"
//   };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  auth.languageCode = 'en';
  const provider = new GoogleAuthProvider();
  const Githubprovider = new GithubAuthProvider();

// signup
const signUpButton = document.getElementById('signup');
signUpButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const firstNameInput = document.getElementById('Ftext');
  const lastNameInput = document.getElementById('Ltext');
  const emailInput = document.getElementById('signup-email');
  const passwordInput = document.getElementById('signup-password');

  const email = emailInput.value;
  const password = passwordInput.value;


  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    alert('Account created successfully!');
    // You can do further actions after successful signup here
    // window.location.href = 'index.html';
    firstNameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
    
  } catch (error) {
    alert(error.message);
  }
});

// signin
const signInButton = document.getElementById('submit');
signInButton.addEventListener('click', async (e) => {
  e.preventDefault();
  const signInEmail = document.getElementById('signin-email').value;
  const signInPassword = document.getElementById('signin-password').value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, signInEmail, signInPassword);
    const user = userCredential.user;
    alert('Signed in successfully!');
    // Redirect or perform other actions after successful sign-in
    window.location.href = 'index.html';
  } catch (error) {
    alert(error.message);
  }
});


const forgetPBtn = document.getElementById('forgetBtn');
forgetPBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const forgetEmail = document.getElementById('forget-email');
  const email = forgetEmail.value;

  try {
    const userCredential = await sendPasswordResetEmail(auth, email);
    const user = userCredential.user;
    alert("Check your email for password reset instructions.");
  } catch (error) {
    alert(error.message);
  }
});

const google_login = document.getElementById('google');
google_login.addEventListener('click', async (e) => {
  e.preventDefault();
  signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    alert(`Signed in successfully! as ${user.displayName}`);
    window.location.href = 'index.html';
 
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
})


const github = document.getElementById('github');
github.addEventListener('click', async (e) => {
  e.preventDefault();
  signInWithPopup(auth,  Githubprovider)
  .then((result) => {
    const credential = GithubAuthProvider.credentialFromResult(result);
    alert(`Signed in successfully! as ${user.displayName}`);
    const user = result.user;
   
    window.location.href = 'index.html';
 
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  
  });
})