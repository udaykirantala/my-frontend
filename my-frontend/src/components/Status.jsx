import {
  Box,
  Container,
  Typography,
  Paper,
  Chip,
  Stack,
} from "@mui/material";

export default function Status() {
  return (
    <Box sx={{ minHeight: "100vh", py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h3" textAlign="center" mb={5}>
          System Status
        </Typography>

        <Paper sx={{ p: 5, borderRadius: 4 }}>
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Download Service</Typography>
              <Chip label="Operational" color="success" />
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <Typography>API</Typography>
              <Chip label="Operational" color="success" />
            </Stack>

            <Stack direction="row" justifyContent="space-between">
              <Typography>Website</Typography>
              <Chip label="Operational" color="success" />
            </Stack>
          </Stack>
        </Paper>
      </Container>
    </Box>
  );
}
