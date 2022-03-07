import { createContext } from "react";

export const ContextState = {
    isLoggedIn: Boolean,
    updateIsLoggedIn: (newBool) => {},
    showPanelNav: Boolean,
    updateShowPanelNav: (newBool) => {}
}

export const contextDefaultValues = {
    isLoggedIn: false,
    updateIsLoggedIn: () => {},
    showPanelNav: false,
    updateShowPanelNav: () => {}
}


export const Context = createContext(contextDefaultValues);