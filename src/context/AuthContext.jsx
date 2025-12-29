import { createContext, useState } from "react";

// Create AuthContext
export const AuthContext = createContext();

//Provide AuthContext to children components
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState({
         // TEMP: fake logged-in user (I'll replace later)
        id: 1,
        username: "Blessing Agharese",
        profilePic: "https://ln.run/QPtgQ",
    });

    const value = { currentUser, setCurrentUser }; // I will use this later for login/logout 

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

