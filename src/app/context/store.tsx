'use client';

import { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

interface ContextProps {
    showMenu: boolean,
    setShowMenu: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextProps>({
    showMenu: false,
    setShowMenu: (): boolean => false
})

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <GlobalContext.Provider value={{showMenu, setShowMenu}}>
            {children}
        </GlobalContext.Provider>
    )
       
}

export const useGlobalContext = () => useContext(GlobalContext)