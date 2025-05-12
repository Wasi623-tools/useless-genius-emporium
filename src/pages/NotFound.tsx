
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <div className="text-5xl my-4">🤔</div>
        <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-md">
          Even in a site full of pointless things, this page is too pointless to exist.
        </p>
        <Link to="/" className="fun-button-primary">
          Go Back to Useful Uselessness
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
