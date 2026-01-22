"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/project/tokobuku.png",
    title: "TOKO BUKU",
    desc: "A bookstore application is an application developed using Laravel with a MySQL database to manage book data, transactions, and store operations in a structured and efficient way.",
  },
  {
    src: "/project/sidata.png",
    title: "UI SIDATA",
    desc: "SiData is the result of UI slicing for an Android application built with Flutter, optimized from a web design into an Android-friendly, clean, responsive interface that stays true to the original design.",
  },
  {
    src: "/project/skyJourney.png",
    title: "Sky Journey",
    desc: "A UI design for an application that I created using Figma. This application helps users identify their MBTI personality type through a modern, intuitive, and easy-to-use interface.",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === slides.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="projects"
      className="w-full py-20 bg-gradient-to-b from-purple-200 to-white"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          My Projects
        </h2>

        <div className="relative overflow-hidden">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="min-w-full flex flex-col items-center"
              >
                <Image
                  src={slide.src}
                  alt={slide.title}
                  width={900}
                  height={450}
                  className="rounded-xl object-cover"
                />

                {/* Deskripsi */}
                <div className="mt-5 text-center">
                  <h3 className="text-xl font-semibold">
                    {slide.title}
                  </h3>
                  <p className="text-gray-600 mt-2 max-w-xl">
                    {slide.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full transition ${
                current === index
                  ? "bg-purple-600"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
