'use client'

import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useState } from "react";

export default function Contact() {
    const [fileName, setFileName] = useState("Прикрепите файл");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
        } else {
            setFileName("Прикрепите файл");
        }
    };
    return (
        <section id="contact" className="relative left-1/2 -translate-x-1/2 w-screen py-16 bg-black mt-10">
            <div className="max-w-7xl mx-auto px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <Card className="bg-black border-none shadow-none">
                            <div className="p-px bg-linear-to-bl from-gray-500 via-gray-900 to-stone-200 rounded-lg">
                                <div className="bg-black rounded-lg p-6 flex flex-col gap-10">
                                    <CardHeader>
                                        <div className="p-px bg-linear-to-bl from-gray-700 via-gray-800 to-stone-400 rounded-xl">
                                            <div className="bg-black rounded-full">
                                                <CardTitle className="text-white p-3 bg-[#222222] rounded-xl text-center w-full text-5xl">Обсудить проект</CardTitle>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <form>
                                            <div className="flex flex-col gap-8">
                                                <div className="p-px bg-linear-to-tl from-gray-500 via-gray-950 to-stone-400 rounded-lg">
                                                    <div className="bg-black rounded-lg">
                                                        <Input
                                                            id="title-project"
                                                            type="text"
                                                            placeholder="НАЗВАНИЕ ПРОЕКТА"
                                                            className="bg-[#222222] text-white text-lg font-medium placeholder:text-white placeholder:text-lg border-0 rounded-lg py-6"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-px bg-linear-to-tl from-gray-500 via-gray-950 to-stone-400 rounded-lg">
                                                    <div className="bg-black rounded-lg">
                                                        <Input
                                                            id="telephone"
                                                            type="text"
                                                            placeholder="+7"
                                                            className="bg-[#222222] text-white text-lg font-medium placeholder:text-white placeholder:text-lg border-0 rounded-lg py-6"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-px bg-linear-to-tl from-gray-500 via-gray-950 to-stone-400 rounded-lg">
                                                    <div className="bg-black rounded-lg">
                                                        <Input
                                                            id="task"
                                                            type="text"
                                                            placeholder="ОПИШИТЕ ЗАДАЧУ"
                                                            className="bg-[#222222] text-white text-lg font-medium placeholder:text-white placeholder:text-lg border-0 rounded-lg py-6"
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                                <div className="p-px bg-linear-to-tl from-gray-500 via-gray-950 to-stone-400 rounded-lg">
                                                    <div className="bg-black rounded-lg relative">
                                                        <Input
                                                            id="file"
                                                            type="file"
                                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                                            accept=".pdf, .doc, .docx"
                                                            required
                                                            onChange={handleFileChange}
                                                        />
                                                        <div className="bg-[#222222] text-white uppercase font-medium py-3 px-3 rounded-lg border-0 flex h-13 cursor-pointer hover:bg-[#444444] transition-colors text-lg">
                                                            <span>{fileName}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <Button className="w-full text-4xl p-8 cursor-pointer bg-[#222222] hover:bg-[#444444] mx-auto text-white">
                                                        Отправить
                                                    </Button>
                                                </div>
                                            </div>
                                        </form>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="flex justify-center lg:justify-end flex-col gap-5 my-6">
                        <div className="p-px bg-linear-to-bl from-gray-700 via-gray-800 to-stone-400 rounded-xl">
                            <div className="bg-black rounded-full">
                                <CardTitle className="text-white p-3 bg-[#222222] rounded-xl text-center w-full text-5xl">Где мы находимся</CardTitle>
                            </div>
                        </div>
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A43a8b9689fc779a25d7a0fa2f9cff04ad88ee701dc4baaba69eeb53ca2c4e18c&amp;source=constructor" className="rounded-xl max-w-full h-[475px]"></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}