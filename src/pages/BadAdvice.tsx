
import React from 'react';
import Generator from '@/components/Generator';

const BadAdvice = () => {
  return (
    <Generator 
      emoji="🤖" 
      title="Bad Advice Bot" 
      description="A chat-style bot that gives horrible but funny advice like 'Quit your job and become a pirate.'"
      buttonText="Get Bad Advice"
      placeholder="The Bad Advice Bot is warming up its terrible ideas..."
      buttonColor="secondary"
    />
  );
};

export default BadAdvice;
