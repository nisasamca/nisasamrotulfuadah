"use client";
import Image from "next/image";


interface FloatingLogoProps {
    src: string;
    name?: string;
    delay?: number;
}

export default function FloatingLogo({src, name, delay = 0 }: FloatingLogoProps) {
    return (
    <div style={{
        animation: `slow-bounce 4s ease-in-out infinite`,
        animationDelay: `${delay}s`,
        animationFillMode: "both",
        }}
        className="relative flex flex-col items-center group" >
        <Image
        src={src}
        alt="skill logo"
        width={64}
        height={64}
        className="select-none"
        />

        <span className="absolute bottom-full mb-2 px-2 py-1 rounded bg-gray-800 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
            {name}
        </span>
    </div>
    );
}