
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// ScrollToTop component to handle scrolling on route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Modified App wrapper with ScrollToTop
const AppWithScrollToTop = () => {
  return (
    <>
      <ScrollToTop />
      <App />
    </>
  )
}

createRoot(document.getElementById("root")!).render(<AppWithScrollToTop />);
