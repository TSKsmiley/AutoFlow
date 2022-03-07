import { useState } from "react"
import { Context, contextDefaultValues } from "./Context"

const ContextProvider = ({ children }) => {
    const [isLoggedIn, updateIsLoggedIn] = useState(contextDefaultValues.isLoggedIn);
    const [showPanelNav, updateShowPanelNav] = useState(contextDefaultValues.showPanelNav);

    const setIsLoggedIn = (newBool) => updateIsLoggedIn(newBool)
    const setShowPanelNav = (newBool) => updateShowPanelNav(newBool)

    return (
        <Context.Provider value = {{            
            isLoggedIn,
            setIsLoggedIn,
            showPanelNav,
            setShowPanelNav
        }}>
            {children}
        </Context.Provider>


    )
}

export default ContextProvider;