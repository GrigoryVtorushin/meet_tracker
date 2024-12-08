import { useRef } from 'react';

function useDebounce(callback, delay) {
    const debounceTimeout = useRef(null);

    const debouncedFunction = (...args) => {
        clearTimeout(debounceTimeout.current);
        debounceTimeout.current = setTimeout(() => {
            callback(...args);
        }, delay);
    };

    return debouncedFunction;
}

export default useDebounce
