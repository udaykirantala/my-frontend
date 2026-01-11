import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  IconButton,
  Collapse,
  Stack,
  useTheme,
  alpha,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShieldIcon from "@mui/icons-material/Shield";

export default function PrivacyBanner() {
  const theme = useTheme();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("privacy-accepted");
    if (!accepted) {
      setTimeout(() => setShow(true), 1000);
    }
  }, []);

  const acceptConsent = () => {
    localStorage.setItem("privacy-accepted", "true");
    setShow(false);
  };

  return (
    <Collapse in={show}>
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: alpha(
            theme.palette.background.paper,
            theme.palette.mode === "dark" ? 0.95 : 0.98
          ),
          backdropFilter: "blur(12px)",
          borderTop: `1px solid ${
            theme.palette.mode === "dark"
              ? "rgba(255,255,255,0.1)"
              : "rgba(0,0,0,0.08)"
          }`,
          zIndex: 1300,
          p: { xs: 2, md: 3 },
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <ShieldIcon sx={{ color: theme.palette.primary.main }} />

              <Box>
                <Typography sx={{ fontWeight: 700, mb: 0.5 }}>
                  Privacy Notice
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: ".9rem" }}>
                  We don’t store your downloads. By using this tool, you agree to
                  download only media you are allowed to use.
                </Typography>
              </Box>
            </Stack>

            <Stack direction="row" spacing={1}>
              <Button
                variant="contained"
                onClick={acceptConsent}
                sx={{
                  background: "linear-gradient(135deg,#6366f1,#ec4899)",
                  "&:hover": {
                    background: "linear-gradient(135deg,#4f46e5,#db2777)",
                  },
                }}
              >
                I Understand
              </Button>

              <IconButton onClick={() => setShow(false)}>
                <CloseIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </Collapse>
  );
}
