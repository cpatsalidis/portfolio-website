import React from "react";

interface DecorativeLineProps {
    color?: string;
    width?: number | string;
    height?: number | string;
    className?: string;
    style?: React.CSSProperties;
}

// Default: horizontal, curved SVG line
const DecorativeLine: React.FC<DecorativeLineProps> = ({
    color = "#0074D9", // blue
    width = 400,
    height = 40,
    className = "",
    style = {},
}) => (
    <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={style}
    >
        <path
            d={`M0,${Number(height) / 2} C${Number(width) / 4},0 ${Number(width) * 0.75},${Number(height)} ${Number(width)},${Number(height) / 2}`}
            stroke={color}
            strokeWidth="2"
            fill="none"
        />
    </svg>
);

export default DecorativeLine; 