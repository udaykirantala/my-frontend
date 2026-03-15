import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  alpha
} from "@mui/material";

import {
  Instagram,
  Facebook,
  YouTube,
  WhatsApp
} from "@mui/icons-material";
import { supportedPlatformsContent } from "../assets/data";


export default function SupportedPlatforms() {
  const theme = useTheme();

  const iconMap = {
    instagram: <Instagram fontSize="large" />,
    facebook: <Facebook fontSize="large" />,
    youtube: <YouTube fontSize="large" />,
    whatsapp: <WhatsApp fontSize="large" />
  };

  return (
    <Box pt='25px'>
      <Container maxWidth="lg">

        {/* Title */}

        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={700}
          mb={4}
          sx={{
            background: "linear-gradient(135deg,#6366f1,#ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          {supportedPlatformsContent.title}
        </Typography>

        {/* Intro */}

        {supportedPlatformsContent.intro.map((text, index) => (
          <Typography
            key={index}
            textAlign="center"
            color="text.secondary"
            maxWidth="700px"
            mx="auto"
            paragraph
          >
            {text}
          </Typography>
        ))}

        {/* Cards */}

        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'15px'}}>
          {supportedPlatformsContent.platforms.map((platform) => (
            <Box width='49%'>
              <Paper
                sx={{
                  p: 4,
                  textAlign: "center",
                  borderRadius: 3,
                  backdropFilter: "blur(10px)",
                  backgroundColor: alpha(
                    theme.palette.background.paper,
                    0.7
                  ),
                  border: `1px solid ${alpha(
                    theme.palette.primary.main,
                    0.1
                  )}`,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)"
                  }
                }}
              >
                <Box color="primary.main" mb={2}>
                  {iconMap[platform.icon]}
                </Box>

                <Typography fontWeight={600} mb={1}>
                  {platform.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {platform.desc}
                </Typography>

              </Paper>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
}