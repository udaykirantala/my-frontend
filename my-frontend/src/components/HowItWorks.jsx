import {
  Box,
  Container,
  Typography,
  Paper,
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";

export default function HowItWorks() {
  const steps = [
    "Copy the public URL of the content",
    "Paste it into the input field",
    "Click download",
    "Receive your file instantly",
  ];

  return (
    <Box sx={{ minHeight: "100vh", py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" textAlign="center" mb={5}>
          How It Works
        </Typography>

        <Paper sx={{ p: 5, borderRadius: 4 }}>
          <Stepper orientation="vertical">
            {steps.map((label) => (
              <Step key={label} active>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Paper>
      </Container>
    </Box>
  );
}
