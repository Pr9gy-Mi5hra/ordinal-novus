import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between p-4">
        <div className="w-1/3 p-4 hover:bg-blue-500 transition">
          <img src="/static-assets/images/Frame 320.png" alt="Frame 320" className="w-full h-auto" />
        </div>

        <div className="w-1/3 p-4 hover:bg-blue-500 transition mx-4">
          <img src="/static-assets/images/Frame 325.png" alt="Frame 325" className="w-full h-auto" />
        </div>

        <div className="w-1/3 p-4 hover:bg-blue-500 transition">
          <img src="/static-assets/images/Frame 327.png" alt="Frame 327" className="w-full h-auto" />
        </div>
      </div>

      <div className="mt-4">
        <div className="p-4 hover:bg-blue-500 transition">
          <img src="/static-assets/images/Heatmap,Trading&Hot.png" alt="Heatmap,Trading&Hot" />
        </div>
      </div>

      <div className="mt-4">
        <div className="p-4 hover:bg-blue-500 transition">
          <img src="/static-assets/images/NFT Collections.png" alt="NFT Collections" />
        </div>
      </div>
    </div>
  );
};

export default Home;
