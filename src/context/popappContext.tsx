import {createContext, PropsWithChildren, useState} from "react";
import {IPopappContext} from "../assets/type/type.ts";

export const PopappContext = createContext<IPopappContext>({
    popapp: {
        popappStatement: false,
        popappNumber: false,
        popappSpareParts: false,
        message: ""
},
    setPopapp: null,
});

export const PopappProvider = ({children}: PropsWithChildren) => {
    const [popapp, setPopapp] = useState({
        popappStatement: false,
        popappNumber: false,
        popappSpareParts: false,
        message: '',
    })

    return (
        <PopappContext.Provider value={{popapp, setPopapp}}>
            {children}
        </PopappContext.Provider>
    )
}