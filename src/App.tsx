import { Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import CampGround from "./components/pages/projects/CampGround";
import AgenticAI from "./components/pages/projects/AgenticAI";
import GraphAPI from "./components/pages/projects/GraphAPI";
import Portfolio from "./components/pages/projects/Portfolio";
import { ErrorBoundary } from "./components/error-boundary";
import { LoadingSpinner } from "./components/ui/loading-spinner";

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <ErrorBoundary>
      <Suspense fallback={
        <div className="min-h-screen flex items-center justify-center bg-background">
          <LoadingSpinner size="lg" />
        </div>
      }>
        <div className="min-h-screen bg-background text-foreground md:ml-24 transition-all duration-300 pt-4 md:pt-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/campground" element={<CampGround />} />
            <Route path="/projects/agentic-ai" element={<AgenticAI />} />
            <Route path="/projects/graph-api" element={<GraphAPI />} />
            <Route path="/projects/portfolio" element={<Portfolio />} />
          </Routes>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
