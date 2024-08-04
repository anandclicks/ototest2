import { createContext,useState } from "react";

export const UserContext = createContext({})
export function UserContextProvider ({children}){
  const [Navstate, setNavstate] = useState(false)
  return (
    <UserContext.Provider value={{Navstate,setNavstate}}>
      {children}
    </UserContext.Provider>
  )
}