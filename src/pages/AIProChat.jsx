import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useDeepSeekTranslation } from "../hooks/useDeepSeekTranslation";
import { Link } from "react-router-dom";
import "./AIProChat.css";
import LTLanguageSwitcher from "../components/UI/LTLanguageSwitcher";

const AIProChat = ({ targetLang, setTargetLang }) => {
  const ASSET = (p) => process.env.PUBLIC_URL + p;

  // ====== LOCAL STORAGE KEYS ======
  const KEY = "jerryProChatConversations";
  const USER_KEY = "jerryUserProfile";
  const PAYMENT_KEY = "jerryPayments";

  // ====== UI Refs ======
  const chatWindowRef = useRef(null);
  const inputRef = useRef(null);

  // ====== ALL useState hooks FIRST ======
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [flyoutOpen, setFlyoutOpen] = useState(null);
  const [histMenu, setHistMenu] = useState({ open: false, left: 0, top: 0, convId: null });
  const [renameOpen, setRenameOpen] = useState(false);
  const [copyOpen, setCopyOpen] = useState(false);
  const [copyText, setCopyText] = useState("");
  const [renameValue, setRenameValue] = useState("");
  const [renameTargetId, setRenameTargetId] = useState(null);
  const [typing, setTyping] = useState(false);
  const [typingBulbColor, setTypingBulbColor] = useState('blue');
  const [conversations, setConversations] = useState([]);
  const [currentId, setCurrentId] = useState(`conv_${Date.now()}`);
  const [input, setInput] = useState("");

  // ====== My Profile State ======
  const [showProfile, setShowProfile] = useState(false);
  const [showInviteFriends, setShowInviteFriends] = useState(false);
  const [showMySubscribe, setShowMySubscribe] = useState(false);
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);
  const [profileSaveMessage, setProfileSaveMessage] = useState("");
  const [passwordPopupData, setPasswordPopupData] = useState({
    oldPassword: "",
    newPassword: "",
    repeatPassword: ""
  });
  const [passwordError, setPasswordError] = useState("");
  const [passwordSuccess, setPasswordSuccess] = useState("");
  
  // Subscribe table sorting
  const [sortField, setSortField] = useState("payment_date");
  const [sortDirection, setSortDirection] = useState("desc");

  // Load user profile from localStorage
  const [userProfile, setUserProfile] = useState(() => {
    const saved = localStorage.getItem(USER_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      name: "",
      email: "peter.g0103@gmail.com",
      nameUpdatedOnce: false,
      passwordHash: "dummy_hash_for_demo"
    };
  });

  // Sample payment data (mock - ready for MySQL)
  const [payments, setPayments] = useState(() => {
    const saved = localStorage.getItem(PAYMENT_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
    // Mock data for demonstration
    return [
      {
        id: 1,
        payment_date: "2025-03-15",
        payment_time: "14:30:00",
        user_name: "Peter Goh",
        user_email: "peter.g0103@gmail.com",
        service_type: "App Development",
        remarks: "Success",
        amount: 499.00
      },
      {
        id: 2,
        payment_date: "2025-03-20",
        payment_time: "10:15:00",
        user_name: "Peter Goh",
        user_email: "peter.g0103@gmail.com",
        service_type: "Web Development",
        remarks: "Success",
        amount: 599.00
      },
      {
        id: 3,
        payment_date: "2025-04-01",
        payment_time: "09:45:00",
        user_name: "Peter Goh",
        user_email: "peter.g0103@gmail.com",
        service_type: "Digital Marketing",
        remarks: "Success",
        amount: 299.00
      },
      {
        id: 4,
        payment_date: "2025-04-10",
        payment_time: "16:20:00",
        user_name: "Peter Goh",
        user_email: "peter.g0103@gmail.com",
        service_type: "AI Voice Translator",
        remarks: "Success",
        amount: 199.00
      }
    ];
  });

 // ====== ALL useEffect hooks ======
  // Animate typing bulb between yellow and blue
  useEffect(() => {
    if (typing) {
      const interval = setInterval(() => {
        setTypingBulbColor(prev => prev === 'blue' ? 'yellow' : 'blue');
      }, 500);
      return () => clearInterval(interval);
    } else {
      setTypingBulbColor('blue');
    }
  }, [typing]);

  useEffect(() => {
    let raw = localStorage.getItem(KEY);
    let parsed = ensureOneConversation(raw ? JSON.parse(raw) : []);
    setConversations(parsed);
    setCurrentId(parsed[0]?.id || currentId);
    const onClick = () => closeHistMenu();
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  const currentConv = useMemo(() => {
    return conversations.find((c) => c.id === currentId) || { messages: [] };
  }, [conversations, currentId]);

  useEffect(() => {
    const updateMenuPosition = () => {
      if (histMenu.open && histMenu.convId) {
        const historyItem = document.querySelector(`[data-conv-id="${histMenu.convId}"]`);
        if (historyItem) {
          const button = historyItem.querySelector('button');
          if (button) {
            const rect = button.getBoundingClientRect();
            const menuW = 125;
            let left = rect.right + 8;
            let top = rect.top;
            if (left + menuW > window.innerWidth - 8) left = rect.left - menuW - 8;
            setHistMenu(prev => ({ ...prev, left, top }));
          }
        }
      }
    };
    
    window.addEventListener('scroll', updateMenuPosition);
    window.addEventListener('resize', updateMenuPosition);
    
    return () => {
      window.removeEventListener('scroll', updateMenuPosition);
      window.removeEventListener('resize', updateMenuPosition);
    };
  }, [histMenu.open, histMenu.convId]);

  useEffect(() => {
    if (flyoutOpen) {
      const timer = setTimeout(() => {
        setFlyoutOpen(null);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [flyoutOpen]);

  useEffect(() => {
    const positionFlyout = () => {
      const openFlyout = document.querySelector('.flyout.open');
      if (!openFlyout) return;
      
      const flywrap = openFlyout.closest('.flywrap');
      const button = flywrap?.querySelector('.side-btn');
      
      if (button) {
        const rect = button.getBoundingClientRect();
        const flyoutRect = openFlyout.getBoundingClientRect();
        
        openFlyout.style.top = `${rect.top - 0}px`;
        openFlyout.style.left = `${rect.right + 8}px`;
        
        if (flyoutRect.right > window.innerWidth - 10) {
          openFlyout.style.left = `${rect.left - flyoutRect.width - 8}px`;
        }
        
        if (flyoutRect.bottom > window.innerHeight - 10) {
          openFlyout.style.top = `${rect.top - flyoutRect.height + rect.height}px`;
        }
      }
    };
    
    if (flyoutOpen) {
      positionFlyout();
      setTimeout(positionFlyout, 10);
      
      window.addEventListener('scroll', positionFlyout);
      window.addEventListener('resize', positionFlyout);
      
      return () => {
        window.removeEventListener('scroll', positionFlyout);
        window.removeEventListener('resize', positionFlyout);
      };
    }
  }, [flyoutOpen]);

  // ====== Translation base for FOOTER ======
  const EN = {
    footerCompany: "Company",
    footerServices: "Services",
    footerLegality: "Legality",
    footerConnection: "Connection",
    aboutUs: "About Us",
    support: "Support",
    contactUs: "Contact Us",
    generalServices: "General Services",
    pricing: "Pricing",
    subscriptionPlan: "Subscription Plan",
    professionalAIChat: "Professional AI Chat",
    addBannerFooter: "Add Banner",
    educationFooter: "Education",
    webDevelopmentFooter: "Web Development",
    appDevelopmentFooter: "App Development",
    digitalMarketingFooter: "Digital Marketing",
    voiceTranslatorFooter: "AI Voice Translator",
    analyseDataFooter: "Analyse Data, Report",
    enhanceCyberFooter: "Enhance CyberSecurity",
    findMyPhoneFooter: "Find My Phone",
    terms: "Terms & Condition",
    privacy: "Privacy Policy",
    pdpa: "Personal Data Protection",
    servicesPolicy: "Services Policy",
    facebook: "Facebook",
    linkedin: "LinkedIn",
    twitter: "Twitter",
    tiktok: "Tik Tok",
    telegram: "Telegram",
    copyright: "© 2025 Jerry's AI. All rights reserved.",
  };

  // ====== Translation base for CHAT UI ======
  const CHAT_EN = {
    welcomeTitle: "Welcome to Jerry's AI",
    welcomeText: "Anything that I can do for you today?",
    inputPlaceholder: "Ask me anything...",
    aiResponse1: "Thanks, I got your message. Tell me what you want to do next and I will guide you step-by-step.",
    aiResponse2: "Good morning 😊 How can I help you today?",
    replyButton: "Reply",
    sendButton: "Send",
    micButton: "Mic",
    attachButton: "Attach",
    warningText: "⚠️ Be forewarned, Jerry's AI could misinterpret your question.",
    myProfile: "My Profile",
    searchChat: "Search Chat",
    newChat: "New Chat",
    services: "Services",
    subscribe: "Subscribe",
    mySubscribe: "My Subscribe",
    logout: "Logout",
    inviteFriends: "Invite Friends",
    serviceProChat: "Professional AI Chat",
    serviceAddBanner: "Add Banner",
    serviceEducation: "Education",
    serviceDigitalMarketing: "Digital Marketing",
    serviceSubscription: "Subscription Plans",
    serviceAnalyseData: "Analyse Data, Report",
    serviceCybersecurity: "Enhance CyberSecurity",
    serviceFindMyPhone: "Find My Phone",
    serviceVoiceTranslator: "AI Voice Translator",
    serviceGeneralChat: "General AI Chat",
    chatHistory: "Chat History",
    newChatTitle: "New chat",
    rename: "Rename",
    del: "Delete",
    userName: "User Name",
    userEmail: "User Email",
    userPassword: "User Password",
    updatePassword: "Update Password",
    saveAndUpdate: "Save & Update",
    backToChat: "Back To Chat",
    oldPassword: "Input Old Password",
    newPassword: "Input New Password",
    repeatNewPassword: "Repeat New Password",
    confirm: "Confirm",
    cancel: "Cancel",
    passwordRequirements: "Password must be at least 8 characters with at least 2 symbols (@!#$%& -)",
    passwordMismatch: "New passwords do not match",
    passwordInvalid: "Password must be at least 8 characters with 2 symbols",
    oldPasswordInvalid: "Old password is incorrect",
    updateSuccess: "Password updated successfully!",
    profileUpdateSuccess: "Profile updated successfully!",
    nameUpdateRestricted: "You can only update your name once",
    tooltipMessage: "You May Only Update Once",
    searchPreviousChat: "Search Previous Chat",
    searchingFor: "Searching for...",
    search: "Search",
    paymentDate: "Payment Date",
    paymentTime: "Time",
    serviceType: "Service Type",
    remarks: "Remarks",
    success: "Success",
    sortByDate: "Sort by Date",
    sortByService: "Sort by Service",
  };

  // ====== Translation hooks ======
  const { translatedText: footerTranslated, isTranslating: footerIsTranslating, error: footerError } = useDeepSeekTranslation(EN, targetLang);
  const { translatedText: chatTranslated, isTranslating: chatIsTranslating, error: chatError } = useDeepSeekTranslation(CHAT_EN, targetLang);

  // ====== t() and ct() functions ======
  const t = (key) => {
    if (!footerTranslated) return EN[key] || key;
    return footerTranslated[key] || EN[key] || key;
  };

  const ct = (key) => {
    if (!chatTranslated) return CHAT_EN[key] || key;
    return chatTranslated[key] || CHAT_EN[key] || key;
  };

  // ====== Loading indicator (after all hooks, before main return) ======
  if ((footerIsTranslating || chatIsTranslating) && targetLang !== 'en') {
    return (
      <>
        <header className="header">
          <button className="hamburger" type="button" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <img src={ASSET("/icons/3line-icon.png")} alt="Menu" style={{ width: '22px', height: '26px' }} />
          </button>
          <Link to="/" className="brand">
            <img src={ASSET("/images/general/icons/logo.png")} className="logo" alt="Logo" />
          </Link>
          <div className="header-center">
            <Link to="/" className="title-link"><span className="title">Jerry's AI</span></Link>
          </div>
          <LTLanguageSwitcher globeSrc={ASSET("/images/general/icons/globe.png")} onChange={setTargetLang} />
        </header>
        <div style={{ textAlign: 'center', padding: '50px' }}>
          <h3>🌐 Translating to {targetLang}...</h3>
          <p>Please wait while DeepSeek translates the content.</p>
        </div>
      </>
    );
  }

  if (footerError || chatError) {
    console.error('Translation error:', footerError || chatError);
  }

  // ====== Logic Helpers ======
  const escapeText = (v) => (v ?? "").toString();
  const stop = (e) => e.stopPropagation();

  const formatTimestamp = (ts) => {
    const d = new Date(ts);
    const hh = String(d.getHours()).padStart(2, "0");
    const mm = String(d.getMinutes()).padStart(2, "0");
    const DD = String(d.getDate()).padStart(2, "0");
    const MM = String(d.getMonth() + 1).padStart(2, "0");
    const YY = String(d.getFullYear()).slice(-2);
    return `${hh}.${mm} ${DD}/${MM}/${YY}`;
  };

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      const el = chatWindowRef.current;
      if (el) el.scrollTop = el.scrollHeight;
    });
  };

  const saveConversations = (next) => {
    localStorage.setItem(KEY, JSON.stringify(next));
  };

  const ensureOneConversation = (list) => {
    if (list.length) return list;
    return [{ id: currentId, title: ct("newChatTitle"), messages: [], ts: Date.now() }];
  };

  // ====== MENU LOGIC ======
  const openHistMenu = (btnEl, convId) => {
    const rect = btnEl.getBoundingClientRect();
    const menuW = 125;
    let left = rect.right + 8;
    let top = rect.top;
    if (left + menuW > window.innerWidth - 8) left = rect.left - menuW - 8;
    setHistMenu({ open: true, left, top, convId });
  };

  const closeHistMenu = () => setHistMenu((m) => ({ ...m, open: false }));

  const onRenameClick = () => {
    const cid = histMenu.convId;
    if (!cid) return;
    const target = conversations.find((c) => c.id === cid);
    setRenameTargetId(cid);
    setRenameValue(target?.title || "");
    setRenameOpen(true);
    closeHistMenu();
  };

  const replyToMessage = (messageText) => {
    setInput(`Replying to: "${messageText}"\n\n`);
    inputRef.current?.focus();
    inputRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onCopyChatClick = () => {
    const cid = histMenu.convId;
    if (!cid) return;
    const chatToCopy = conversations.find(c => c.id === cid);
    if (chatToCopy) {
      const textToCopy = chatToCopy.messages
        .map(m => `${m.sender === 'user' ? 'User' : 'AI'}: ${m.text}`)
        .join('\n\n');
      setCopyText(textToCopy);
      setCopyOpen(true);
    }
    closeHistMenu();
  };

  const onShareChatClick = () => {
    const cid = histMenu.convId;
    if (!cid) return;
    const chatToShare = conversations.find(c => c.id === cid);
    const shareText = chatToShare.messages
      .map(m => `${m.sender === 'user' ? 'User' : 'AI'}: ${m.text}`)
      .join('\n\n');
    
    if (navigator.share) {
      navigator.share({
        title: "Jerry's AI Chat",
        text: shareText,
        url: window.location.href,
      }).catch(() => {});
    } else {
      alert('Share not supported. Copy this text:\n\n' + shareText);
    }
    closeHistMenu();
  };

  const onDeleteClick = () => {
    const cid = histMenu.convId;
    if (!cid) return;
    const next = conversations.filter((c) => c.id !== cid);
    const ensured = ensureOneConversation(next);
    setConversations(ensured);
    saveConversations(ensured);
    if (currentId === cid) {
      const newest = [...ensured].sort((a, b) => (b.ts || 0) - (a.ts || 0))[0];
      setCurrentId(newest?.id || ensured[0]?.id);
    }
    closeHistMenu();
  };

  const renameSave = () => {
    const name = renameValue.trim();
    if (!name) return;
    const next = conversations.map((c) => {
      if (c.id !== renameTargetId) return c;
      return { ...c, title: name, ts: Date.now() };
    });
    setConversations(next);
    saveConversations(next);
    setRenameOpen(false);
  };

  const newChat = () => {
    const id = `conv_${Date.now()}`;
    const created = { id, title: ct("newChatTitle"), messages: [], ts: Date.now() };
    const next = [created, ...conversations];
    setConversations(next);
    setCurrentId(id);
    saveConversations(next);
    setSidebarOpen(false);
    setShowProfile(false);
    setShowInviteFriends(false);
    setShowMySubscribe(false);
  };

  const sendMessage = async () => {
    const msg = input.trim();
    if (!msg) return;
    
    const now = Date.now();
    
    let ensured = conversations.map((c) => {
      if (c.id !== currentId) return c;
      const title = c.messages.length === 0 ? (msg.length > 25 ? msg.slice(0, 25) + "..." : msg) : c.title;
      return { ...c, ts: now, title, messages: [...c.messages, { text: msg, sender: "user", ts: now }] };
    });
    
    setConversations(ensured);
    saveConversations(ensured);
    setInput("");
    
    setTimeout(() => {
      if (chatWindowRef.current) {
        chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
      }
    }, 50);
    
    setTyping(true);
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: msg })
      });
      
      const data = await response.json();
      const aiReply = data.reply || "Sorry, I couldn't process that.";
      
      const afterAI = ensured.map((c) => {
        if (c.id !== currentId) return c;
        return { ...c, ts: Date.now(), messages: [...c.messages, { text: aiReply, sender: "ai", ts: Date.now() }] };
      });
      
      setConversations(afterAI);
      saveConversations(afterAI);
    } catch (error) {
      console.error('Error:', error);
      const afterAI = ensured.map((c) => {
        if (c.id !== currentId) return c;
        return { ...c, ts: Date.now(), messages: [...c.messages, { text: "Connection error. Please try again.", sender: "ai", ts: Date.now() }] };
      });
      setConversations(afterAI);
      saveConversations(afterAI);
    } finally {
      setTyping(false);
      setTimeout(() => {
        if (chatWindowRef.current) {
          chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
        }
      }, 50);
    }
  };

  // ====== PROFILE FUNCTIONS ======
  const validatePassword = (password) => {
    const minLength = 8;
    const symbolRegex = /[@!#$%&\-]/g;
    const symbolCount = (password.match(symbolRegex) || []).length;
    return password.length >= minLength && symbolCount >= 2;
  };

  const handleUpdatePassword = () => {
    setPasswordError("");
    setPasswordSuccess("");
    
    const { oldPassword, newPassword, repeatPassword } = passwordPopupData;
    
    if (oldPassword !== "password123") {
      setPasswordError(ct("oldPasswordInvalid"));
      return;
    }
    
    if (!validatePassword(newPassword)) {
      setPasswordError(ct("passwordInvalid"));
      return;
    }
    
    if (newPassword !== repeatPassword) {
      setPasswordError(ct("passwordMismatch"));
      return;
    }
    
    const updatedProfile = { ...userProfile, passwordHash: newPassword };
    setUserProfile(updatedProfile);
    localStorage.setItem(USER_KEY, JSON.stringify(updatedProfile));
    
    setPasswordSuccess(ct("updateSuccess"));
    setTimeout(() => {
      setShowPasswordPopup(false);
      setPasswordPopupData({ oldPassword: "", newPassword: "", repeatPassword: "" });
      setPasswordSuccess("");
    }, 1500);
  };

  const handleSaveProfile = () => {
    if (userProfile.nameUpdatedOnce) {
      setProfileSaveMessage(ct("nameUpdateRestricted"));
      setTimeout(() => setProfileSaveMessage(""), 3000);
      return;
    }
    
    const nameInput = document.querySelector('.profile-name-input');
    const newName = nameInput?.value.trim();
    
    if (!newName) {
      setProfileSaveMessage("Name is required");
      setTimeout(() => setProfileSaveMessage(""), 3000);
      return;
    }
    
    const updatedProfile = {
      ...userProfile,
      name: newName,
      nameUpdatedOnce: true
    };
    
    setUserProfile(updatedProfile);
    localStorage.setItem(USER_KEY, JSON.stringify(updatedProfile));
    
    setProfileSaveMessage(ct("profileUpdateSuccess"));
    setTimeout(() => setProfileSaveMessage(""), 3000);
  };

  const handleInviteShare = (platform) => {
    const shareMessage = `Hi There,\nTry out this friendly AI website…\nhttps://jerry-ai.net\nTry to chat with Jerry, Very Interesting..\n\nYou may contact me at ${userProfile.email}`;
    
    const encodedMessage = encodeURIComponent(shareMessage);
    
    let url = "";
    switch(platform) {
      case "whatsapp":
        url = `https://wa.me/?text=${encodedMessage}`;
        break;
      case "telegram":
        url = `https://t.me/share/url?url=&text=${encodedMessage}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?text=${encodedMessage}`;
        break;
      case "sms":
        url = `sms:?body=${encodedMessage}`;
        break;
      case "line":
        url = `https://line.me/R/msg/text/?${encodedMessage}`;
        break;
      case "wechat":
        alert("Please copy this message to share on WeChat:\n\n" + shareMessage);
        return;
      case "gmail":
        url = `https://mail.google.com/mail/?view=cm&fs=1&su=Invitation to Jerry's AI&body=${encodedMessage}`;
        break;
      default:
        return;
    }
    
    if (url) {
      window.open(url, '_blank');
    }
  };

  // ====== SEARCH CHAT FUNCTION ======
  const handleSearchChat = () => {
    if (!searchTerm.trim()) {
      setSearchResults([]);
      return;
    }
    
    const term = searchTerm.toLowerCase();
    const results = conversations.filter(conv => {
      if (conv.title.toLowerCase().includes(term)) return true;
      return conv.messages.some(msg => msg.text.toLowerCase().includes(term));
    });
    
    setSearchResults(results);
  };

  const handleSelectSearchResult = (convId) => {
    setCurrentId(convId);
    setShowSearchPopup(false);
    setSearchTerm("");
    setSearchResults([]);
    setShowProfile(false);
    setShowInviteFriends(false);
    setShowMySubscribe(false);
  };

  // ====== SUBSCRIBE TABLE SORTING ======
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedPayments = [...payments].sort((a, b) => {
    let aVal = a[sortField];
    let bVal = b[sortField];
    
    if (sortField === "payment_date") {
      aVal = new Date(aVal);
      bVal = new Date(bVal);
    }
    
    if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
    if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  // ====== RENDER ======
  return (
    <>
      <header className="header">
        <button className="hamburger" type="button" onClick={() => setSidebarOpen(!sidebarOpen)}>
          <img src={ASSET("/icons/3line-icon.png")} alt="Menu" style={{ width: '22px', height: '26px' }} />
        </button>
        <Link to="/" className="brand">
          <img src={ASSET("/images/general/icons/logo.png")} className="logo" alt="Logo" />
        </Link>
        <div className="header-center">
          <Link to="/" className="title-link"><span className="title">Jerry's AI</span></Link>
        </div>
        <LTLanguageSwitcher globeSrc={ASSET("/images/general/icons/globe.png")} onChange={setTargetLang} />
      </header>

      <div className={"overlay" + (sidebarOpen ? " open" : "")} onClick={() => setSidebarOpen(false)} />

      <div className="page prochat-page">
        <main className="page-wrapper">
          <div className="pro-main">
            <aside className={"sidebar" + (sidebarOpen ? " open" : "")} onClick={stop}>
              <div className="sidebar-scroll">
                <button 
                  className="side-btn" 
                  type="button"
                  onClick={() => {
                    setShowProfile(true);
                    setShowInviteFriends(false);
                    setShowMySubscribe(false);
                    setSidebarOpen(false);
                  }}
                >
                  {ct("myProfile")}
                </button>
                <button 
                  className="side-btn" 
                  type="button"
                  onClick={() => {
                    console.log("Search Chat clicked, setting showSearchPopup to true");
                    setShowSearchPopup(true);
                    setSidebarOpen(false);
                  }}
                >
                  {ct("searchChat")}
                </button>
                <button className="side-btn" type="button" onClick={newChat}>{ct("newChat")}</button>

                {/* Services Flyout */}
                <div className="flywrap">
                  <button className="side-btn has-arrow" type="button" onClick={(e) => { e.stopPropagation(); setFlyoutOpen(v => v === "services" ? null : "services"); }}>
                    <span className="label">{ct("services")}</span>
                    <span className="chev">›</span>
                  </button>
                  <div className={"flyout" + (flyoutOpen === "services" ? " open" : "")}>
                    <Link className="fly-btn" to="/ai-pro-chat">{ct("serviceProChat")}</Link>
                    <Link className="fly-btn" to="/add-banner">{ct("serviceAddBanner")}</Link>
                    <Link className="fly-btn" to="/education">{ct("serviceEducation")}</Link>
                    <Link className="fly-btn" to="/digital-marketing">{ct("serviceDigitalMarketing")}</Link>
                    <Link className="fly-btn" to="/subscribe">{ct("serviceSubscription")}</Link>
                    <Link className="fly-btn" to="/analyse-data">{ct("serviceAnalyseData")}</Link>
                    <Link className="fly-btn" to="/cybersecurity">{ct("serviceCybersecurity")}</Link>
                    <Link className="fly-btn" to="/find-my-phone">{ct("serviceFindMyPhone")}</Link>
                    <Link className="fly-btn" to="/voice-translator">{ct("serviceVoiceTranslator")}</Link>
                    <Link className="fly-btn" to="/general-ai-chat">{ct("serviceGeneralChat")}</Link>
                  </div>
                </div>

                {/* Subscribe Flyout */}
                <div className="flywrap">
                  <button className="side-btn subscribe has-arrow" type="button" onClick={(e) => { e.stopPropagation(); setFlyoutOpen(v => v === "sub" ? null : "sub"); }}>
                    <span className="label">{ct("subscribe")}</span>
                    <span className="chev">›</span>
                  </button>
                  <div className={"flyout" + (flyoutOpen === "sub" ? " open" : "")}>
                    <Link className="fly-btn" to="/subscribe">Subscribe</Link>
                  </div>
                </div>

                <button 
                  className="side-btn invite" 
                  type="button"
                  onClick={() => {
                    setShowInviteFriends(true);
                    setShowProfile(false);
                    setShowMySubscribe(false);
                    setSidebarOpen(false);
                  }}
                >
                  {ct("inviteFriends")}
                </button>
                <button 
                  className="side-btn mysub" 
                  type="button"
                  onClick={() => {
                    setShowMySubscribe(true);
                    setShowProfile(false);
                    setShowInviteFriends(false);
                    setSidebarOpen(false);
                  }}
                >
                  {ct("mySubscribe")}
                </button>
                <button className="side-btn logout" type="button">{ct("logout")}</button>

                <div className="chat-history-section">
                  <div className="chat-history-title">Chat History</div>
                  <div className="chat-history-list">
                    {[...conversations].sort((a, b) => (b.ts || 0) - (a.ts || 0)).map((conv) => (
                      <div 
                        key={conv.id} 
                        className="chat-history-item"
                        onClick={() => { setCurrentId(conv.id); setSidebarOpen(false); closeHistMenu(); setShowProfile(false); setShowInviteFriends(false); setShowMySubscribe(false); }}
                      >
                        <div className="chat-history-content">
                          <div className="chat-history-text">
                            {escapeText(conv.title || "New Chat").length > 20 
                              ? escapeText(conv.title || "New Chat").substring(0, 20) + "..." 
                              : escapeText(conv.title || "New Chat")}
                          </div>
                          <div className="chat-history-date">
                            {formatTimestamp(conv.ts || Date.now())}
                          </div>
                        </div>
                        <button 
                          className="history-more-button"
                          type="button" 
                          onClick={(e) => { 
                            e.stopPropagation(); 
                            openHistMenu(e.currentTarget, conv.id); 
                          }}
                        >
                          ⋮
                        </button>
                      </div>
                    ))}
                  </div>
                </div>       
              </div>
            </aside>

            <section className="chat-content">
              {!showProfile && !showInviteFriends && !showMySubscribe ? (
                <>
                  <div className="welcome-section">
                    <img src={ASSET("/images/general/icons/chat-bulb-blue.png")} className="welcome-avatar" alt="AI" />
                    <div className="welcome-content">
                      <strong className="welcome-title">{ct("welcomeTitle")}</strong>
                      <div className="welcome-text">{ct("welcomeText")}</div>
                    </div>
                  </div>

                  <div className="chat-window" ref={chatWindowRef}>
                    {currentConv.messages.map((m, idx) => (
                      <div key={idx} className={`chat-message ${m.sender === 'user' ? 'chat-message-user' : 'chat-message-ai'}`}>
                        {m.sender === "ai" && (
                          <img 
                            src={ASSET("/images/general/icons/chat-bulb-blue.png")} 
                            className="ai-avatar"
                            alt="AI"
                          />
                        )}
                        <div className={`message-bubble ${m.sender === 'user' ? 'message-bubble-user' : 'message-bubble-ai'}`}>
                          <p className="message-text">{escapeText(m.text)}</p>
                          {m.sender === "ai" && (
                            <button className="reply-button" onClick={() => replyToMessage(m.text)}>
                              ↺
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                    
                    {typing && (
                      <div className="typing-indicator">
                        <img 
                          src={ASSET(`/images/general/icons/chat-bulb-${typingBulbColor}.png`)} 
                          className="typing-bulb"
                          alt="Jerry is thinking"
                        />
                        <span className="typing-text">Jerry is thinking...</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="input-area">
                    <div className="input-wrap">
                      <textarea 
                        ref={inputRef} 
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        placeholder={ct("inputPlaceholder")} 
                        rows={5} 
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            return;
                          }
                          if (e.key === 'Enter' && e.shiftKey) {
                            return;
                          }
                        }}
                      />
                      <div className="input-icons">
                        <button className="input-btn mic" type="button" style={{ color: '#f39c12', fontSize: '20px' }}>🎤</button>
                        <button className="input-btn attach" type="button" style={{ color: '#3498db', fontSize: '20px' }}>📎</button>
                        <button className="input-btn send" type="button" onClick={sendMessage} style={{ color: '#2ecc71', fontSize: '20px' }}>📤</button>
                      </div>
                    </div>
                    <div className="warning">{ct("warningText")}</div>
                  </div>
                </>
              ) : showInviteFriends ? (
                <div className="invite-friends-container">
                  <div className="invite-header">
                    <h2>{ct("inviteFriends")}</h2>
                    <button className="back-to-chat-btn" onClick={() => setShowInviteFriends(false)}>
                      {ct("backToChat")}
                    </button>
                  </div>
                  <div className="invite-icons-grid">
                    <button className="invite-icon" onClick={() => handleInviteShare("whatsapp")}>
                      <span>📱 WhatsApp</span>
                    </button>
                    <button className="invite-icon" onClick={() => handleInviteShare("wechat")}>
                      <span>💬 WeChat</span>
                    </button>
                    <button className="invite-icon" onClick={() => handleInviteShare("twitter")}>
                      <span>🐦 Twitter</span>
                    </button>
                    <button className="invite-icon" onClick={() => handleInviteShare("line")}>
                      <span>💚 LINE</span>
                    </button>
                    <button className="invite-icon" onClick={() => handleInviteShare("sms")}>
                      <span>📨 SMS</span>
                    </button>
                    <button className="invite-icon" onClick={() => handleInviteShare("telegram")}>
                      <span>✈️ Telegram</span>
                    </button>
                    <button className="invite-icon" onClick={() => handleInviteShare("gmail")}>
                      <span>📧 Gmail</span>
                    </button>
                  </div>
                  <div className="invite-message-preview">
                    <p className="preview-label">Message to send:</p>
                    <div className="preview-box">
                      Hi There,<br />
                      Try out this friendly AI website…<br />
                      https://jerry-ai.net<br />
                      Try to chat with Jerry, Very Interesting..<br /><br />
                      You may contact me at {userProfile.email}
                    </div>
                  </div>
                </div>
              ) : showMySubscribe ? (
                <div className="profile-container">
                  <div className="profile-header">
                    <h2>{ct("mySubscribe")}</h2>
                    <button className="back-to-chat-btn" onClick={() => setShowMySubscribe(false)}>
                      {ct("backToChat")}
                    </button>
                  </div>
                  
                  <div className="subscribe-table-wrapper">
                    <div className="table-controls">
                      <button className="sort-btn" onClick={() => handleSort("payment_date")}>
                        {ct("sortByDate")} {sortField === "payment_date" && (sortDirection === "asc" ? "↑" : "↓")}
                      </button>
                      <button className="sort-btn" onClick={() => handleSort("service_type")}>
                        {ct("sortByService")} {sortField === "service_type" && (sortDirection === "asc" ? "↑" : "↓")}
                      </button>
                    </div>
                    
                    <div className="table-responsive">
                      <table className="subscribe-table">
                        <thead>
                          <tr>
                            <th>{ct("paymentDate")}</th>
                            <th>{ct("paymentTime")}</th>
                            <th>{ct("userName")}</th>
                            <th>{ct("userEmail")}</th>
                            <th>{ct("serviceType")}</th>
                            <th>{ct("remarks")}</th>
                          </tr>
                        </thead>
                        <tbody>
                          {sortedPayments.map(payment => (
                            <tr key={payment.id}>
                              <td data-label={ct("paymentDate")}>{payment.payment_date}</td>
                              <td data-label={ct("paymentTime")}>{payment.payment_time}</td>
                              <td data-label={ct("userName")}>{payment.user_name}</td>
                              <td data-label={ct("userEmail")}>{payment.user_email}</td>
                              <td data-label={ct("serviceType")}>{payment.service_type}</td>
                              <td data-label={ct("remarks")} className="success-text">{payment.remarks}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="profile-container">
                  <div className="profile-header">
                    <h2>My Profile</h2>
                    <button className="back-to-chat-btn" onClick={() => setShowProfile(false)}>
                      {ct("backToChat")}
                    </button>
                  </div>
                  
                  <div className="profile-form">
                    <div className="form-group">
                      <label className="form-label">
                        {ct("userName")} <span className="required-star">*</span>
                        <span className="tooltip" data-tooltip={ct("tooltipMessage")}>ⓘ</span>
                      </label>
                      <input 
                        type="text" 
                        className={`profile-name-input ${userProfile.nameUpdatedOnce ? 'disabled-input' : ''}`}
                        defaultValue={userProfile.name}
                        disabled={userProfile.nameUpdatedOnce}
                        placeholder="Enter your name"
                        required
                      />
                      {userProfile.nameUpdatedOnce && (
                        <small className="update-warning">Name can only be updated once</small>
                      )}
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">{ct("userEmail")}</label>
                      <input 
                        type="email" 
                        className="profile-email-input disabled-input"
                        value={userProfile.email}
                        disabled
                        readOnly
                      />
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">{ct("userPassword")}</label>
                      <div className="password-field-wrapper">
                        <input 
                          type="password" 
                          className="profile-password-input disabled-input"
                          value="********"
                          disabled
                          readOnly
                        />
                        <button 
                          className="update-password-btn"
                          onClick={() => setShowPasswordPopup(true)}
                        >
                          {ct("updatePassword")}
                        </button>
                      </div>
                    </div>
                    
                    {profileSaveMessage && (
                      <div className={`profile-message ${profileSaveMessage.includes("success") ? 'success' : 'error'}`}>
                        {profileSaveMessage}
                      </div>
                    )}
                    
                    <div className="profile-buttons">
                      <button className="save-update-btn" onClick={handleSaveProfile}>
                        {ct("saveAndUpdate")}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* Search Chat Popup */}
            {showSearchPopup && (
              <div className="search-popup-overlay" onClick={() => setShowSearchPopup(false)}>
                <div className="search-popup" onClick={stop}>
                  <h3>{ct("searchPreviousChat")}</h3>
                  <input 
                    type="text"
                    className="search-input"
                    placeholder={ct("searchingFor")}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  
                  {searchResults.length > 0 && (
                    <div className="search-results">
                      {searchResults.map(result => (
                        <div 
                          key={result.id} 
                          className="search-result-item"
                          onClick={() => handleSelectSearchResult(result.id)}
                        >
                          {result.title}
                          <span className="result-date">{formatTimestamp(result.ts)}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  <div className="search-popup-buttons">
                    <button className="search-btn search" onClick={handleSearchChat}>
                      {ct("search")}
                    </button>
                    <button className="search-btn cancel" onClick={() => setShowSearchPopup(false)}>
                      {ct("cancel")}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {histMenu.open && (
              <div className="hist-menu open" style={{ left: histMenu.left, top: histMenu.top }} onClick={stop}>
                <button type="button" onClick={onRenameClick}>{ct("rename")}</button>
                <button type="button" onClick={onShareChatClick}>Share</button>
                <button type="button" onClick={onCopyChatClick}>Copy Chat</button>
                <button type="button" className="delete" onClick={onDeleteClick}>{ct("del")}</button>
              </div>
            )}

            {renameOpen && (
              <div className="modal-overlay" onClick={() => setRenameOpen(false)}>
                <div className="modal-box" onClick={stop}>
                  <h3 className="modal-title-left">Rename Your Chat Here</h3>
                  <input 
                    className="modal-input"
                    value={renameValue} 
                    onChange={(e) => setRenameValue(e.target.value.slice(0, 25))} 
                    maxLength="25"
                    placeholder="Enter new name (max 25 characters)"
                  />
                  <div className="modal-buttons">
                    <button className="modal-btn cancel" onClick={() => setRenameOpen(false)}>Cancel</button>
                    <button className="modal-btn ok" onClick={renameSave}>Save</button>
                  </div>
                </div>
              </div>
            )}

            {copyOpen && (
              <div className="modal-overlay" onClick={() => setCopyOpen(false)}>
                <div className="modal-box" onClick={stop}>
                  <h3 className="modal-title">✓ Chat Copied to Clipboard!</h3>
                  <p className="modal-message">
                    You can now paste it anywhere (Word, email, notepad, etc.)
                  </p>
                  <div className="modal-buttons">
                    <button className="modal-btn ok" onClick={() => setCopyOpen(false)}>OK</button>
                  </div>
                </div>
              </div>
            )}

            {/* Password Update Popup */}
            {showPasswordPopup && (
              <div className="password-popup-overlay" onClick={() => setShowPasswordPopup(false)}>
                <div className="password-popup" onClick={stop}>
                  <h3>Update Password</h3>
                  <input 
                    type="password"
                    placeholder={ct("oldPassword")}
                    value={passwordPopupData.oldPassword}
                    onChange={(e) => setPasswordPopupData({...passwordPopupData, oldPassword: e.target.value})}
                  />
                  <input 
                    type="password"
                    placeholder={ct("newPassword")}
                    value={passwordPopupData.newPassword}
                    onChange={(e) => setPasswordPopupData({...passwordPopupData, newPassword: e.target.value})}
                  />
                  <input 
                    type="password"
                    placeholder={ct("repeatNewPassword")}
                    value={passwordPopupData.repeatPassword}
                    onChange={(e) => setPasswordPopupData({...passwordPopupData, repeatPassword: e.target.value})}
                  />
                  {passwordError && <div className="password-error">{passwordError}</div>}
                  {passwordSuccess && <div className="password-success">{passwordSuccess}</div>}
                  <div className="popup-buttons">
                    <button className="popup-btn cancel" onClick={() => setShowPasswordPopup(false)}>Cancel</button>
                    <button className="popup-btn confirm" onClick={handleUpdatePassword}>Confirm</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>

      <footer>
        <div className="footer-inner">
          <div>
            <div className="footer-title">{t("footerCompany")}</div>
            <div className="footer-links">
              <Link to="/aboutus">{t("aboutUs")}</Link>
              <Link to="/support">{t("support")}</Link>
              <Link to="/contact">{t("contactUs")}</Link>
              <Link to="/GeneralServices">{t("generalServices")}</Link>
              <Link to="/pricing">{t("pricing")}</Link>
            </div>
          </div>
          <div>
            <div className="footer-title">{t("footerServices")}</div>
            <div className="footer-links">
              <Link to="/subscribe">{t("subscriptionPlan")}</Link>
              <Link to="/ai-pro-chat-info">{t("professionalAIChat")}</Link>
              <Link to="/add-banner">{t("addBannerFooter")}</Link>
              <Link to="/education">{t("educationFooter")}</Link>
              <Link to="/web-development">{t("webDevelopmentFooter")}</Link>
              <Link to="/app-development">{t("appDevelopmentFooter")}</Link>
              <Link to="/digital-marketing">{t("digitalMarketingFooter")}</Link>
              <Link to="/voice-translator">{t("voiceTranslatorFooter")}</Link>
              <Link to="/analyse-data">{t("analyseDataFooter")}</Link>
              <Link to="/cybersecurity">{t("enhanceCyberFooter")}</Link>
              <Link to="/find-my-phone">{t("findMyPhoneFooter")}</Link>
            </div>
          </div>
          <div>
            <div className="footer-title">{t("footerLegality")}</div>
            <div className="footer-links">
              <Link to="/terms">{t("terms")}</Link>
              <Link to="/privacy">{t("privacy")}</Link>
              <Link to="/pdpa">{t("pdpa")}</Link>
              <Link to="/services">{t("servicesPolicy")}</Link>
            </div>
          </div>
          <div>
            <div className="footer-title">{t("footerConnection")}</div>
            <div className="footer-links">
              <a href="/">{t("facebook")}</a>
              <a href="/">{t("linkedin")}</a>
              <a href="/">{t("twitter")}</a>
              <a href="/">{t("tiktok")}</a>
              <a href="/">{t("telegram")}</a>
            </div>
          </div>
        </div>
        <div className="copyright">{t("copyright")}</div>
      </footer>
    </>
  );
};

export default AIProChat;
