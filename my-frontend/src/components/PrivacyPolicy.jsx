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

const PrivacyPolicy = () => {
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
        {/* Header Section */}
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
            Privacy Policy
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
            At <strong>UniversalDownload</strong>, we value your privacy.
            This policy explains how we collect, use, and protect information
            when you use our website.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Section 1 */}
          <Typography variant="h6" fontWeight={600} gutterBottom>
            1. Information We Collect
          </Typography>

          <Typography paragraph>
            We do not require account registration and we do not store
            downloaded media on our servers.
          </Typography>

          <Typography paragraph>
            We may collect anonymous technical data such as browser type,
            device information, and usage analytics to improve our service.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Section 2 */}
          <Typography variant="h6" fontWeight={600} gutterBottom>
            2. Cookies & Advertising
          </Typography>

          <Typography paragraph>
            We use cookies to improve your browsing experience and to serve
            relevant advertisements through third-party services such as
            Google AdSense.
          </Typography>

          <Typography paragraph>
            You may disable cookies through your browser settings.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Section 3 */}
          <Typography variant="h6" fontWeight={600} gutterBottom>
            3. Third-Party Services
          </Typography>

          <Typography paragraph>
            We may use trusted third-party services for analytics and ads.
            These services may collect information according to their own
            privacy policies.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Section 4 */}
          <Typography variant="h6" fontWeight={600} gutterBottom>
            4. Data Protection
          </Typography>

          <Typography paragraph>
            We do not host, store, or archive copyrighted content.
            We implement reasonable technical measures to protect our platform.
          </Typography>

          <Divider sx={{ my: 3 }} />

          {/* Section 5 */}
          <Typography variant="h6" fontWeight={600} gutterBottom>
            5. Updates to This Policy
          </Typography>

          <Typography paragraph>
            We may update this Privacy Policy periodically.
            Continued use of the website indicates acceptance of changes.
          </Typography>

          <Box mt={5}>
            <Typography color="text.secondary">
              If you have questions, please contact us at :{" "}
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
};

export default PrivacyPolicy;
