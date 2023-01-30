import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBBi0DnP-qpLDpSl0cfdv7A2IEuj4hC1Kg",
	authDomain: "anonime-e5ba5.firebaseapp.com",
	projectId: "anonime-e5ba5",
	storageBucket: "anonime-e5ba5.appspot.com",
	messagingSenderId: "662230993638",
	appId: "1:662230993638:web:07aa169872d3ce62918927",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
