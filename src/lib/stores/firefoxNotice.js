import { browser } from '$app/environment';
import { writable } from 'svelte/store';

const storedValue = browser ? localStorage.getItem('showFirefoxNotice') : 'true';
export const showFirefoxNotice = writable(storedValue === 'true');

if (browser) {
    showFirefoxNotice.subscribe(value => {
        localStorage.setItem('showFirefoxNotice', value.toString());
    });
}