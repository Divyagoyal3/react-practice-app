import { createContext, useState } from "react"


export const ThemeContext = createContext()
export const  ThemeProvider = ({children})=>{

     const [theme , SetTheme] = useState('light')

        const toggleTheme  = ()=>{
             SetTheme(theme === 'light'  ? 'dark' : 'light')
        }
     return(<>
     
      <ThemeContext.Provider value={{theme, toggleTheme}}>
         {children}
      </ThemeContext.Provider>
     </>)
}

export default ThemeProvider