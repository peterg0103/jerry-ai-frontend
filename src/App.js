import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import ProChatInfo from "./pages/ProChatInfo";
import AIProChat from "./pages/AIProChat";
import AboutUs from "./pages/AboutUs";
import Pdpa from "./pages/Pdpa";
import Terms from "./pages/Terms";
import Subscribe from "./pages/Subscribe";
import Education from "./pages/Education";
import AppDevelopment from "./pages/AppDevelopment";
import Login from "./pages/Login";
import GeneralServices from "./pages/GeneralServices";
import Privacy from "./pages/Privacy";
import Seo from "./pages/Seo";
//  // Temporarily disabled
import FindMyPhone from "./pages/FindMyPhone";
import Pricing from "./pages/Pricing";
import Cybersecurity from "./pages/Cybersecurity";
import DigitalMarketing from "./pages/DigitalMarketing";
import AnalyseData from './pages/AnalyseData';
import WebDevelopment from "./pages/WebDevelopment";
import AddBanner from "./pages/AddBanner";
import Services from "./pages/Services";
import Register from "./pages/Register";
import VoiceTranslator from "./pages/VoiceTranslator";
import Contact from "./pages/Contact";
import Support from "./pages/Support";
import "./App.css";

function App() {
  const [targetLang, setTargetLang] = useState("en");
   console.log('🔍 App.js targetLang:', targetLang);

  return (
    <>
      <ScrollToTop />  {/* ? MOVED OUTSIDE Routes */}
      <Routes>
        <Route path="/" element={<Home targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/home" element={<Home targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/AIProChat" element={<AIProChat />} />
<Route path="/aiprochat" element={<AIProChat />} />
        <Route path="/ai-pro-chat-info" element={<ProChatInfo targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/aboutus" element={<AboutUs targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/support" element={<Support targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/contact" element={<Contact targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/pricing" element={<Pricing targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/services" element={<Services targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/GeneralServices" element={<GeneralServices targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/terms" element={<Terms targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/privacy" element={<Privacy targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/pdpa" element={<Pdpa targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/add-banner" element={<AddBanner targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/education" element={<Education targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/web-development" element={<WebDevelopment targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/app-development" element={<AppDevelopment targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/digital-marketing" element={<DigitalMarketing targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/voice-translator" element={<VoiceTranslator targetLang={targetLang} setTargetLang={setTargetLang} />} />
       <Route path="/analyse-data" element={<AnalyseData targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/cybersecurity" element={<Cybersecurity targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/seo" element={<Seo targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/find-my-phone" element={<FindMyPhone targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/admindashboard" element={<AdminDashboard targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/login" element={<Login targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/register" element={<Register targetLang={targetLang} setTargetLang={setTargetLang} />} />
        <Route path="/subscribe" element={<Subscribe targetLang={targetLang} setTargetLang={setTargetLang} />} />
      </Routes>
   </>
  );
}

export default App;