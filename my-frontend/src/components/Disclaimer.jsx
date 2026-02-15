import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  useTheme,
  alpha,
} from "@mui/material";

export default function Disclaimer() {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: "100vh", py: 8 }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          fontWeight={700}
          textAlign="center"
          mb={5}
          sx={{
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Disclaimer
        </Typography>

        <Paper sx={{ p: 5, borderRadius: 4 }}>
          <Typography paragraph>
            QuickDownload is an independent tool.
          </Typography>

          <Typography paragraph>
            • We do not host any content.
          </Typography>

          <Typography paragraph>
            • We do not store downloaded media.
          </Typography>

          <Typography paragraph>
            • We are not affiliated with any third-party platforms.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography paragraph>
            Users are responsible for ensuring compliance with
            copyright laws and platform terms.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
