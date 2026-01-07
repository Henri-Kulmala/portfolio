import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import ProjectPreview from "./pages/ProjectPreview";
import AnimatedBlobBackground from "./components/AnimatedBlobBackground";

function App() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      
      <AnimatedBlobBackground strength={0.8} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects/:slug" element={<ProjectPreview />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
