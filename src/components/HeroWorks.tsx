import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function HeroWorks() {
    return (
        <div className="flex flex-col gap-4 w-full max-w-2xl">
            <AspectRatio ratio={16 / 9} className="overflow-hidden rounded-3xl">
                <Image
                    src="/img1.webp"
                    alt="Работа верх"
                    fill
                    className="object-cover"
                />
            </AspectRatio>
            <div className="flex flex-row gap-4 items-stretch">
                <AspectRatio
                    ratio={16 / 9}
                    className="overflow-hidden rounded-3xl flex-1 max-w-xs"
                >
                    <Image
                        src="/img1.webp"
                        alt="Работа низ"
                        fill
                        className="object-cover"
                    />
                </AspectRatio>

                <div className="flex h-full w-full flex-col justify-between">
                    <div className="relative flex-1 w-full">
                        <AspectRatio
                            ratio={16 / 16}
                            className="overflow-hidden rounded-3xl flex-1 max-w-md"
                        >
                            <Image
                                src="/img1.webp"
                                alt="Работа низ"
                                fill
                                className="object-cover rounded-3xl"
                            />
                        </AspectRatio>

                    </div>
                    <Link href="/works" className="mt-4 w-full rounded-full border-2 border-[#00D89F] py-2 text-center text-xl font-semibold text-white hover:bg-[#00D89F] hover:text-black transition-colors">
                        Ещё работы
                    </Link>
                </div>
            </div>
        </div>
    );
}
