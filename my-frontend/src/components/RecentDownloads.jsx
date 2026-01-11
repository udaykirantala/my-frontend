import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Stack,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { History, Delete } from "@mui/icons-material";
import ResultCard from "./ResultCard";

export default function RecentDownloads({ downloads, onDownload, onClearHistory }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!downloads || downloads.length === 0) return null;

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor:
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.03)"
            : "rgba(0,0,0,0.03)",
      }}
    >
      <Container maxWidth="lg">
        <Stack spacing={4}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  background:
                    theme.palette.mode === "dark"
                      ? "rgba(99,102,241,0.15)"
                      : "rgba(99,102,241,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <History sx={{ color: theme.palette.primary.main, fontSize: 28 }} />
              </Box>

              <Box>
                <Typography variant={isMobile ? "h5" : "h4"} sx={{ fontWeight: 700 }}>
                  Recent Downloads
                </Typography>
                <Typography color="text.secondary" variant="body2">
                  {downloads.length} saved items
                </Typography>
              </Box>
            </Box>

            <Button
              variant="outlined"
              startIcon={<Delete />}
              onClick={onClearHistory}
              sx={{
                borderColor: theme.palette.error.main,
                color: theme.palette.error.main,
                "&:hover": {
                  borderColor: theme.palette.error.dark,
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(239,68,68,0.1)"
                      : "rgba(239,68,68,0.05)",
                },
              }}
            >
              Clear History
            </Button>
          </Box>

          {/* Downloads Grid */}
          <Grid container spacing={{ xs: 2, md: 3 }}>
            {downloads.map((item) => (
              <Grid key={item.id} item xs={12} sm={6} md={4}>
                <ResultCard result={item} onDownload={onDownload} />
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
}
