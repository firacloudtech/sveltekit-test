import { writable } from 'svelte/store';
import type {} from 'firebase/app';

const authStore = writable<{
	isLoggedIn: boolean;
	user?: firebase;
}>;
