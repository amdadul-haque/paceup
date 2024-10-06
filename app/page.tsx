import React from 'react';
import dynamic from 'next/dynamic';
import ThreeScene from '@/components/ThreeScene';


const HomePage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#effd80' }}>
      <ThreeScene />
      {/* Additional content can go here */}
    </div>
  );
};

export default HomePage;
