"use client";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function About() {
   return(
    <section
      id="about"
      className="h-screen flex items-center justify-center bg-gradient-to-b from-white to-purple-200"
    >
   {/* KIRI - ARTIKEL */}
      <div className="w-1/2 ml-20 -translate-y-12">
        <h2 className="text-4xl font-bold mb-6 text-black">About Me</h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
            My interest in the digital world grew from a desire to create comfortable and meaningful
            experiences for users. The process of understanding needs, paying attention to details,
            and crafting clear solutions has become an essential part of every project.
            <br /><br />
            Hello! I’m Nisa. I’m accustomed to working responsibly, maintaining good communication,
            and staying open to feedback. Each project is built through a calm, focused, and thoughtful process.
        </p>
      </div>

    <div className="w-1/2 flex flex-col justify-end">
        <Image
        src="/images/nisa.jpeg"
        alt="About Me Picture"
        width={400}
        height={400}
        className="rounded-full shadow-lg -translate-y-6 translate-x-24"
        />

        <p className="text-sm text-purple-600 mb-2 tracking-wide text-center">
        Front-End Developer & UI/UX Designer
        </p>

        <h2 className="text-4xl font-bold text-black text-center">
        Nisa Samrotul<br/>Fuadah
        </h2>


        {/* SOCIAL BOX */}
        <div className="flex gap-4 mt-8 mr-20 pr-20 justify-end">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            className="w-32 h-16 flex items-center justify-center
            bg-white rounded-xl shadow-md
            hover:bg-purple-500 hover:text-white
            transition duration-300 font-semibold"
          >
            LinkedIn
            <ArrowUpRight/>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            className="w-32 h-16 flex items-center justify-center
            bg-white rounded-xl shadow-md
            hover:bg-purple-500 hover:text-white
            transition duration-300 font-semibold"
          >
            Instagram
            <ArrowUpRight/>
          </a>
        </div>  
    </div>
    </section>
   );
}