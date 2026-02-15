import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
} from "@mui/material";

export default function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: [
        "Unlimited downloads",
        "Basic support",
        "No signup required",
      ],
    },
  ];

  return (
    <Box sx={{ minHeight: "100vh", py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" textAlign="center" mb={6}>
          Simple Pricing
        </Typography>

        <Grid container justifyContent="center">
          {plans.map((plan) => (
            <Grid item xs={12} sm={8} key={plan.name}>
              <Paper sx={{ p: 5, borderRadius: 4, textAlign: "center" }}>
                <Typography variant="h5" fontWeight={600}>
                  {plan.name}
                </Typography>

                <Typography variant="h3" my={2}>
                  {plan.price}
                </Typography>

                {plan.features.map((f) => (
                  <Typography key={f}>{f}</Typography>
                ))}

                <Button
                  variant="contained"
                  size="large"
                  sx={{ mt: 4, borderRadius: 3 }}
                >
                  Get Started
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
