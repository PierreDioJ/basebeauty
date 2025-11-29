import React from 'react';
import ServiceBlockItem from "./ServiceBlockItem";

export default function ServiceBlockProductivity({ title }: { title: string }) {

    const services: (string | React.ReactNode)[] = [<>Массывые<br />мероприятия</>, <>Телевизионные<br />студии</>, <>Оформление<br />концертов</>, <>Частные<br />мероприятия</>, <>Оформление<br />выстовочных пространств</>, "МАФЫ"];

    return (
        <div className="max-w-3xl w-full relative bg-black p-8 rounded-lg overflow-hidden bg-[url('/servicebg.png')] bg-repeat bg-size-[100%_auto]">
            <div className="relative z-10">
                <h3 className="w-fit rounded-xl bg-[#1DCD9F] px-6 py-3 text-white mb-8 font-semibold text-4xl">
                    {title}
                </h3>
                <div className="flex flex-wrap gap-4 text-2xl items-center">
                    {services.map((service, index) => (
                        <ServiceBlockItem key={index} title={service} />
                    ))}
                </div>
            </div>
        </div>
    );
}