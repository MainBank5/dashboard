import { createContext, useState } from "react";

interface ExpandedContextType {
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SideContext = createContext<ExpandedContextType>({ expanded: true, setExpanded: () => {} });

const Sidecard = ({ children }: { children: React.ReactNode }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <SideContext.Provider value={{ expanded, setExpanded }}>
      {children}
    </SideContext.Provider>
  );
};

export default Sidecard;
