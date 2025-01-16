"use client";

import { FC } from "react";

// Circle component for each image
interface CircleProps {
  imageUrl: string;
}

const Circle: FC<CircleProps> = ({ imageUrl }) => {
  return (
    <div className="w-20 h-20 rounded-full overflow-hidden shadow-md transition-transform transform hover:scale-110">
      <img
        src={imageUrl}
        alt="Circle Highlight"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

// Container to hold the circles
const CircleContainer: FC = () => {
  const images = [
    "https://via.placeholder.com/80?text=1",
    "https://via.placeholder.com/80?text=2",
    "https://via.placeholder.com/80?text=3",
    "https://via.placeholder.com/80?text=4",
    "https://via.placeholder.com/80?text=5",
    "https://via.placeholder.com/80?text=6",
    "https://via.placeholder.com/80?text=7",
    "https://via.placeholder.com/80?text=8",
    "https://via.placeholder.com/80?text=9",
    "https://via.placeholder.com/80?text=10",
    "https://via.placeholder.com/80?text=11",
  ];

  return (
    <div className="flex gap-4 justify-center items-center flex-wrap p-4">
      {images.map((url, index) => (
        <Circle key={index} imageUrl={url} />
      ))}
    </div>
  );
};

export default CircleContainer;
