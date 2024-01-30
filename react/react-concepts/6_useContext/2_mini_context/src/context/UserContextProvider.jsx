import { useContext, useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// creating a custom hook
function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser was used ouside of the PostProvider");
  }
  return context;
}

export { UserContextProvider, useUser };
