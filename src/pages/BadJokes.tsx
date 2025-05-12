
import React from 'react';
import Generator from '@/components/Generator';

const BadJokes = () => {
  return (
    <Generator 
      emoji="📞" 
      title="Bad Joke Hotline" 
      description="Endless bad jokes and puns like 'Why don't skeletons fight? They don't have the guts.'"
      buttonText="Tell Me A Bad Joke"
      placeholder="Dialing the bad joke hotline..."
      buttonColor="pink"
    />
  );
};

export default BadJokes;
