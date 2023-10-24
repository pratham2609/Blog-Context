import React from "react";
const ThemeContext = React.createContext(false);


const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = React.useState(false);
    const toggleTheme = () => {
        setTheme(!theme);
    };
    console.log(theme)
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export { ThemeContext, ThemeProvider };