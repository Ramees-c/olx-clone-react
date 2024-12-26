import React, { createContext, useState } from 'react'

export const AuthentContext = createContext(null)

function UsersContext({children}) {
  const [user, setUser] = useState({})
  return (
    <AuthentContext.Provider value={{user, setUser}}>
      {children}
    </AuthentContext.Provider>
  )
}

export default UsersContext

