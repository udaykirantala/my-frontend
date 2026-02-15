import {
  Box,
  Container,
  Typography,
  Paper,
} from "@mui/material";

export default function API() {
  return (
    <Box sx={{ minHeight: "100vh", py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" textAlign="center" mb={5}>
          Developer API
        </Typography>

        <Paper sx={{ p: 5, borderRadius: 4 }}>
          <Typography paragraph>
            Our API allows developers to integrate download
            functionality into their applications.
          </Typography>

          <Typography paragraph>
            API access is currently limited. Contact us
            for partnership opportunities.
          </Typography>

          <Typography paragraph>
            We enforce strict compliance with copyright
            laws and platform policies.
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
