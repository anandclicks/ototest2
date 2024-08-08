import { createContext,useState } from "react";

export const UserContext = createContext({})
export function UserContextProvider ({children}){
  const [Navstate, setNavstate] = useState(false)
  const [Formstate, setFormstate] = useState(false)

  return (
    <UserContext.Provider value={{Navstate,setNavstate,Formstate,setFormstate}}>
      {children}
    </UserContext.Provider>
  )
}