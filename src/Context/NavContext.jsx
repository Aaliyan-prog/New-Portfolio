import React, { createContext, useState } from 'react'

export const NavbarContext = createContext();

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
    <NavbarContext.Provider value={{ active, HandleActive, sidebar, setSidebar }}>{children}</NavbarContext.Provider>
  )
}

export default NavProvider