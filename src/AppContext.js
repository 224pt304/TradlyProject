
import React, { useState, createContext, useEffect } from 'react'
export const AppContext = createContext()
export const AppContextProvider = (props) => {
    const { children } = props
    const [isLogin, setisLogin] = useState(false);

    return (
        <AppContext.Provider value={{
            isLogin, setisLogin,
           
        }}>
            {children}
        </AppContext.Provider>
    )
}