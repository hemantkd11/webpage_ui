import React, { createContext, useContext } from 'react'

export default ModelContext = createContext()

export const useModal =()=> useContext(ModelContext)