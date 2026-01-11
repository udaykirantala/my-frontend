  import { useState, useEffect } from "react";
  import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Chip,
    Stack,
    useTheme,
    useMediaQuery,
    alpha,
  } from "@mui/material";
  import {
    Instagram,
    Facebook,
    YouTube,
    WhatsApp,
    Link as LinkIcon,
    CloudDownload,
  } from "@mui/icons-material";

  export default function InputSection({ onDownload,inputUrl,setInputUrl,clearInput }) {
    const [url, setUrl] = useState("");
    const [detectedPlatform, setDetectedPlatform] = useState(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
      if (url.includes("instagram.com") || url.includes("instagr.am"))
        setDetectedPlatform("instagram");
      else if (url.includes("facebook.com") || url.includes("fb.com"))
        setDetectedPlatform("facebook");
      else if (url.includes("youtube.com") || url.includes("youtu.be"))
        setDetectedPlatform("youtube");
      else if (url.includes("whatsapp.com") || url.includes("wa.me"))
        setDetectedPlatform("whatsapp");
      else setDetectedPlatform(null);
    }, [url]);

    const handleDownloadClick = () => {
      if (!url || !detectedPlatform) return;
      onDownload(url, detectedPlatform);
      setUrl("")
    };

    const PlatformIcon = {
      instagram: <Instagram />,
      facebook: <Facebook />,
      youtube: <YouTube />,
      whatsapp: <WhatsApp />,
    };

    const PlatformColor = {
      instagram: "#E4405F",
      facebook: "#1877F2",
      youtube: "#FF0000",
      whatsapp: "#25D366",
    };

    return (
      <Box
        sx={{
          py: { xs: 6, md:5 },
          background:
            theme.palette.mode === "dark"
              ? "radial-gradient(circle at top, rgba(99,102,241,0.1),transparent)"
              : "radial-gradient(circle at top, rgba(99,102,241,0.05),transparent)",
        }}
      >
        <Container maxWidth="md">
          <Stack spacing={4} alignItems="center">
            <Box textAlign="center" sx={{ maxWidth: 600 }}>
              <Typography
                variant={isMobile ? "h4" : "h3"}
                sx={{
                  fontWeight: 800,
                  background:
                    "linear-gradient(135deg,#6366f1 0%,#ec4899 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 2,
                }}
              >
                Download Anything, Instantly
              </Typography>
              <Typography color="text.secondary">
                Paste any social media link & download videos instantly
              </Typography>
            </Box>

            {/* Input Box */}
            <Box
              sx={{
                width: "100%",
                maxWidth: 700,
                p: { xs: 3, md: 4 },
                borderRadius: 3,
                backgroundColor: theme.palette.background.paper,
                boxShadow:
                  theme.palette.mode === "dark"
                    ? "0 8px 32px rgba(0,0,0,0.4)"
                    : "0 8px 32px rgba(0,0,0,0.08)",
                border: `1px solid ${
                  theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(0,0,0,0.07)"
                }`,
              }}
            >
              <Stack spacing={2}>
                <TextField
                  value={url}
                  fullWidth
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="Paste your link here…"
                  InputProps={{
                    startAdornment: detectedPlatform ? (
                      <Box
                        sx={{
                          mr: 1.5,
                          color: PlatformColor[detectedPlatform],
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {PlatformIcon[detectedPlatform]}
                      </Box>
                    ) : (
                      <LinkIcon sx={{ mr: 1 }} />
                    ),
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleDownloadClick();
                  }}
                />

                <Button
                  fullWidth
                  variant="contained"
                  disabled={!url || !detectedPlatform}
                  onClick={handleDownloadClick}
                  startIcon={<CloudDownload />}
                  sx={{
                    py: 1.5,
                    fontWeight: 700,
                    fontSize: isMobile ? "1rem" : "1.1rem",
                    background: "linear-gradient(135deg,#6366f1,#ec4899)",
                    "&:hover": {
                      background: "linear-gradient(135deg,#4f46e5,#db2777)",
                    },
                  }}
                >
                  Download Now
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>
    );
  }
