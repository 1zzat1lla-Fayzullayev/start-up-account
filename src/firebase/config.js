// Import necessary Firebase modules
import { initializeApp } from 'firebase/app'
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth'

// Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDLHUAd-QkNVJIstUI3raZ9C6wUAcauMKc',
	authDomain: 'beeon-a3d97.firebaseapp.com',
	projectId: 'beeon-a3d97',
	storageBucket: 'beeon-a3d97.appspot.com',
	messagingSenderId: '106329689569',
	appId: '1:106329689569:web:e01454d6b9064aa6df56a0',
	measurementId: 'G-W1CWZEJWEE',
}

// Initialize Firebase app
const app = initializeApp(firebaseConfig)

// Initialize Firebase Auth service
const auth = getAuth(app)

// Function to register a new user
const registerUser = async (email, password) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		)
		const user = userCredential.user
		console.log('User registered successfully:', user)
		return user
	} catch (error) {
		console.error('Error registering user:', error.message)
		throw error
	}
}

// Function to sign in an existing user
const signInUser = async (email, password) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		)
		const user = userCredential.user
		console.log('User signed in successfully:', user)
		return user
	} catch (error) {
		console.error('Error signing in:', error.message)
		throw error
	}
}

// Function to sign out the current user
const logoutUser = async () => {
	try {
		await signOut(auth)
		console.log('User signed out successfully')
	} catch (error) {
		console.error('Error signing out:', error.message)
		throw error
	}
}

export { auth, registerUser, signInUser, logoutUser }
