
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UselessFun from "./pages/UselessFun";
import BadAdvice from "./pages/BadAdvice";
import Compliments from "./pages/Compliments";
import PassiveNotes from "./pages/PassiveNotes";
import BadJokes from "./pages/BadJokes";
import ExaggeratedProblems from "./pages/ExaggeratedProblems";
import Clickbait from "./pages/Clickbait";
import UselessButtons from "./pages/UselessButtons";
import About from "./pages/About";
import Disclaimer from "./pages/Disclaimer";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";

// ScrollToTop component to handle scrolling on route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/useless-genius-emporium">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/useless-fun" element={<UselessFun />} />
          <Route path="/bad-advice" element={<BadAdvice />} />
          <Route path="/compliments" element={<Compliments />} />
          <Route path="/passive-notes" element={<PassiveNotes />} />
          <Route path="/bad-jokes" element={<BadJokes />} />
          <Route path="/exaggerated-problems" element={<ExaggeratedProblems />} />
          <Route path="/clickbait" element={<Clickbait />} />
          <Route path="/useless-buttons" element={<UselessButtons />} />
          <Route path="/about" element={<About />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
