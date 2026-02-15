import {
  Box,
  Container,
  Typography,
  Paper,
  useTheme,
  alpha,
} from "@mui/material";

export default function CookiePolicy() {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: "100vh", py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" textAlign="center" mb={5}>
          Cookie Policy
        </Typography>

        <Paper sx={{ p: 5, borderRadius: 4 }}>
          <Typography paragraph>
            We use cookies to improve website performance,
            analyze traffic, and deliver personalized ads
            through Google AdSense.
          </Typography>

          <Typography paragraph>
            You can disable cookies in your browser settings.
            Some features may not function properly.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
