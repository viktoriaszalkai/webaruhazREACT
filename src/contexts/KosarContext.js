import { createContext, useState } from "react";

export const KosarContext = createContext("");

export const KosarProvider=({children})=>{
    const [kosarL, setKosar] = useState([]);
    function kosarba(adat){

        const sKosarL=[...kosarL];
        sKosarL.push(adat)
        setKosar([...sKosarL]);
    }


    return<KosarContext.Provider value={{kosarL, kosarba}}>
        {children}
    </KosarContext.Provider>
}