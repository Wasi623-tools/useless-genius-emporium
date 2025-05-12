
import React from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';

const About = () => {
  return (
    <Layout>
      <div className="fun-container">
        <h1 className="fun-title">About Us</h1>
        
        <Card className="p-6 md:p-8 bg-white rounded-2xl shadow-lg border-2 border-muted mb-8">
          <div className="space-y-6">
            <p className="text-lg">
              We are a group of highly unqualified mischief-makers who built this site to waste time brilliantly.
            </p>
            
            <p className="text-lg">
              Pointlessly Genius was born one boring afternoon when we realized the internet needed more pointlessly fun things. 
              So instead of doing something productive, we decided to create a website that helps everyone waste time in creative ways.
            </p>
            
            <div className="bg-muted rounded-xl p-6 my-8">
              <h2 className="text-2xl font-poppins font-bold mb-4">Our Mission</h2>
              <p className="text-lg italic">
                "To make the internet 2% more useless, one absurd generator at a time."
              </p>
            </div>
            
            <h2 className="text-2xl font-poppins font-bold">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="bg-primary/10 rounded-xl p-4">
                <p className="text-xl mb-2 font-medium">🧙‍♂️ The Wizard of Odd</p>
                <p>Our lead developer who specializes in code that works by accident.</p>
              </div>
              
              <div className="bg-secondary/10 rounded-xl p-4">
                <p className="text-xl mb-2 font-medium">🎭 The Pun Master</p>
                <p>Responsible for all the groan-worthy jokes that make you roll your eyes.</p>
              </div>
              
              <div className="bg-accent/10 rounded-xl p-4">
                <p className="text-xl mb-2 font-medium">🤖 The AI Whisperer</p>
                <p>Teaches AI models to be as useless and entertaining as possible.</p>
              </div>
              
              <div className="bg-funpink/10 rounded-xl p-4">
                <p className="text-xl mb-2 font-medium">🦄 Chief Procrastination Officer</p>
                <p>Expert at finding creative ways to avoid real work.</p>
              </div>
            </div>
            
            <p className="text-lg mt-6">
              We hope our website brings a smile to your face and wastes your time in the most delightful way possible.
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default About;
