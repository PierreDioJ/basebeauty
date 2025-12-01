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
        <section id="contact" className="relative left-1/2 -translate-x-1/2 w-screen py-10 bg-black rounded-3xl mt-10">
            <Card className="mx-auto bg-black max-w-xl border-gray-500">
                <CardHeader>
                    <CardTitle className="text-white p-3 bg-[#222222] rounded-md text-center w-full text-4xl">Обсудить проект</CardTitle>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="flex flex-col gap-6">
                            <div>
                                <Input
                                    id="title-project"
                                    type="text"
                                    placeholder="НАЗВАНИЕ ПРОЕКТА"
                                    className="bg-[#222222] text-white text-lg! font-medium placeholder:text-white border-gray-700"
                                    required
                                />
                            </div>
                            <div>
                                <Input
                                    id="telephone"
                                    type="text"
                                    placeholder="НОМЕР ТЕЛЕФОНА"
                                    className="bg-[#222222] text-white !text-lg font-medium placeholder:text-white border-gray-700"
                                    required
                                />
                            </div>
                            <div>
                                <Input
                                    id="task"
                                    type="text"
                                    placeholder="ОПИШИТЕ ЗАДАЧУ"
                                    className="bg-[#222222] text-white !text-lg font-medium placeholder:text-white border-gray-700"
                                    required
                                />
                            </div>
                            <div className="relative">
                                <Input
                                    id="file"
                                    type="file"
                                    className="absolute inset-0 opacity-0 cursor-pointer"
                                    accept=".pdf, .doc, .docx"
                                    required
                                    onChange={handleFileChange}
                                />
                                <div className="bg-[#222222] text-white uppercase font-medium py-2 px-3 rounded-md border border-gray-700 flex h-10 cursor-pointer hover:bg-[#333333] transition-colors !text-lg">
                                    <span>{fileName}</span>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <Button className="w-fit text-4xl p-8 cursor-pointer bg-[#222222] mx-auto">
                                    Отправить
                                </Button>
                            </div>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </section>
    );
}