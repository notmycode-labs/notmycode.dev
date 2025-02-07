import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const initialValue = browser ? localStorage.getItem('showFirefoxNotice') === 'true' : null;
export const showFirefoxNotice = writable(initialValue);

if (browser) {
    if (initialValue === null) {
        showFirefoxNotice.set(true);
    }
    
    showFirefoxNotice.subscribe(value => {
        localStorage.setItem('showFirefoxNotice', String(value));
    });
}