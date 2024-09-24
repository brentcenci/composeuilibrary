import React, { useState, useEffect } from "react";
import "../App.css";

const LineGrid = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    const gridSize = 40; // Number of lines in each row/column
    const lineDistance = 100; // Distance between lines

    const lines = [];
    for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
            const lineX = col * lineDistance + 50;
            const lineY = row * lineDistance;

            const distanceToMouse = Math.sqrt(
                (mousePosition.x - lineX) ** 2 + (mousePosition.y - lineY) ** 2
            );

            const proximityThreshold = 150; // Lines within this distance will rotate

            const rotation =
                distanceToMouse < proximityThreshold
                    ? /*Math.atan2(mousePosition.y - lineY, mousePosition.x - lineX) *
                    (180 / Math.PI)*/ 90
                    : 0; // Default orientation is vertical (0 degrees)

            lines.push(
                <div
                    key={`${row}-${col}`}
                    className="line"
                    style={{
                        left: `${lineX}px`,
                        top: `${lineY}px`,
                        transform: `rotate(${rotation}deg)`,
                        transition: distanceToMouse < proximityThreshold ? "0.2s" : "0.5s", // Fast rotation for nearby lines, slower reset
                    }}
                />
            );
        }
    }

    return <div className="line-grid">{lines}</div>;
};

const TestingLinesDesignFile = () => {
    return (
        <header className="w-full h-screen bg-white overflow-hidden relative">
            <LineGrid />
        </header>
    );
};

export default TestingLinesDesignFile;
