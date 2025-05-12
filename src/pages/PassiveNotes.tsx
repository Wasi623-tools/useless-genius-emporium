
import React from 'react';
import Generator from '@/components/Generator';

const PassiveNotes = () => {
  return (
    <Generator 
      emoji="📎" 
      title="Passive-Aggressive Notes" 
      description="Fake office notes like 'If you eat my yogurt again, I'll replace the filling with mayo.'"
      buttonText="Generate Note"
      placeholder="Crafting the perfect passive-aggressive office note..."
      buttonColor="orange"
    />
  );
};

export default PassiveNotes;
