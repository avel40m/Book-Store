import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAwY2i5LKUFyJqPilJAwXNGR2fCBDoINJw",
  authDomain: "bookworm-3e6d2.firebaseapp.com",
  projectId: "bookworm-3e6d2",
  storageBucket: "bookworm-3e6d2.appspot.com",
  messagingSenderId: "444449291995",
  appId: "1:444449291995:web:982aea6ac94f3df92216fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;