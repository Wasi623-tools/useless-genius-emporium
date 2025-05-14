
import React from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Form Submitted",
      description: "We'll get back to you once our pet dinosaur approves your message.",
    });
  };

  return (
    <Layout>
      <div className="fun-container">
        <h1 className="fun-title">Contact Us</h1>
        
        <Card className="p-6 md:p-8 bg-white rounded-2xl shadow-lg border-2 border-muted mb-8">
          <div className="space-y-6">
            <p className="text-xl mb-8 text-center">
              Got something to say? We might listen, but no promises.
            </p>
            
            <div className="bg-muted rounded-xl p-6 mb-6">
              <h2 className="text-xl font-poppins font-bold mb-3">💬 Send Us a Message</h2>
              <p className="mb-4">
                We're probably too busy inventing a sandwich that emails you back, but try us anyway!
              </p>
              
              <div className="w-full overflow-hidden">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdidvNg2z6GFvPyPM-avTQ8uDUlA3TpdWqbIOGOofBpyXrrfA/viewform?embedded=true" 
                  width="750" 
                  height="700" 
                  frameBorder={0} 
                  title="Contact Form"
                >Loading…</iframe>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg font-medium">Alternative Contact Methods:</p>
              <p className="text-muted-foreground mt-2">
                Telepathy (we're not listening)<br />
                Carrier pigeon (please feed it first)<br />
                Yelling very loudly (results may vary)<br />
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Contact;
