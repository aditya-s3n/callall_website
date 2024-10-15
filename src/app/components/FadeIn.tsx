import "../css/landing.css";
import { useState, useRef, useEffect, ReactNode } from "react";

function FadeIn({ children, className }: { children: ReactNode, className : string }) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setVisible(entry.isIntersecting);
                }
            });
        });

        if (domRef.current) {
            observer.observe(domRef.current);
        }

        return () => {
            if (domRef.current) {
                observer.unobserve(domRef.current);
            }
        };
    }, []);

    return (
        <div
            className={`${className} ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {children}
        </div>
    );
}

export default FadeIn;
