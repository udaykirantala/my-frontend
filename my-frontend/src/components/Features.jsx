import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  alpha,
} from "@mui/material";
import {
  Speed,
  Security,
  Download,
  Devices,
} from "@mui/icons-material";

const features = [
  {
    icon: <Speed fontSize="large" />,
    title: "Ultra Fast Processing",
    desc: "Download content instantly with optimized processing speed.",
  },
  {
    icon: <Security fontSize="large" />,
    title: "Secure & Private",
    desc: "We do not store your downloads or personal information.",
  },
  {
    icon: <Download fontSize="large" />,
    title: "No Signup Required",
    desc: "Start downloading immediately without creating an account.",
  },
  {
    icon: <Devices fontSize="large" />,
    title: "Multi-Device Support",
    desc: "Works seamlessly on desktop, tablet, and mobile devices.",
  },
];

export default function Features() {
  const theme = useTheme();

  return (
    <Box sx={{ minHeight: "100vh", py: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          textAlign="center"
          fontWeight={700}
          mb={6}
          sx={{
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Powerful Features
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={3} key={feature.title}>
              <Paper
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: "center",
                  backdropFilter: "blur(12px)",
                  backgroundColor: alpha(
                    theme.palette.background.paper,
                    0.7
                  ),
                }}
              >
                <Box color="primary.main" mb={2}>
                  {feature.icon}
                </Box>

                <Typography fontWeight={600} mb={1}>
                  {feature.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {feature.desc}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
