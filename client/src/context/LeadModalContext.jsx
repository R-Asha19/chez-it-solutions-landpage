import React, { createContext, useContext, useState, useCallback } from "react";

const LeadModalContext = createContext(null);

export const LeadModalProvider = ({ children }) => {
  const [modalConfig, setModalConfig] = useState(null);

  const openLeadModal = useCallback((config) => {
    setModalConfig(config);
  }, []);

  const closeLeadModal = useCallback(() => setModalConfig(null), []);

  return (
    <LeadModalContext.Provider value={{ modalConfig, openLeadModal, closeLeadModal }}>
      {children}
    </LeadModalContext.Provider>
  );
};

export const useLeadModal = () => {
  const ctx = useContext(LeadModalContext);
  if (!ctx) throw new Error("useLeadModal must be used within LeadModalProvider");
  return ctx;
};
