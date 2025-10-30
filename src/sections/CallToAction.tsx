"use client";

import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
    const animation = useRef<AnimationPlaybackControls>();
    const [scope, animate] = useAnimate();
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        animation.current = animate(
            scope.current,
            { x: "-50%" },
            { duration: 30, ease: "linear", repeat: Infinity }
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (animation.current) animation.current.speed = isHovered ? 0.5 : 1;
    }, [isHovered]);

    return (
        <section className="py-24">
            <div className="overflow-x-clip py-4 px-2 flex">
                <motion.div
                    ref={scope}
                    className="flex flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium group cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {Array.from({ length: 10 }, (_, index) => (
                        <div key={index} className="flex items-center gap-14">
                            <span className="text-lime-400 text-7xl">
                                &#10038;
                            </span>
                            <span className="group-hover:text-lime-400">
                                Try it for free
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
