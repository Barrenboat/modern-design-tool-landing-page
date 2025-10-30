import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
const Key = (props: HTMLAttributes<HTMLDivElement>) => {
    const { children, className, ...otherProps } = props;
    return (
        <div
            className={twMerge(
                "size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 group-hover:translate-y-1 transition-all duration-500 will-change-transform",
                className
            )}
            {...otherProps}
        >
            {children}
        </div>
    );
};

export default Key;
