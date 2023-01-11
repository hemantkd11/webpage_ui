import React, { createContext, useContext } from 'react'

export const ModelContext = createContext([])

export const useModal =()=> useContext(ModelContext)