
import React from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';

const Disclaimer = () => {
  return (
    <Layout>
      <div className="fun-container">
        <h1 className="fun-title">Disclaimer</h1>
        
        <Card className="p-6 md:p-8 bg-white rounded-2xl shadow-lg border-2 border-muted mb-8">
          <div className="space-y-6">
            <p className="text-2xl font-medium text-center mb-8">
              Don't follow any advice here unless you're trying to ruin your life on purpose.
            </p>
            
            <div className="bg-destructive/10 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-poppins font-bold mb-3">⚠️ Super Official Warning</h2>
              <p>
                Everything on this website is meant to be humorous and should absolutely NOT be taken seriously. 
                We are professional time-wasters, not professional advice-givers.
              </p>
            </div>
            
            <h2 className="text-xl font-poppins font-bold">What You Should Know:</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>All "advice" generated is intentionally bad, silly, or absurd.</li>
              <li>Following any advice from our "Bad Advice Bot" may result in public embarrassment, loss of dignity, or confused stares.</li>
              <li>Our "Useless Life Hacks" are scientifically engineered to solve problems that don't exist.</li>
              <li>The "Passive-Aggressive Notes" should not be used in actual workplaces unless you're planning to quit anyway.</li>
              <li>Using our "Awkward Compliments" in real life is done at your own social peril.</li>
            </ul>
            
            <div className="bg-muted rounded-xl p-6 my-6 italic">
              <p>"By using this website, you agree that laughing at pointless things is a perfectly valid use of your time."</p>
            </div>
            
            <p className="text-lg">
              If by some miracle you found something genuinely useful on this site, we assure you it was entirely by accident and we'll work diligently to make it useless again.
            </p>
            
            <p className="text-lg font-medium">
              Remember: Time enjoyed wasting is not wasted time. And we're here to help you enjoy wasting it!
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Disclaimer;
