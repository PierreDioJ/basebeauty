"use client";

import ServiceBlockProductivity from "./ServiceBlockProductivity";
import ServiceBlockDesign from "./ServiceBlockDesign";
import { useEffect, useRef } from "react";

export default function Services() {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleEnded = () => {
            video.pause(); // для надёжности
            video.currentTime = video.duration; // зафиксируем на последнем кадре
        };

        video.addEventListener('ended', handleEnded);
        return () => video.removeEventListener('ended', handleEnded);
    }, []);


    return (
        <section id="services" className="py-10">
            <h2 className="text-6xl text-white font-medium p-3 text-center bg-black rounded-3xl max-w-3xl mb-10 bg-[url('/servicebg.png')] bg-cover">Наши услуги</h2>
            <div className="grid grid-cols-[2fr_1fr] gap-15">
                <div className="flex flex-col gap-10">
                    <ServiceBlockProductivity title="ПРОИЗВОДСТВО" />
                    <ServiceBlockDesign title="ДИЗАЙН" />
                </div>
                <div>
                    <video
                        ref={videoRef}
                        src="/service.webm"
                        autoPlay
                        muted
                        playsInline
                        loop={false}
                        style={{ maxWidth: '100%', height: '100%' }}
                    />
                </div>
            </div>
        </section>
    );
}
