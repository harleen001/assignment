// components/LargeImage.tsx

import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <img
        src="./assets/1.jpg"  // Replace with your large image URL
        alt="Large Image"
        className="max-w-full h-auto m-auto"
      />
    </div>
  );
};

export default Header;
