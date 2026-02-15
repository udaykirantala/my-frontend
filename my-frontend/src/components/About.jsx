import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  useTheme,
  alpha,
  Stack,
} from "@mui/material";

export default function About() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        py: 8,
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(180deg,#0f172a 0%,#111827 100%)"
            : "linear-gradient(180deg,#f8fafc 0%,#eef2f7 100%)",
      }}
    >
      <Container maxWidth="md">
        <Box textAlign="center" mb={5}>
          <Typography
            variant="h3"
            fontWeight={700}
            sx={{
              background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About QuickDownload
          </Typography>
        </Box>

        <Paper
          sx={{
            p: 5,
            borderRadius: 4,
            backdropFilter: "blur(12px)",
            backgroundColor:
              theme.palette.mode === "dark"
                ? alpha(theme.palette.background.paper, 0.7)
                : alpha("#fff", 0.9),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
          }}
        >
          <Typography paragraph>
            QuickDownload is a free online tool that allows users to download
            publicly accessible content quickly and securely.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" fontWeight={600}>
            Our Mission
          </Typography>

          <Stack spacing={1} mt={2}>
            <Typography>• Fast downloads</Typography>
            <Typography>• Secure processing</Typography>
            <Typography>• No sign-up required</Typography>
            <Typography>• Easy-to-use interface</Typography>
          </Stack>

          <Divider sx={{ my: 3 }} />

          <Typography paragraph>
            We do not host, store, or archive any files on our servers.
            All processing is temporary and delivered directly to users.
          </Typography>

          <Typography paragraph>
            We are not affiliated with Instagram, Facebook, Twitter,
            or any third-party platform.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
