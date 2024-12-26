import React, { createContext, useState } from 'react'

const AuthContext = createContext(null);

function UserContext({child}) {
    const [users, setUsers] = useState('hello');
  return (
   <AuthContext.Provider value={{users}}>
    {child}
   </AuthContext.Provider>
  )
}

export default UserContext;