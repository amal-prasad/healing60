"use client";

import { useEffect, useState } from "react";

interface Bubble {
    id: number;
    size: number;
    left: number;
    duration: number;
    delay: number;
}

export default function Bubbles() {
    const [bubbles, setBubbles] = useState<Bubble[]>([]);

    useEffect(() => {
        const generatedBubbles = Array.from({ length: 12 }).map((_, i) => ({
            id: i,
            size: Math.random() * 4 + 2, // 2px to 6px
            left: Math.random() * 100, // 0% to 100%
            duration: Math.random() * 20 + 25, // 25s to 45s for slow calmness
            delay: Math.random() * 15, // 0s to 15s
        }));
        setBubbles(generatedBubbles);
    }, []);

    if (bubbles.length === 0) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-[-40] overflow-hidden" aria-hidden="true">
            {bubbles.map((bubble) => (
                <div
                    key={bubble.id}
                    className="absolute bottom-[-20px] rounded-full bg-white/20"
                    style={{
                        width: `${bubble.size}px`,
                        height: `${bubble.size}px`,
                        left: `${bubble.left}%`,
                        animation: `floatUp ${bubble.duration}s ease-in-out ${bubble.delay}s infinite`,
                    }}
                />
            ))}
        </div>
    );
}
