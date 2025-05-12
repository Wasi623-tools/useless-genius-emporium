
import React from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';

const Contact = () => {
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
              <h2 className="text-xl font-poppins font-bold mb-3">📬 Send us a Message</h2>
              <p className="mb-4">
                Fill out this form and we'll get back to you whenever we remember to check our inbox.
              </p>
              
              <form className="space-y-4">
                <div>
                  <label className="block mb-1 font-medium" htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-3 rounded-lg border border-input bg-background" 
                    placeholder="Your actual name or a funny fake one, we can't tell the difference"
                  />
                </div>
                
                <div>
                  <label className="block mb-1 font-medium" htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-3 rounded-lg border border-input bg-background" 
                    placeholder="We promise not to send too much spam"
                  />
                </div>
                
                <div>
                  <label className="block mb-1 font-medium" htmlFor="message">Your Message</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full p-3 rounded-lg border border-input bg-background" 
                    placeholder="Tell us what you think, or share your best bad joke"
                  ></textarea>
                </div>
                
                <div>
                  <label className="block mb-1 font-medium" htmlFor="reason">Reason for Contact</label>
                  <select 
                    id="reason" 
                    className="w-full p-3 rounded-lg border border-input bg-background"
                  >
                    <option value="">Select a reason</option>
                    <option value="compliment">To give a pointless compliment</option>
                    <option value="complaint">To file a useless complaint</option>
                    <option value="joke">To share an awful joke</option>
                    <option value="bored">Just bored, honestly</option>
                    <option value="other">Other pointless reason</option>
                  </select>
                </div>
                
                <div>
                  <button type="button" className="fun-button-primary w-full">
                    Send Message Into the Void
                  </button>
                </div>
              </form>
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
