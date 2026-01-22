import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProjectPreview from "./pages/ProjectPreview";
import AnimatedBlobBackground from "./components/AnimatedBlobBackground";
import CvPage from "./pages/CvPage";
import ScrollToTop from "./components/ScrollToTop";
import ContactPage from "./pages/ContactPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", maxWidth: "100%" }}>
      
      <AnimatedBlobBackground strength={0.8} />
      <ScrollToTop />
      <div style={{ position: "relative", zIndex: 1, maxWidth: "100%" }}>
        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/:slug" element={<ProjectPreview />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/cv" element={<CvPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
