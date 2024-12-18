import React from 'react'

interface Props {
    percentage: number;
    width:number;
    height: number;
    font:number;
    text:number;
}

export default function Percentage({ percentage, width, height, font, text}: Props) {
    const getColor = (percentage: number) => {
        if (percentage < 33) return ['var(--color-red)','var(--second-red)'];
        if (percentage < 66) return ['var(--color-orange)','var(--second-orange)'];
        return ['var(--color-green)','var(--second-green)'];
    };
    return (
        <div
            className="circleContainer"
            style={{
                background: `conic-gradient(${getColor(percentage * 10)[0]} 0% ${(percentage * 10) * 3.6}deg, 
                ${getColor(percentage * 10)[1]} ${(percentage * 10) * 3.6}deg 100%)`,
                width: `${width}px`,
                height: `${height}px`
            }}
        >
            <div className="circle">
                <p className={`font-[${font}] text-[${text}px] leading-[36px] text-center`}>
                    {Math.round(percentage * 10)}%
                </p>
            </div>
        </div>
    )
}