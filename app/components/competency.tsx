"use client";
import { useState } from "react";
import FloatingLogo from "./floatinglogo";

export default function Competency() {
    const [activeTab, setActiveTab] = useState("frontend");
    return (
        <section id="competency" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-purple-100 ">
                  {/* TITLE */}
        <h2 className="text-4xl font-bold mb-4">Skills & Tools</h2>
        <p className="text-gray-600 text-center max-w-xl mb-12">
            A collection of tools and skills I use to build thoughtful, functional,
            and visually balanced digital experiences.
        </p>

      {/* TABS */}
        <div className="flex gap-4 mb-14">
            <TabButton
            label="Front End"
            isActive={activeTab === "frontend"}
            onClick={() => setActiveTab("frontend")}
            />
            <TabButton
            label="Back End"
            isActive={activeTab === "backend"}
            onClick={() => setActiveTab("backend")}
            />
            <TabButton
            label="UI / UX"
            isActive={activeTab === "uiux"}
            onClick={() => setActiveTab("uiux")}
            />
            <TabButton
            label="Tools"
            isActive={activeTab === "tools"}
            onClick={() => setActiveTab("tools")}
            />
        </div>

        {/* LOGO AREA */}
        <div className="relative h-64 flex items-center justify-center">
            {activeTab === "frontend" && (
            <div className="flex gap-20">
                <FloatingLogo src="/icons/laravel.svg" name="Laravel" delay={0} />
                <FloatingLogo src="/icons/nextjs.svg" name="Next.js" delay={0.5} />
                <FloatingLogo src="/icons/tailwind.svg" name="Tailwind CSS" delay={1} />
                <FloatingLogo src="/icons/css.svg" name="CSS" delay={1.5} />
                <FloatingLogo src="/icons/bootstrap.svg" name="Bootstrap" delay={2} />
                <FloatingLogo src="/icons/flutter.svg" name="Flutter" delay={2.5} />
            </div>
            )}

            {activeTab === "backend" && (
            <div className="flex gap-20">
                <FloatingLogo src="/icons/mysql.svg" name="MySQL" delay={0} />
                <FloatingLogo src="/icons/laravel.svg" name="Laravel" delay={0.5} />
                <FloatingLogo src="/icons/api.svg" name="REST API" delay={1}/>
            </div>
            )}

            {activeTab === "uiux" && (
            <div className="flex gap-10">
                <FloatingLogo src="/icons/design.svg" name="Design Visual" delay={0} />
                <FloatingLogo src="/icons/wireframe.svg" name="Wireframing" delay={0.5} />
                <FloatingLogo src="/icons/prototyping.svg" name="Prototyping" delay={1} />
                <FloatingLogo src="/icons/magnify.svg" name="User Research" delay={1.5} />
            </div>
            )}

            {activeTab === "tools" && (
            <div className="flex gap-10">
                <FloatingLogo src="/icons/figma.svg" name="Figma" delay={0} />
                <FloatingLogo src="/icons/github.svg" name="GitHub" delay={0} />
                <FloatingLogo src="/icons/trello.svg" name="Trello" delay={0.5} />
                <FloatingLogo src="/icons/notion.svg" name="Notion" delay={1} />
                <FloatingLogo src="/icons/vscode.svg" name="Visual Studio Code" delay={1.5} />
            </div>
            )}
        </div>

        {/* DESCRIPTION */}
        <p className="mt-10 text-gray-700">
            {activeTab === "frontend" &&
            "Turning ideas into responsive and interactive interfaces."}
            {activeTab === "backend" &&
            "Building the logic that keeps everything running smoothly."}
            {activeTab === "uiux" &&
            "Designing interfaces that feel clear, intuitive, and human."}
        </p>

            </section>
        );

        
    }
    type TabButtonProps = {
    label: string;
    isActive: boolean;
    onClick: () => void;
    };

    function TabButton({ label, isActive, onClick }: TabButtonProps) {
    return (
        <button
        onClick={onClick}
        className={`px-6 py-2 rounded-full font-medium transition-all
            ${
            isActive
                ? "bg-purple-600 text-white shadow-md"
                : "bg-white text-gray-600 hover:bg-purple-100"
            }`}
        >
        {label}
        </button>
    );
    }