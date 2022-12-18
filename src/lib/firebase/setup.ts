import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getDatabase, connectDatabaseEmulator } from 'firebase/database';

import {
	PUBLIC_FIREBASE_API_KEY,
	PUBLIC_FIREBASE_AUTH_DOMAIN,
	PUBLIC_FIREBASE_PROJECT_ID,
	PUBLIC_FIREBASE_STORAGE_BUCKET,
	PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
	PUBLIC_FIREBASE_APP_ID
} from '$env/static/public';
import { readable } from 'svelte/store';
import { browser } from '$app/environment';
import type { FirebaseApp, FirebaseOptions } from 'firebase/app';

const db = getFirestore();
const auth = getAuth();
const realtimedb = getDatabase();

const firebaseConfig: FirebaseOptions = {
	apiKey: PUBLIC_FIREBASE_API_KEY,
	authDomain: PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
	appId: PUBLIC_FIREBASE_APP_ID
};

function createApp() {
	let app: FirebaseApp;

	const { subscribe } = readable<FirebaseApp>(undefined, (set) => {
		async function init() {
			if (!app) {
				const { initializeApp } = await import('firebase/app');
				app = initializeApp(firebaseConfig);
			}
			set(app);
		}

		if (browser) init();
	});
	return subscribe;
}

if (!import.meta.env.PROD) {
	connectFirestoreEmulator(db, 'localhost', 8080);
	connectAuthEmulator(auth, 'http://localhost:9099');
	connectDatabaseEmulator(realtimedb, 'localhost', 9000);
}

export const app = createApp();
