import React, { createContext, useState } from 'react'

export const navbarContext = createContext();

const NavProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);
  const [active, setActive] = useState("home");
  
  const HandleActive = (currentOption) => {
    switch (currentOption) {
      case "home":
      case "project":
      case "resume":
      case "contact":
        setActive(currentOption);
        break;
      default:
        setActive("home");
        break;
    }
    setSidebar(false)
  };

  return (
    <navbarContext.Provider value={{ active, HandleActive, sidebar, setSidebar }}>{children}</navbarContext.Provider>
  )
}

export default NavProvider