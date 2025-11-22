import Image from "next/image";

export default function Portfolio() {
    return (
        <section id="portfolio">
            <h2 className="text-2xl text-white font-medium pb-10">Портфолио</h2>
            <div className="grid grid-cols-6 grid-rows-8 gap-4 min-h-[900px]">
                <div className="col-span-4 row-span-3 col-start-1 row-start-1">
                    <div className="group relative h-full w-full overflow-hidden rounded-3xl cursor-pointer transition hover:scale-101">
                        <Image
                            src="/img1.webp"
                            alt="Работа 1"
                            fill
                            className="object-cover"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 from-black/70 to-transparent px-4 pb-3 pt-6 text-lg font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-linear-to-t">
                            Название
                        </div>
                    </div>
                </div>
                <div className="col-span-2 row-span-2 col-start-5 row-start-1">
                    <div className="group relative h-full w-full overflow-hidden rounded-3xl cursor-pointer transition hover:scale-101">
                        <Image
                            src="/img1.webp"
                            alt="Работа 2"
                            fill
                            className="object-cover"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 from-black/70 to-transparent px-4 pb-3 pt-6 text-lg font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-linear-to-t">
                            Название
                        </div>
                    </div>
                </div>
                <div className="col-span-2 row-span-2 col-start-5 row-start-3">
                    <div className="group relative h-full w-full overflow-hidden rounded-3xl cursor-pointer transition hover:scale-101">
                        <Image
                            src="/img1.webp"
                            alt="Работа 3"
                            fill
                            className="object-cover"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 from-black/70 to-transparent px-4 pb-3 pt-6 text-lg font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-linear-to-t">
                            Название
                        </div>
                    </div>
                </div>
                <div className="col-span-2 row-span-4 col-start-5 row-start-5">
                    <div className="group relative h-full w-full overflow-hidden rounded-3xl cursor-pointer transition hover:scale-101">
                        <Image
                            src="/img1.webp"
                            alt="Работа 4"
                            fill
                            className="object-cover"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 from-black/70 to-transparent px-4 pb-3 pt-6 text-lg font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-linear-to-t">
                            Название
                        </div>
                    </div>
                </div>
                <div className="col-span-2 row-span-2 col-start-1 row-start-4">
                    <div className="group relative h-full w-full overflow-hidden rounded-3xl cursor-pointer transition hover:scale-101">
                        <Image
                            src="/img1.webp"
                            alt="Работа 5"
                            fill
                            className="object-cover"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 from-black/70 to-transparent px-3 pb-2 pt-4 text-base font-semibold text-white opacity-0 transition-opacity bg-linear-to-t duration-200 group-hover:opacity-100">
                            Название
                        </div>
                    </div>
                </div>
                <div className="col-span-2 row-span-2 col-start-3 row-start-4">
                    <div className="group relative h-full w-full overflow-hidden rounded-3xl cursor-pointer transition hover:scale-101">
                        <Image
                            src="/img1.webp"
                            alt="Работа 6"
                            fill
                            className="object-cover"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-3 pb-2 pt-4 text-base font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                            Название
                        </div>
                    </div>
                </div>
                <div className="col-span-4 row-span-3 col-start-1 row-start-6">
                    <div className="group relative h-full w-full overflow-hidden rounded-3xl cursor-pointer transition hover:scale-101">
                        <Image
                            src="/img1.webp"
                            alt="Работа 7"
                            fill
                            className="object-cover"
                        />
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 from-black/70 to-transparent px-4 pb-3 pt-6 text-lg font-semibold text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 bg-linear-to-t">
                            Название
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
