import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.API_KEY,
	authDomain: import.meta.env.API_DOMAIN,
	projectId: import.meta.env.PROJECT_ID,
	storageBucket: import.meta.env.STORAGE_BUCKET,
	messagingSenderId: import.meta.env.MESSAGING_SENDER_ID,
	appId: import.meta.env.APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
