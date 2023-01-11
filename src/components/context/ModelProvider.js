
import { useState } from 'react'
import ModelContext from './ModelContext'

const ModalProvider = ({children})=>{
    const setModal = useState()
    return(
        <ModelContext.Provider value={{setModal}}>
            {children}
        </ModelContext.Provider>
    )
}