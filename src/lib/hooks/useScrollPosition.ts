import { useState, useEffect } from 'react';

export function useScrollPosition(debounceMs: number = 100) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const handleScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setScrollY(window.scrollY);
            }, debounceMs);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, [debounceMs]);

    return scrollY;
} 