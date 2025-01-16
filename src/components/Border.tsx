import React from 'react';

const Border: React.FC = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between px-4 md:px-8" style={{ backgroundColor: '#013982' }}> {/* Custom blue */}
      {/* Full-width blue border div with a button on the right side */}
      <span className="text-white text-lg font-medium"></span>

      {/* Button aligned to the right side */}
      <button 
  className="px-4 py-0 mr-14 rounded-full border-2 border-white font-sans font-extralight"
  style={{ borderColor: '#ffffff', color:'white' }} // White border color
>
  Contact us Here
</button>
    </div>
  );
};

export default Border;
