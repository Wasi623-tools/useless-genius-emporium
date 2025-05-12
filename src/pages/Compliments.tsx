
import React from 'react';
import Generator from '@/components/Generator';

const Compliments = () => {
  return (
    <Generator 
      emoji="🙃" 
      title="Awkward Compliments" 
      description="Weirdly specific compliments like 'Your elbows are exceptionally pointy today.'"
      buttonText="Generate Compliment"
      placeholder="Preparing a wonderfully awkward compliment just for you..."
      buttonColor="green"
    />
  );
};

export default Compliments;
