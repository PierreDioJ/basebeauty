import { ReactNode } from "react";

type HeroAdvantageProps = {
    title: string;
    description: string;
    icon: ReactNode;
};

export default function HeroAdvantage({
    title,
    description,
    icon,
}: HeroAdvantageProps) {
    return (
        <li className="flex w-full items-start justify-between rounded-xl bg-[#222222] px-6 py-5 text-white h-35">
            <div className="space-y-1 pr-4">
                <h3 className="text-2xl font-semibold leading-snug">{title}</h3>
                <p className="text-sm leading-snug text-[#E4E4E4]">{description}</p>
            </div>
            <div className="mt-1 flex items-start justify-end text-white">
                {icon}
            </div>
        </li>
    );
}
