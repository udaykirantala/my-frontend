import {
  Box,
  Container,
  Typography,
  Paper,
  Divider,
  useTheme,
  alpha,
} from "@mui/material";
import { Link } from "@mui/material";

export default function Terms() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(180deg, #0f172a 0%, #111827 100%)"
            : "linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%)",
        py: 8,
      }}
    >
      <Container maxWidth="md">
        {/* Header */}
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
            Terms of Service
          </Typography>

          <Typography
            variant="subtitle1"
            color="text.secondary"
            mt={2}
          >
            Last updated: February 2026
          </Typography>
        </Box>

        {/* Glass Card */}
        <Paper
          elevation={0}
          sx={{
            p: 5,
            borderRadius: 4,
            backdropFilter: "blur(12px)",
            backgroundColor:
              theme.palette.mode === "dark"
                ? alpha(theme.palette.background.paper, 0.7)
                : alpha("#ffffff", 0.9),
            border: `1px solid ${alpha(theme.palette.primary.main, 0.15)}`,
            boxShadow: `0 20px 40px ${alpha(
              theme.palette.primary.main,
              0.08
            )}`,
          }}
        >
          <Typography paragraph>
            By accessing and using <strong>QuickDownload</strong>,
            you agree to comply with these Terms of Service.
            If you do not agree, please do not use the website.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Section 1 */}
          <Typography variant="h6" fontWeight={600} gutterBottom>
            1. Use of Service
          </Typography>

          <Typography paragraph>
            QuickDownload provides a free tool for downloading
            publicly accessible content from supported platforms.
          </Typography>

          <Typography paragraph>
            You agree to use the service only for lawful purposes
            and not to violate any applicable laws or regulations.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Section 2 */}
          <Typography variant="h6" fontWeight={600} gutterBottom>
            2. No Content Hosting
          </Typography>

          <Typography paragraph>
            We do not host, store, archive, or distribute any
            copyrighted content on our servers.
          </Typography>

          <Typography paragraph>
            All processing is temporary and only for delivering
            content directly to the user.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Section 3 */}
          <Typography variant="h6" fontWeight={600} gutterBottom>
            3. User Responsibility
          </Typography>

          <Typography paragraph>
            You are solely responsible for ensuring that you have the
            legal right or permission to download and use any content.
          </Typography>

          <Typography paragraph>
            We are not liable for any misuse, copyright violations,
            or damages arising from user activity.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Section 4 */}
          <Typography variant="h6" fontWeight={600} gutterBottom>
            4. Third-Party Platforms
          </Typography>

          <Typography paragraph>
            QuickDownload is not affiliated with Instagram,
            Facebook, Twitter, or any third-party platform.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Section 5 */}
          <Typography variant="h6" fontWeight={600} gutterBottom>
            5. Limitation of Liability
          </Typography>

          <Typography paragraph>
            The service is provided "as is" without warranties
            of any kind. We do not guarantee uninterrupted or
            error-free operation.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Section 6 */}
          <Typography variant="h6" fontWeight={600} gutterBottom>
            6. Modifications
          </Typography>

          <Typography paragraph>
            We reserve the right to modify these Terms at any time.
            Continued use of the website constitutes acceptance
            of updated terms.
          </Typography>

          <Box mt={5}>
            <Typography color="text.secondary">
              For any questions regarding these Terms,
              please contact us at:{" "}
              <Link
                href="mailto:itmesainad@gmail.com"
                target="_self"
                underline="hover"
                sx={{ color: "primary.main", fontWeight: 500 }}
              >
                itmesainad@gmail.com
              </Link>
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
