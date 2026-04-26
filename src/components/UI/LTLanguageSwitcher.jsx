import React, { useEffect, useState, useRef, useMemo } from "react";

const LTLanguageSwitcher = ({ globeSrc, onChange }) => {
  const ASSET = (p) => (process.env.PUBLIC_URL || "") + p;

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [langs, setLangs] = useState([]);
  const [selectedLang, setSelectedLang] = useState({ code: "en", name: "English" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const wrapperRef = useRef(null);
  const searchRef = useRef(null);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

useEffect(() => {
    const localLanguages = [
      { code: "en", name: "English" },
      { code: "zh", name: "Simplified Chinese" },
      { code: "es", name: "Spanish" },
      { code: "fr", name: "French" },
      { code: "de", name: "German" },
      { code: "ja", name: "Japanese" },
      { code: "ko", name: "Korean" },
      { code: "ru", name: "Russian" },
      { code: "ar", name: "Arabic" },
      { code: "it", name: "Italian" },
      { code: "pt", name: "Portuguese" },
      { code: "hi", name: "Hindi" },
      { code: "tr", name: "Turkish" },
      { code: "vi", name: "Vietnamese" },
      { code: "th", name: "Thai" },
      { code: "pl", name: "Polish" },
      { code: "uk", name: "Ukrainian" },
      { code: "el", name: "Greek" },
      { code: "he", name: "Hebrew" },
      { code: "sv", name: "Swedish" }
    ];
    
    console.log('✅ Loaded', localLanguages.length, 'languages');
    setLangs(localLanguages);
    setLoading(false);
    const defaultLang = localLanguages.find(l => l.code === "en");
    if (defaultLang) setSelectedLang(defaultLang);
  }, []); 

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) setTimeout(() => searchRef.current?.focus(), 50);
    else setQuery("");
  }, [isOpen]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return langs;
    return langs.filter(
      (l) =>
        (l.name || "").toLowerCase().includes(q) ||
        (l.code || "").toLowerCase().includes(q)
    );
  }, [langs, query]);

  const handleSelect = (lang) => {
    console.log('🌐 Language selected:', lang.code, lang.name);
    setSelectedLang(lang);
    setIsOpen(false);
    if (typeof onChange === "function") onChange(lang.code);
  };

  const styles = {
    wrapper: { position: "relative", display: "inline-block" },
    globeBtn: { width: "56px", height: "56px", background: "transparent", border: "none", cursor: "pointer", padding: "0", display: "flex", alignItems: "center", justifyContent: "center" },
    globeImg: { width: "34px", height: "34px", display: "block" },
    dropdown: {
      position: "absolute",
      top: "42px",
      right: "0",
      left: isMobile ? "-120px" : "auto",
      background: "#ffffff",
      borderRadius: "14px",
      boxShadow: "0 12px 28px rgba(0, 0, 0, 0.15)",
      padding: "8px",
      width: isMobile ? "280px" : "220px",
      minWidth: "180px",
      maxWidth: isMobile ? "320px" : "280px",
      zIndex: "9999",
      maxHeight: "300px",
      overflowY: "auto"
    },
    search: { width: "100%", padding: "6px 10px", marginBottom: "6px", border: "1px solid #d7dbe3", borderRadius: "8px", fontSize: "12px", outline: "none" },
    list: { width: "100%", maxHeight: "250px", overflowY: "auto" },
    listItem: { width: "100%", textAlign: "left", padding: "6px 10px", background: "transparent", border: "none", cursor: "pointer", fontSize: "12px", borderRadius: "6px" },
    listItemActive: { backgroundColor: "#10a7ff", color: "#ffffff" },
    noResult: { padding: "10px", textAlign: "center", color: "#64748b", fontSize: "12px" }
  };

  if (loading) {
    return (
      <div style={styles.wrapper}>
        <button style={styles.globeBtn} type="button">
          <img src={globeSrc || ASSET("/images/general/icons/globe.png")} alt="Language" style={styles.globeImg} />
        </button>
      </div>
    );
  }

  if (error) {
    console.error('Language switcher error:', error);
  }

  return (
    <div style={styles.wrapper} ref={wrapperRef}>
      <button style={styles.globeBtn} onClick={() => setIsOpen(v => !v)} type="button">
        <img src={globeSrc || ASSET("/images/general/icons/globe.png")} alt="Language" style={styles.globeImg} />
      </button>

      {isOpen && (
        <div style={styles.dropdown} role="menu">
          <input ref={searchRef} style={styles.search} value={query} onChange={e => setQuery(e.target.value)} placeholder="Search language" />
          <div style={styles.list}>
            {filtered.length === 0 ? (
              <div style={styles.noResult}>No language found</div>
            ) : (
              filtered.map(lang => (
                <button
                  key={lang.code}
                  style={{ ...styles.listItem, ...(selectedLang.code === lang.code ? styles.listItemActive : {}) }}
                  onClick={() => handleSelect(lang)}
                  onMouseEnter={(e) => { if (selectedLang.code !== lang.code) e.target.style.backgroundColor = "#f0f4ff"; }}
                  onMouseLeave={(e) => { if (selectedLang.code !== lang.code) e.target.style.backgroundColor = "transparent"; }}
                >
                  {lang.name}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LTLanguageSwitcher;
