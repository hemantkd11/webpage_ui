
import { useState,createContext } from 'react'

export const ModelContext = createContext({})


const ModalProvider = ({children})=>{
    const[modal, setModal] = useState({
        modal: false,
        modalData:{}
    })
    return(
        <ModelContext.Provider value={{modal,setModal}}>
            {children}
        </ModelContext.Provider>
    )
}
export default ModalProvider