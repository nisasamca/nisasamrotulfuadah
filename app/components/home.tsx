"use client";
import Image from "next/image";

export default function Home() {
    return (
    
    <section
        id="home"
        className="h-screen flex items-center justify-end px-24
        bg-gradient-to-b from-purple-200 to-white"
    >
    {/* kiri */}
    <div className="w-1/2 flex justify-start">
        <Image
        src="/images/girlcode.png"
        alt="Profile Picture"
        width={400}
        height={400}
        className="animate-bounce"
        />
    </div>

    {/* kanan */}
    <div className="w-1/2 flex justify-end">
        <h1 className="max-w-xl text-right text-5xl leading-relaxed text-black font-bold animate-pulse">
        Building modern,
        <br />
        responsive web
        <br />
        interfaces focused on
        <br />
        user experience.
    </h1>
    </div>
    </section>
    );
}
