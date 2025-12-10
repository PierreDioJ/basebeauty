import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroWorks() {
    return (
        <div className="flex flex-col gap-4 w-full">
            {/* Верхнее большое изображение */}
            <div className="relative w-full h-64 sm:h-80 overflow-hidden rounded-2xl sm:rounded-3xl">
                <Image
                    src="/img1.webp"
                    alt="Работа верх"
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            
            {/* Нижняя часть - изображения и кнопка */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Левое изображение - такая же высота как правое фото + кнопка */}
                <div className="relative w-full h-full sm:h-full min-h-[200px] overflow-hidden rounded-2xl sm:rounded-3xl">
                    <Image
                        src="/img1.webp"
                        alt="Работа низ левая"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Правая часть - изображение и кнопка */}
                <div className="flex flex-col gap-4 h-full">
                    {/* Правое изображение */}
                    <div className="relative w-full h-48 sm:h-56 overflow-hidden rounded-2xl sm:rounded-3xl">
                        <Image
                            src="/img1.webp"
                            alt="Работа низ правая"
                            fill
                            className="object-cover"
                        />
                    </div>
                    
                    {/* Кнопка */}
                    <Link href="/works" className="w-full rounded-full border-2 border-[#00D89F] py-3 text-center text-lg sm:text-xl font-semibold text-white hover:bg-[#00D89F] hover:text-black transition-colors">
                        Ещё работы
                    </Link>
                </div>
            </div>
        </div>
    );
}
