
import React, { useState, createContext, useEffect } from 'react'
export const AppContext = createContext()
export const AppContextProvider = (props) => {
    const { children } = props
    const [isLogin, setisLogin] = useState(true);
    const [cart, setcart] = useState([]);
    const [favrite, setfavrite] = useState([]);
    const [history, sethistory] = useState([]);
    const [feedback, setfeedback] = useState([]);
    const [Browser, setBrowser] = useState([]);

    return (
        <AppContext.Provider value={{
            isLogin, setisLogin,
            cart, setcart,
            favrite, setfavrite,
            history, sethistory,
            feedback, setfeedback,
            Browser, setBrowser
        }}>
            {children}
        </AppContext.Provider>
    )
}