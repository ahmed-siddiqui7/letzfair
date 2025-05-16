"use client";

import React, {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface User {
  user: string | null;
  setuserDetails: React.Dispatch<SetStateAction<string | null>>;
}

export const UserContext = createContext<User>({
  user: "",
  setuserDetails: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [userDetails, setuserDetails] = useState<string | null>("");

  return (
    <UserContext.Provider value={{ user: userDetails, setuserDetails }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
