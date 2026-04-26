import React from "react";
import { Link } from "react-router-dom";
import LTLanguageSwitcher from "../UI/LTLanguageSwitcher";  // ✅ Correct

const Header = ({ targetLang, setTargetLang }) => {
  const ASSET = (p) => process.env.PUBLIC_URL + p;

  return (
    <header className="header">
      <Link to="/" className="brand">
        <img
          src={ASSET("/images/logo.png")}
          className="logo"
          alt="Jerry's AI Logo"
        />
      </Link>

      <div className="header-center">
        <Link to="/" className="title-link">
          <span className="title">Jerry's AI</span>
        </Link>
      </div>

      <LTLanguageSwitcher
        globeSrc={ASSET("/images/general/icons/globe.png")}
        onChange={setTargetLang}
      />
    </header>
  );
};

export default Header;
