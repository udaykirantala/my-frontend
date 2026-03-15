import { CssBaseline, ThemeProvider } from "@mui/material";
import AppRoutes from "./routes/AppRoutes";
import { darkTheme, lightTheme } from "./theme.jsx";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggleDarkMode = () => setDarkMode(!darkMode);
  return (
    <>
    <BrowserRouter>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        <Navbar darkMode={darkMode} onToggleDarkMode={handleToggleDarkMode} />
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
    </>
  )
}

export default App;
