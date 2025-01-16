"use client";

import { FC } from "react";

interface ImageTextProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string; // Optional: Add a link to make the text clickable
}

const ImageText: FC<ImageTextProps> = ({ imageUrl, title, description, link }) => {
  return (
    <div className="flex rounded-lg items-center justify-between gap-8 p-6 flex-wrap-reverse sm:flex-nowrap max-w-4xl mx-auto"style={{ backgroundColor: '#f6f0e9' }}>
      <div className="w-full sm:w-1/2">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-auto rounded-lg shadow-lg object-cover"
        />
      </div>
      <div className="w-full sm:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>
        <p className="mt-4 text-gray-700">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            Learn More
          </a>
        )}
      </div>
    </div>
  );
};

export default ImageText;
