import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FAQ() {
  const theme = useTheme();

  const faqs = [
    {
      q: "Is this downloader free to use?",
      a: "Yes. All features are completely free—no login, no signup.",
    },
    {
      q: "Do you store downloaded content?",
      a: "We don’t store downloaded media or user data. All data stays on your device.",
    },
    {
      q: "Which platforms do you support?",
      a: "Instagram, Facebook, YouTube, and WhatsApp links are supported.",
    },
    {
      q: "Why is my link not downloading?",
      a: "Ensure the content is public and the copied link is correct.",
    },
    {
      q: "Can I download private videos?",
      a: "No. Downloading private content is not allowed for security reasons.",
    },
  ];

  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.02)"
            : "rgba(0,0,0,0.02)",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            mb: 4,
            background: "linear-gradient(135deg,#6366f1,#ec4899)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Frequently Asked Questions
        </Typography>

        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            expanded={expanded === index}
            onChange={handleChange(index)}
            sx={{
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.05)"
                  : "rgba(255,255,255,0.9)",
              borderRadius: 2,
              mb: 2,
              border: `1px solid ${
                theme.palette.mode === "dark"
                  ? "rgba(255,255,255,0.08)"
                  : "rgba(0,0,0,0.08)"
              }`,
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography sx={{ fontWeight: 600 }}>{faq.q}</Typography>
            </AccordionSummary>

            <AccordionDetails>
              <Typography color="text.secondary">{faq.a}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
