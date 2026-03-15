import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Container,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import {
  Brightness4,
  Brightness7,
  Language,
  Download as DownloadIcon,
} from "@mui/icons-material";

import { Link as RouterLink } from "react-router-dom";

export default function Navbar({ darkMode, onToggleDarkMode }) {
  const [langAnchor, setLangAnchor] = useState(null);
  const [currentLang, setCurrentLang] = useState("EN");

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleLanguageClick = (event) => {
    setLangAnchor(event.currentTarget);
  };

  const handleLanguageClose = (lang) => {
    if (lang) setCurrentLang(lang);
    setLangAnchor(null);
  };

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: darkMode
          ? "rgba(30, 41, 59, 0.8)"
          : "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${
          darkMode ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.06)"
        }`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, sm: 72 } }}>

          {/* Logo Section */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              flexGrow: 1,
              textDecoration: "none",
              color: "inherit",
              cursor: "pointer",
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: 2,
                background:
                  "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mr: 1.5,
              }}
            >
              <DownloadIcon sx={{ color: "white", fontSize: 24 }} />
            </Box>

            <Typography
              variant={isMobile ? "h6" : "h5"}
              sx={{
                fontWeight: 700,
                background:
                  "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {isMobile ? "UniversalDL" : "UniversalDownload"}
            </Typography>
          </Box>

          {/* Right Section */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
            <IconButton
              onClick={handleLanguageClick}
              sx={{
                color: darkMode ? "text.primary" : "text.secondary",
              }}
            >
              <Language />
            </IconButton>

            <Menu
              anchorEl={langAnchor}
              open={Boolean(langAnchor)}
              onClose={() => handleLanguageClose()}
            >
              {["EN", "ES", "FR", "DE", "AR"].map((lang) => (
                <MenuItem key={lang} onClick={() => handleLanguageClose(lang)}>
                  {lang}
                </MenuItem>
              ))}
            </Menu>

            <IconButton
              onClick={onToggleDarkMode}
              sx={{
                color: darkMode ? "text.primary" : "text.secondary",
              }}
            >
              {darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>

            {!isMobile && (
              <Typography
                variant="body2"
                sx={{
                  ml: 1,
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 1,
                  backgroundColor: darkMode
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(0,0,0,0.04)",
                  color: "text.secondary",
                }}
              >
                {currentLang}
              </Typography>
            )}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}