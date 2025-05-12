
import React from 'react';
import Generator from '@/components/Generator';

const Clickbait = () => {
  return (
    <Generator 
      emoji="🧠" 
      title="Clickbait Generator" 
      description="Ridiculous headlines like '10 Things Bananas Do When You're Not Looking—#7 Will Shock You!'"
      buttonText="Generate Clickbait"
      placeholder="Crafting a headline so ridiculous you might actually click it..."
      buttonColor="secondary"
    />
  );
};

export default Clickbait;
