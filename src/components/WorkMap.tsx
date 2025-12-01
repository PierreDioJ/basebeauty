// components/WorkMap.tsx
'use client';

import { useState, useEffect } from 'react';

export default function WorkMap() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Размеры SVG — широкий и высокий, как на скриншоте
    const svgWidth = 1200;
    const svgHeight = 800;

    // Масштаб для адаптивности (база 800x600)
    const scale = 1.4;

    // Новые координаты — расположены как на целевой картинке (2)
    const nodes = {
        brief: { x: 225 * scale, y: 300 * scale },         // Принятие брифа
        design: { x: 400 * scale, y: 10 * scale },        // Разработка дизайна 
        approval: { x: 600 * scale, y: 40 * scale },      // Осмечивание-согласование
        tech: { x: 850 * scale, y: -200 * scale },          // Тех проработка
        production: { x: 1100 * scale, y: -200 * scale },    // Производство
        delivery: { x: 900 * scale, y: -100 * scale },      // Доставка
        assembly: { x: 600 * scale, y: -100 * scale },      // Монтаж
    };

    // Типы для узлов и стрелок
    type Node = { x: number; y: number };
    type ArrowConfig = {
        startOffset: { x: number; y: number };
        endOffset: { x: number; y: number };
        curveIntensity: number;
        curveDirection: 'up' | 'down' | 'left' | 'right';
    };
    type ArrowConfigs = {
        [key: string]: ArrowConfig;
    };

    // Параметры стрелок для ручной настройки
    const arrowConfigs: ArrowConfigs = {
        'brief-to-design': {
            startOffset: { x: -300, y: 15 }, // смещение начальной точки
            endOffset: { x: -380, y: 150 },   // смещение конечной точки
            curveIntensity: -0.7,         // интенсивность кривизны (0-1)
            curveDirection: 'down'         // направление изгиба: 'up', 'down', 'left', 'right'
        },
        'design-to-approval': {
            startOffset: { x: 0, y: 0 },
            endOffset: { x: 0, y: 0 },
            curveIntensity: 0.5,
            curveDirection: 'right'
        },
        'approval-to-tech': {
            startOffset: { x: 0, y: 0 },
            endOffset: { x: 0, y: 0 },
            curveIntensity: 0.4,
            curveDirection: 'up'
        },
        'tech-to-production': {
            startOffset: { x: 0, y: 0 },
            endOffset: { x: 0, y: 0 },
            curveIntensity: 0.2,
            curveDirection: 'right'
        },
        'production-to-delivery': {
            startOffset: { x: 0, y: 0 },
            endOffset: { x: 0, y: 0 },
            curveIntensity: 0.6,
            curveDirection: 'down'
        },
        'delivery-to-assembly': {
            startOffset: { x: 0, y: 0 },
            endOffset: { x: 0, y: 0 },
            curveIntensity: 0.4,
            curveDirection: 'left'
        }
    };

    // Функция для рисования кривой стрелки
    const drawArrow = (from: Node, to: Node, key: string) => {
        const config = arrowConfigs[key];
        if (!config) return null;

        // Применяем смещения к начальной и конечной точкам
        const startPoint = { 
            x: from.x + config.startOffset.x, 
            y: from.y + config.startOffset.y 
        };
        const endPoint = { 
            x: to.x + config.endOffset.x, 
            y: to.y + config.endOffset.y 
        };

        const dx = endPoint.x - startPoint.x;
        const dy = endPoint.y - startPoint.y;
        const angle = Math.atan2(dy, dx);

        // Вычисляем контрольную точку на основе конфигурации
        let ctrlX, ctrlY;
        const midX = startPoint.x + dx * 0.5;
        const midY = startPoint.y + dy * 0.5;

        // Базовое смещение для кривизны
        const offset = Math.sqrt(dx * dx + dy * dy) * config.curveIntensity;

        // Применяем направление изгиба
        switch (config.curveDirection) {
            case 'up':
                ctrlX = midX;
                ctrlY = midY - offset;
                break;
            case 'down':
                ctrlX = midX;
                ctrlY = midY + offset;
                break;
            case 'left':
                ctrlX = midX - offset;
                ctrlY = midY;
                break;
            case 'right':
                ctrlX = midX + offset;
                ctrlY = midY;
                break;
            default:
                ctrlX = midX;
                ctrlY = midY;
        }

        return (
            <g key={key}>
                <path
                    d={`M ${startPoint.x} ${startPoint.y} Q ${ctrlX} ${ctrlY}, ${endPoint.x} ${endPoint.y}`}
                    stroke="white"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                />
                {/* Стрелка */}
                <polygon
                    points={`${endPoint.x},${endPoint.y} ${endPoint.x - 8},${endPoint.y - 4} ${endPoint.x - 8},${endPoint.y + 4}`}
                    fill="white"
                    transform={`rotate(${(angle * 180) / Math.PI}, ${endPoint.x}, ${endPoint.y})`}
                />
            </g>
        );
    };

    if (!isClient) {
        return <div className="h-[800px] w-screen bg-black"></div>;
    }

    return (
        <div className="relative w-screen left-1/2 -translate-x-1/2 p-6 bg-black overflow-hidden min-h-[800px]">
            {/* Заголовок — с закруглённым фоном */}
            <div className="absolute top-4 left-8 z-10">
                <h2 className="text-3xl md:text-4xl font-bold text-white bg-black bg-opacity-70 px-6 py-2 rounded-full">
                    Карта работы
                </h2>
            </div>

            {/* Фоновая сетка */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    backgroundImage: `
            linear-gradient(to right, rgba(0,255,150,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,255,150,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: `${50 * scale}px ${50 * scale}px`,
                }}
            ></div>

            {/* SVG для стрелок */}
            <svg
                width="100%"
                height="100%"
                viewBox={`0 0 ${svgWidth} ${svgHeight}`}
                preserveAspectRatio="xMidYMid meet"
                className="absolute inset-0 pointer-events-none"
            >
                {/* Правильный порядок стрелок — как на изображении 2 */}
                {drawArrow(nodes.brief, nodes.design, 'brief-to-design')}
                {drawArrow(nodes.design, nodes.approval, 'design-to-approval')}
                {drawArrow(nodes.approval, nodes.tech, 'approval-to-tech')}
                {drawArrow(nodes.tech, nodes.production, 'tech-to-production')}
                {drawArrow(nodes.production, nodes.delivery, 'production-to-delivery')}
                {drawArrow(nodes.delivery, nodes.assembly, 'delivery-to-assembly')}
                {/* ← Убрали стрелку "assembly → brief", так как это линейный процесс */}
            </svg>

            {/* Блоки-узлы с зелёными уголками */}
            <div className="relative z-10">
                {Object.entries(nodes).map(([key, { x, y }]) => {
                    let label = '';
                    switch (key) {
                        case 'brief': label = 'Принятие брифа'; break;
                        case 'design': label = 'Разработка дизайна'; break;
                        case 'approval': label = 'Осмечивание-согласование'; break;
                        case 'tech': label = 'Тех проработка-черчение'; break;
                        case 'production': label = 'Производство'; break;
                        case 'delivery': label = 'Доставка'; break;
                        case 'assembly': label = 'Монтаж'; break;
                    }

                    return (
                        <div
                            key={key}
                            className="bg-gray-900 border-2 border-accent-foreground rounded-lg p-10 text-white text-center shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer relative"
                            style={{
                                left: `${x - 60 * scale}px`,
                                top: `${y - 30 * scale}px`,
                                width: `${120 * scale}px`,
                                fontSize: `${12 * scale}px`,
                                lineHeight: '1.3',
                            }}
                            title={label}
                        >
                            {/* Зелёные уголки — CSS псевдоэлементы */}
                            <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-emerald-400"></span>
                            <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-emerald-400"></span>
                            <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-emerald-400"></span>
                            <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-emerald-400"></span>
                            {label}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}