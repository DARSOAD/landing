"use client";
import { useEffect } from "react";


export default function Video({ url }: { url: string }) {
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
                lg:overflow-visible py-20
                lg:h-[70vh]" // Permitir que el contenido sobresalga en pantallas grandes
        >
            {/* Video de fondo */}
            <video
                id="bg-video"
                className="
                    absolute top-0 left-0 
                    w-full h-full z-[-1] 
                    lg:object-cover 
                    transform scale-x-[-1]"  // Aplica el efecto espejo
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={url} type="video/webm" />
                Your browser does not support the video tag
            </video>

            {/* Experience */}
            <div className="px-6 w-full lg:w-[40%] flex justify-end lg:ml-[60%] relative">
                <div className="relative flex items-center justify-center py-6 w-full lg:py-0">
                    <div className="
                        relative
                        bg-gray-400 
                        backdrop-blur-md 
                        px-8 py-16 
                        rounded-3xl 
                        max-w-md 
                        w-full 
                        text-left 
                        font-sans 
                        space-y-4
                        lg:absolute 
                        lg:-top-60 
                        lg:left-1/2 
                        lg:-translate-x-1/2 
                        lg:py-28 
                        lg:z-10
                        lg:space-y-12
                        bg-opacity-10 
                        ">
                        <p className="p-experience">20 <br/> YEARS OF EXPERIENCE</p>
                        <p className="p-experience">1.8K <br/> CUSTOMERS HAPPY</p>
                        <p className="p-experience">+8000 <br/> CLEAN SPACES</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
