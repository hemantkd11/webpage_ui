
import { useState } from 'react'
import {ModelContext} from './ModelContext'

const ModalProvider = ({children})=>{
    const[modal, setModal] = useState()
    return(
        <ModelContext.Provider value={{modal,setModal}}>
            {children}
        </ModelContext.Provider>
    )
}
export default ModalProvider