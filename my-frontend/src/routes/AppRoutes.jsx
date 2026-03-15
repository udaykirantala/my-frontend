// src/routes/AppRoutes.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import PrivacyPolicy from "../components/PrivacyPolicy.jsx";
import Terms from "../components/Terms.jsx";
import CookiePolicy from "../components/CookiePolicy.jsx";
import Disclaimer from "../components/Disclaimer.jsx";
import Contact from "../components/Contact.jsx";
import FAQ from "../components/FAQ.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Features from "../components/Features.jsx";
import Pricing from "../components/Pricing.jsx";
import API from "../components/Api.jsx";
import Status from "../components/Status.jsx";
import HelpCenter from "../components/HelpCenter.jsx";

export default function AppRoutes() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/cookiepolicy" element={<CookiePolicy />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/howitworks" element={<HowItWorks/>} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/api" element={<API />} />
        <Route path="/status" element={<Status />} />
        <Route path="/help" element={<HelpCenter />} />
      </Routes>
  );
}
