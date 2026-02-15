import {
  Box,
  Container,
  Typography,
  Stack,
  Link,
  Divider,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";

import {
  Download as DownloadIcon,
  Twitter,
  Facebook,
  Instagram,
  GitHub,
  Favorite,
} from "@mui/icons-material";

import { Link as RouterLink } from "react-router-dom";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  // ✅ Updated links with proper paths
  const links = {
    product: [
      { label: "Features", path: "/features" },
      { label: "How it Works", path: "/howitworks" },
      { label: "Pricing", path: "/pricing" },
      { label: "API", path: "/api" },
    ],
    support: [
      { label: "Help Center", path: "/help" },
      { label: "FAQ", path: "/faq" },
      { label: "Contact Us", path: "/contact" },
      { label: "Status", path: "/status" },
    ],
    legal: [
      { label: "Privacy Policy", path: "/privacypolicy" },
      { label: "Terms of Service", path: "/terms" },
      { label: "Cookie Policy", path: "/cookiepolicy" },
      { label: "Disclaimer", path: "/disclaimer" },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(15,23,42,.8)"
            : "rgba(248,250,252,.8)",
        borderTop: `1px solid ${
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.1)"
            : "rgba(0,0,0,0.06)"
        }`,
        pt: { xs: 6, md: 8 },
        pb: 3,
        mt: 6,
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={5}>
          {/* Top */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2,1fr)",
                md: "2fr 1fr 1fr 1fr",
              },
              gap: 4,
            }}
          >
            {/* Logo + About */}
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    background:
                      "linear-gradient(135deg,#6366f1,#ec4899)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mr: 1.5,
                  }}
                >
                  <DownloadIcon sx={{ color: "white" }} />
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 700,
                    background:
                      "linear-gradient(135deg,#6366f1,#ec4899)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  QuickDownload
                </Typography>
              </Box>

              <Typography
                color="text.secondary"
                sx={{ fontSize: ".9rem", mb: 2 }}
              >
                Download content instantly from your favorite platforms.
                Free, secure & no signup required.
              </Typography>

              {/* Social */}
              <Stack direction="row" spacing={1}>
                {[Twitter, Facebook, Instagram, GitHub].map((Icon, i) => (
                  <IconButton key={i} size="small">
                    <Icon />
                  </IconButton>
                ))}
              </Stack>
            </Box>

            {/* Footer link groups */}
            {Object.entries(links).map(([key, group], idx) => (
              <Box key={key}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: ".85rem",
                    mb: 2,
                  }}
                >
                  {key.toUpperCase()}
                </Typography>

                <Stack spacing={1}>
                  {group.map((item) => (
                    <Link
                      key={item.label}
                      component={RouterLink}
                      to={item.path}
                      underline="none"
                      sx={{
                        color: "text.secondary",
                        fontSize: ".85rem",
                        transition: "all 0.2s ease",
                        "&:hover": {
                          color: "primary.main",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </Stack>
              </Box>
            ))}
          </Box>

          <Divider />

          {/* bottom row */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Typography
              color="text.secondary"
              sx={{ fontSize: ".85rem" }}
            >
              © {new Date().getFullYear()} QuickDownload. All rights reserved.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Typography sx={{ fontSize: ".85rem" }}>
                Made with
              </Typography>
              <Favorite
                sx={{ fontSize: 16, color: theme.palette.error.main }}
              />
              <Typography sx={{ fontSize: ".85rem" }}>
                for creators
              </Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
