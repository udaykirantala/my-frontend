import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  useTheme,
  alpha
} from "@mui/material";

import { supportedFormatsContent } from "../assets/data";

export default function SupportedFormats() {
  const theme = useTheme();

  return (
    <Box pt='25px'>
      <Container maxWidth="lg">

        {/* Title */}

        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={700}
          mb={3}
          sx={{
            background: "linear-gradient(135deg,#6366f1,#ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          {supportedFormatsContent.title}
        </Typography>

        {/* Intro */}

        {supportedFormatsContent.intro.map((text, index) => (
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

        {/* Format Cards */}

        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',gap:'15px'}}>
          {supportedFormatsContent.formats.map((format) => (
            <Box width='49%'>
              <Paper
                sx={{
                  p: 4,
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
                <Typography fontWeight={600} mb={1}>
                  {format.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {format.desc}
                </Typography>
              </Paper>
            </Box>
          ))}
        </Box>

      </Container>
    </Box>
  );
}