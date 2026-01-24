import { useRef } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";

import AnimatedBlobBackground from "./components/AnimatedBlobBackground";
import Footer from "./components/Footer";
import LeftNav, { type Section } from "./components/LeftNav";
import ScrollToTop from "./components/ScrollToTop";

import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CvPage from "./pages/CvPage";
import LandingPage from "./pages/LandingPage";
import ProjectPreview from "./pages/ProjectPreview";
import styles from "./App.module.css";

import ScrollToHash from "./hooks/ScrollToHash";

function App() {
  const SECTIONS: Section[] = [
    { id: "/", label: "työt" },
    { id: "/minusta", label: "minusta" },
    { id: "/contact", label: "yhteys" },
    { id: "/cv", label: "résumé" },
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef<HTMLDivElement>(null);

  const activeSection = location.pathname.startsWith("/projects/")
    ? "/"
    : location.pathname;

  return (
    <div style={{ position: "relative", minHeight: "100vh", maxWidth: "100%" }}>
      <AnimatedBlobBackground strength={0.8} />
      <ScrollToTop />
      <ScrollToHash
        getOffset={() => (navRef.current?.offsetHeight ?? 0) + 30}
      />

      <div className={styles.navbar} ref={navRef}>
        <LeftNav
          sections={SECTIONS}
          activeSection={activeSection}
          onNavigate={(path) => navigate(path)}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1, maxWidth: "100%" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/minusta" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects/:slug" element={<ProjectPreview />} />
          <Route path="/cv" element={<CvPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
