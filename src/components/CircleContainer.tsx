"use client";

import { FC } from "react";

// Circle component for each image
interface CircleProps {
  imageUrl: string;
  label: string; // Added label prop for the text
  link: string; // Added link prop for each image
}

const Circle: FC<CircleProps> = ({ imageUrl, label, link }) => {
  return (
    <div className="flex flex-col items-center">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="w-20 h-20 rounded-full overflow-hidden shadow-md transition-transform transform hover:scale-110">
          <img
            src={imageUrl}
            alt={label}
            className="w-full h-full object-cover"
          />
        </div>
      </a>
      <p className="mt-2 text-sm text-center">{label}</p> {/* Text under the image */}
    </div>
  );
};

// Container to hold the circles
const CircleContainer: FC = () => {
  const images = [
    { url: "/assets/2.jpg", label: "coffee", link: "https://www.instagram.com/stories/highlights/17961157237720678/?hl=en" },
    { url: "/assets/3.jpg", label: "croissant", link: "https://www.instagram.com/stories/highlights/17979840634494372/?hl=en" },
    { url: "/assets/4.jpg", label: "smoothie bowl", link: "https://www.instagram.com/stories/highlights/18218995294271368/?hl=en" },
    { url: "/assets/5.jpg", label: "new launched", link: "https://www.instagram.com/stories/highlights/17943550748451127/?hl=en" },
    { url: "/assets/6.jpg", label: "cheesecake", link: "https://www.instagram.com/stories/highlights/18152372038218618/?hl=en" },
    { url: "/assets/7.jpg", label: "vibe", link: "https://www.instagram.com/stories/highlights/17959411442165502/?hl=en" },
    { url: "/assets/8.jpg", label: "all day bagel", link: "https://www.instagram.com/stories/highlights/17959411442165502/?hl=en" },
    { url: "/assets/9.jpg", label: "all your love", link: "https://www.instagram.com/stories/highlights/17973529408523044/?hl=en" },
    { url: "/assets/10.jpg", label: "bts", link: "https://www.instagram.com/stories/highlights/18119825230288298/?hl=en" },
    { url: "/assets/11.jpg", label: "new cheesecake", link: "https://www.instagram.com/stories/highlights/17903404490536085/?hl=en" },
    { url: "/assets/12.jpg", label: "baguette", link: "https://www.instagram.com/stories/highlights/18194609338082059/?hl=en" },
  ];

  return (
    <div className="flex gap-4 justify-center items-center flex-wrap p-4">
      {images.map((item, index) => (
        <Circle key={index} imageUrl={item.url} label={item.label} link={item.link} />
      ))}
    </div>
  );
};

export default CircleContainer;
