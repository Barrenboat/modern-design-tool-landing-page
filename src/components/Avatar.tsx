import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import Image, { StaticImageData } from "next/image";

const Avatar = (
    props: {
        src: StaticImageData;
        alt: string;
    } & HTMLAttributes<HTMLDivElement>
) => {
    const { src, alt, className, ...otherProps } = props;
    return (
        <div
            className={twMerge(
                "size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900",
                className
            )}
            {...otherProps}
        >
            <Image src={src} alt={alt} className="rounded-full" />
        </div>
    );
};

export default Avatar;
