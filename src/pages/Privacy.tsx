
import React from 'react';
import Layout from '@/components/Layout';
import { Card } from '@/components/ui/card';

const Privacy = () => {
  return (
    <Layout>
      <div className="fun-container">
        <h1 className="fun-title">Privacy Policy</h1>
        
        <Card className="p-6 md:p-8 bg-white rounded-2xl shadow-lg border-2 border-muted mb-8">
          <div className="space-y-6">
            <p className="text-2xl font-medium text-center mb-8">
              We don't even know what to do with your data. Rest easy—we're lazy.
            </p>
            
            <div className="bg-primary/10 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-poppins font-bold mb-3">🕵️‍♂️ Data Collection</h2>
              <p>
                We collect absolutely nothing useful. We might accidentally collect some data, 
                but we'll probably lose it somewhere on our cluttered digital desktop.
              </p>
            </div>
            
            <div className="bg-secondary/10 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-poppins font-bold mb-3">🍪 Cookies</h2>
              <p>
                We use cookies, but only because they sound delicious. We have no idea what they do, 
                but everyone else has them so we wanted some too.
              </p>
            </div>
            
            <div className="bg-accent/10 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-poppins font-bold mb-3">📊 Analytics</h2>
              <p>
                We might track how many people use our site, mostly so we can feel good about ourselves. 
                Your secrets are safe with us because we don't know how to access the analytics dashboard anyway.
              </p>
            </div>
            
            <div className="bg-funpink/10 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-poppins font-bold mb-3">🔒 Security</h2>
              <p>
                Your data is secured by our state-of-the-art security system, which consists mainly of 
                forgetting passwords and accidentally deleting important files.
              </p>
            </div>
            
            <div className="bg-fungreen/10 rounded-xl p-6 mb-6">
              <h2 className="text-xl font-poppins font-bold mb-3">📱 Third Parties</h2>
              <p>
                We might share your data with third parties if they ask nicely. Just kidding! 
                We're too disorganized to share anything with anyone.
              </p>
            </div>
            
            <p className="text-lg font-medium text-center mt-8">
              In conclusion, your privacy is safe with us because tracking data sounds like actual work, 
              and that goes against everything we stand for.
            </p>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default Privacy;
