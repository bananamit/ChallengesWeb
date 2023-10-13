import React, { useState } from 'react';
import { UserContext } from './userContext';
const user = {}
export const Userprovider = ({ children }) => { const [user, setUser] = useState()
  return (
    <UserContext.Provider value={{ user, setUser }}>
    {children}
    </UserContext.Provider>  )
}