import { useState } from "react";
import { ThemeProvider, CssBaseline, Box } from "@mui/material";
import { lightTheme, darkTheme } from "../theme.jsx";

import Navbar from "../components/Navbar.jsx";
import InputSection from "../components/InputSection.jsx";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer.jsx";
import DownloadModal from "../components/DownloadModal.jsx";
import PrivacyBanner from "../components/PrivacyBanner.jsx";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalStatus, setModalStatus] = useState("loading");

  const [selectedMedia, setSelectedMedia] = useState(null);
  const [inputUrl, setInputUrl] = useState("");


  const handleToggleDarkMode = () => setDarkMode(!darkMode);

  const handleDownload = async (url) => {
    setModalOpen(true);
    setModalStatus("loading");
    try {
      const res = await fetch("https://server-jjm6.onrender.com/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url })
      });

      const data = await res.json();

      if (!data.success) {
        setModalStatus("error");
        return;
      }

      // set video preview data
      setSelectedMedia({
        previewUrl: data.previewUrl,
        downloadUrl: data.downloadUrl,
        thumbnail: data.thumbnail
      });
      setInputUrl("")
      // hide modal
      setModalOpen(false);

    } catch (err) {
      setModalStatus("error");
    }
  };


  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />

      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        
        <Navbar darkMode={darkMode} onToggleDarkMode={handleToggleDarkMode} />

        <Box sx={{ flex: 1 }}>
          
          <InputSection onDownload={handleDownload} inputUrl={inputUrl} setInputUrl={setInputUrl} />

          {/* VIDEO PREVIEW BELOW INPUT SECTION */}
          {selectedMedia && (
            <Box sx={{ maxWidth: 350, mx: "auto", }}>
              <video
                controls
                autoPlay
                style={{ width: "100%", borderRadius: 8 }}
                src={`https://server-jjm6.onrender.com/api/stream?videoUrl=${encodeURIComponent(selectedMedia.downloadUrl)}`}
              />

              <button
                style={{
                  marginTop: 12,
                  padding: "10px 18px",
                  borderRadius: 6,
                  background: "linear-gradient(135deg,#6366f1,#ec4899)",
                  border: "none",
                  color: "white",
                  fontWeight: 600,
                  cursor: "pointer",
                }}
                onClick={() => window.open(selectedMedia.downloadUrl)}
              >
                Download Now
              </button>
            </Box>
          )}

          <FAQ />
        </Box>

        <Footer />

        {/* modal only for loading/error */}
        <DownloadModal
          open={modalOpen}
          status={modalStatus}
          onClose={() => setModalOpen(false)}
        />

        <PrivacyBanner />
      </Box>
    </ThemeProvider>
  );
}
