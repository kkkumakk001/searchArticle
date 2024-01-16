"use client"
import { useContext, useState, createContext } from "react";   
export const TagContext = createContext();
export const TagUpdateContext = createContext();
export const AuthContext = createContext();

export const TagProvider = ({ children }) => {
    const [tag, setTag] = useState("firebase");
    const [auth, setAuth] = useState(false);



    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            <TagContext.Provider value={tag}>
                <TagUpdateContext.Provider value={setTag}>
                    { children }
                </TagUpdateContext.Provider>
            </TagContext.Provider>
        </AuthContext.Provider>
    )
}

export const useTagContext = () => useContext(TagContext);
export const useTagUpdateContext = () => useContext(TagUpdateContext);
export const useAuthContext = () => useContext(AuthContext);