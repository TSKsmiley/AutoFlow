import { useState } from "react"
import { Context, contextDefaultValues } from "./Context"

const ContextProvider = ({ children }) => {
    const [isLoggedIn, updateIsLoggedIn] = useState(contextDefaultValues.isLoggedIn);

    const setIsLoggedIn = (newBool) => updateIsLoggedIn(newBool)

    return (
        <Context.Provider value = {{            
            isLoggedIn,
            setIsLoggedIn,
        }}>
            {children}
        </Context.Provider>


    )
}

export default ContextProvider;