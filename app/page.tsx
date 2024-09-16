import React from 'react';
import dynamic from 'next/dynamic';

const ThreeScene = dynamic(() => import('../components/ThreeScene'), { ssr: false });

const HomePage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#effd80' }}>
      <ThreeScene />
      {/* Additional content can go here */}
    </div>
  );
};

export default HomePage;
