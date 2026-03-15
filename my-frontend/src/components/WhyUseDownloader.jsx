import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  alpha
} from "@mui/material";
import { whyUseDownloaderContent } from "../assets/data";


export default function WhyUseDownloader() {

  const theme = useTheme();

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
          {whyUseDownloaderContent.title}
        </Typography>

        {/* Intro */}

        {whyUseDownloaderContent.intro.map((text, index) => (
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

        {/* Feature cards */}

        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'15px'}}>
          {whyUseDownloaderContent.features.map((feature) => (

            <Box width='49%'>

              <Paper
                sx={{
                  p: 5,
                  borderRadius: 4,
                  backdropFilter: "blur(10px)",
                  backgroundColor: alpha(
                    theme.palette.background.paper,
                    0.75
                  ),
                  border: `1px solid ${alpha(
                    theme.palette.primary.main,
                    0.15
                  )}`,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
                  }
                }}
              >
                <Typography
                  fontWeight={600}
                  mb={1}
                >
                  {feature.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                >
                  {feature.desc}
                </Typography>

              </Paper>

            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
}