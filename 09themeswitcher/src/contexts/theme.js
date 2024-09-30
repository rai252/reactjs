import { createContext, useContext } from 'react';
export const ThemeContext = createContext({
    themeMode: "Light",
    darkTheme: () => { },
    lightTheme: () => { },
})

export const ThemeProvider = ThemeContext.Provider

export default function useThem() {
    return useContext(ThemeContext)
}