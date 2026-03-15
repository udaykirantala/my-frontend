import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  alpha,
  useMediaQuery
} from "@mui/material";

import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LinkIcon from "@mui/icons-material/Link";
import DownloadIcon from "@mui/icons-material/Download";

import { howItWorksContent } from "../assets/data";

export default function HowItWorks() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const iconMap = {
    copy: <ContentCopyIcon fontSize="large" />,
    paste: <LinkIcon fontSize="large" />,
    download: <DownloadIcon fontSize="large" />
  };

  return (
    <Box py={8}>
      <Container maxWidth="lg">

        {/* Title */}

        <Typography
          variant={isMobile ? "h5" : "h4"}
          sx={{
            fontWeight: 800,
            textAlign: "center",
            mb: 2,
            background:
              "linear-gradient(135deg,#6366f1 0%,#ec4899 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          {howItWorksContent.title}
        </Typography>

        {/* Intro */}

        <Box maxWidth="750px" mx="auto" mb={6}>
          {howItWorksContent.intro.map((text, index) => (
            <Typography
              key={index}
              textAlign="center"
              color="text.secondary"
              paragraph
            >
              {text}
            </Typography>
          ))}
        </Box>

        {/* Steps Grid */}

        <Box sx={{display:'flex',gap:'10px',justifyContent:'center',alignItems:'center',flexWrap:'wrap'}}>
          {howItWorksContent.steps.map((step, index) => (
            <Box width='49%'>

              <Paper
                sx={{
                  p: 4,
                  borderRadius: 4,
                  textAlign: "center",
                  backdropFilter: "blur(10px)",
                  backgroundColor: alpha(
                    theme.palette.background.paper,
                    0.8
                  ),
                  border: `1px solid ${alpha(
                    theme.palette.primary.main,
                    0.15
                  )}`,
                  transition: "all .3s ease",
                  height: "100%",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,.1)"
                  }
                }}
              >

                {/* Step number */}

                <Typography
                  sx={{
                    fontWeight: 700,
                    mb: 2,
                    color: theme.palette.primary.main
                  }}
                >
                  Step {index + 1}
                </Typography>

                {/* Icon */}

                <Box
                  sx={{
                    mb: 2,
                    color: theme.palette.primary.main,
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  {iconMap[step.icon]}
                </Box>

                {/* Title */}

                <Typography
                  fontWeight={600}
                  mb={1}
                >
                  {step.title}
                </Typography>

                {/* Description */}

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {step.desc}
                </Typography>

              </Paper>

            </Box>
          ))}
        </Box>

        {/* Extra explanation */}

        <Box mt={6} maxWidth="750px" mx="auto">
          {howItWorksContent.extraContent.map((text, index) => (
            <Typography
              key={index}
              color="text.secondary"
              paragraph
            >
              {text}
            </Typography>
          ))}
        </Box>

        {/* Legal Notice */}

        <Box
          mt={4}
          p={3}
          borderRadius={3}
          sx={{
            backgroundColor: alpha(
              theme.palette.primary.main,
              0.05
            )
          }}
        >
          <Typography
            variant="subtitle2"
            fontWeight={700}
            mb={1}
          >
            Legal Notice
          </Typography>

          {howItWorksContent.legalNotice.map((text, index) => (
            <Typography
              key={index}
              variant="body2"
              color="text.secondary"
            >
              {text}
            </Typography>
          ))}
        </Box>

      </Container>
    </Box>
  );
}