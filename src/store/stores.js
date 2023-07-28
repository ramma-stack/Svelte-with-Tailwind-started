import { writable, readable } from "svelte/store";

export const count = writable(0);
export const elapsedSeconds = writable(0);

export const time = readable(new Date(), (set) => {
    const interval = setInterval(() => {
        set(new Date());
        elapsedSeconds.update((value) => value + 1);
    }, 1000);

    return function stop() {
        clearInterval(interval);
    };
});

function createCounter() {
    const { subscribe, set, update } = writable(0);

    return {
        subscribe,
        increment: (size = 1) => update((n) => n + size),
        decrement: (size  = 1) => update((n) => n - size),
        reset: () => set(0),
    };
}

export const customCount = createCounter();