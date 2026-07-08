import React from "react";
import { Routes, Route } from "react-router-dom";
import { LeadModalProvider } from "./context/LeadModalContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import LeadModal from "./components/LeadModal.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Industries from "./pages/Industries.jsx";
import About from "./pages/About.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <LeadModalProvider>
      <ScrollToTop />
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <LeadModal />
      <WhatsAppButton />
    </LeadModalProvider>
  );
}