import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
import { ErrorBoundary } from "./components/error-boundary";
import { LoadingSpinner } from "./components/ui/loading-spinner";

function App() {
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
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
