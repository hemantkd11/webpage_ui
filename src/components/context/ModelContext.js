import{  useContext } from 'react'

import { ModelContext } from './ModelProvider'


const useModal =()=> {
    const {modal,setModal}= useContext(ModelContext)
    return {modal,setModal}
}
export default useModal