import { useEffect, useState } from "react";

export function useIsVisible(ref) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (ref.current) {
                const { top, bottom } = ref.current.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                const isVisible =  (top <= windowHeight-100)
                setIsVisible(isVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check visibility on initial render

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [ref]);

    return isVisible;
}
