import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Home } from "./pages/Home/HomePage";
import { AppDetail } from "./pages/AppDetail/AppDetailPage";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTopComponent";

export function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/app/:id" element={<AppDetail />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}