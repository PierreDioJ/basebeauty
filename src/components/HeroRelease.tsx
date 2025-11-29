import { Clock, ClockArrowUp, Flame, Gem, Users } from "lucide-react";
import HeroAdvantage from "./HeroAdvantage";
import { Button } from "./ui/button";

export default function HeroRelease() {
    
    const advantages = [
        {
            title: "Опытная команда",
            description: "Справится с любой задачей",
            icon: <Users size={40} />,
        },
        {
            title: "Мощное производство",
            description: "Позволяет делать любой декор",
            icon: <Flame size={40} />,
        },
        {
            title: "25+ лет",
            description: "Уверенно работаем",
            icon: <Clock size={40} />,
        },
        {
            title: "Работа в сжатые сроки",
            description: "Успеем без потери качества",
            icon: <ClockArrowUp size={40} />,
        },
        {
            title: "Цена качество",
            description: "Используем лучшие материалы",
            icon: <Gem size={40} />,
        },
    ];

    return (
        <div className="rounded-xl bg-[#111111] p-6 text-white max-w-xl w-full flex-1">
            <h1 className="text-6xl font-semibold text-[#00D89F] mb-6">
                Реализуем все ваши идеи
            </h1>

            <div className="flex flex-col gap-6">
                <div className="flex gap-4">
                    <ul className="flex flex-1 flex-col gap-3">
                        <HeroAdvantage {...advantages[0]} />
                        <HeroAdvantage {...advantages[2]} />
                    </ul>
                    <ul className="flex flex-1 flex-col gap-3">
                        <HeroAdvantage {...advantages[1]} />
                        <HeroAdvantage {...advantages[3]} />
                    </ul>
                </div>

                <div className="flex justify-center">
                    <ul>
                        <HeroAdvantage {...advantages[4]} />
                    </ul>
                </div>

                <Button className="mt-3 w-full rounded-full border-2 border-[#00D89F] py-2 text-center text-xl font-semibold text-white hover:bg-[#00D89F] hover:text-black transition-colors">
                    Отправить бриф
                </Button>
            </div>
        </div>
    );
}
