import React from "react";

const CircularProgressBar = ({ sqSize, strokeWidth, percentage, image }) => {
    console.log(image);
    const radius = (sqSize - strokeWidth) / 2;
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - dashArray * percentage / 100;
    return (
        <svg
            width={sqSize}
            height={sqSize}
            viewBox={viewBox}>
            <circle
                className="circle-background"
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`} />
            <circle
                className="circle-progress"
                cx={sqSize / 2}
                cy={sqSize / 2}
                r={radius}
                strokeWidth={`${strokeWidth}px`}
                transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
                style={{
                    strokeDasharray: dashArray,
                    strokeDashoffset: dashOffset
                }} />
            <image
                xlinkHref={image}
                x={sqSize / 4}
                y={sqSize / 4}
                width={sqSize / 2}
                height={sqSize / 2}
            />
        </svg>);
};

export default CircularProgressBar;
