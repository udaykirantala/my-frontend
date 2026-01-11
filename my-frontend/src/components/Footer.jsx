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

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const links = {
    product: ["Features", "How it Works", "Pricing", "API"],
    support: ["Help Center", "FAQ", "Contact Us", "Status"],
    legal: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Disclaimer"],
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
        mt: 6
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

              <Typography color="text.secondary" sx={{ fontSize: ".9rem", mb: 2 }}>
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
            {[links.product, links.support, links.legal].map((group, idx) => (
              <Box key={idx}>
                <Typography
                  sx={{
                    fontWeight: 700,
                    fontSize: ".85rem",
                    mb: 2,
                  }}
                >
                  {idx === 0 ? "PRODUCT" : idx === 1 ? "SUPPORT" : "LEGAL"}
                </Typography>

                <Stack spacing={1}>
                  {group.map((label) => (
                    <Link
                      key={label}
                      underline="none"
                      href="#"
                      sx={{
                        color: "text.secondary",
                        fontSize: ".85rem",
                        "&:hover": { color: "primary.main" },
                      }}
                    >
                      {label}
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
            <Typography color="text.secondary" sx={{ fontSize: ".85rem" }}>
              © {new Date().getFullYear()} QuickDownload. All rights reserved.
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: .5 }}>
              <Typography sx={{ fontSize: ".85rem" }}>Made with</Typography>
              <Favorite sx={{ fontSize: 16, color: theme.palette.error.main }} />
              <Typography sx={{ fontSize: ".85rem" }}>for creators</Typography>
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
