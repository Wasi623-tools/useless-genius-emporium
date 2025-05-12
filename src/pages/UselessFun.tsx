
import React from 'react';
import Generator from '@/components/Generator';

const UselessFun = () => {
  return (
    <Generator 
      emoji="🎲" 
      title="Useless But Fun" 
      description="Random hilarious life hacks that sound smart but are utterly pointless."
      buttonText="Generate Life Hack"
      placeholder="Your pointless life hack is brewing..."
      buttonColor="primary"
    />
  );
};

export default UselessFun;
