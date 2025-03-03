"use client";
import { useEffect } from "react";

export default function Video() {
    useEffect(() => {
        const video = document.getElementById("bg-video") as HTMLVideoElement;

        if (video) {
            video.play().catch((err) => console.error("Error al reproducir el video:", err));
        }
    }, []);

    return (
        <section
            id="video"
            className="
                relative text-center 
                h-auto flex justify-between 
                items-center w-full lg:px-28 
                lg:overflow-hidden py-20"
        >
            {/* Video de fondo */}
            <video
                id="bg-video"
                className="absolute top-0 left-0 w-full h-full z-[-1] lg:object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/videocleaning.webm" type="video/webm" />
                Tu navegador no soporta la etiqueta de video.
            </video>

            {/* Experience */}
            <div className="px-6 w-full lg:w-[40%] flex justify-end lg:ml-[60%] ">
                <div className="flex items-center justify-center py-6 w-full lg:py-0">
                    <div className="
                        relative 
                        bg-gray-400 
                        bg-opacity-40 
                        backdrop-blur-md 
                        px-8 py-16 
                        lg:pt-32 lg:pb-20 
                        rounded-3xl 
                        shadow-lg 
                        max-w-md 
                        w-full 
                        text-left 
                        font-sans 
                        space-y-4">
                        <p className="p-experience">20 <br/> YEARS OF EXPERIENCE</p>
                        <p className="p-experience">1.8K <br/> CUSTOMERS HAPPY</p>
                        <p className="p-experience">+8000 <br/> CLEAN SPACES</p>
                    </div>
                </div>
            </div>

        </section>
    );
}
