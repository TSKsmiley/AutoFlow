import { createContext } from "react";

export const ContextState = {
    isLoggedIn: Boolean,
    updateIsLoggedIn: (newBool) => {}
}

export const contextDefaultValues = {
    isLoggedIn: false,
    updateIsLoggedIn: () => {},
}


export const Context = createContext(contextDefaultValues);