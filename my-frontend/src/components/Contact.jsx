import {
    Box,
    Container,
    Typography,
    Paper,
    TextField,
    Button,
    Stack,
    useTheme,
    alpha,
} from "@mui/material";

export default function Contact() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                py: 8,
                background:
                    theme.palette.mode === "dark"
                        ? "linear-gradient(180deg,#0f172a 0%,#111827 100%)"
                        : "linear-gradient(180deg,#f8fafc 0%,#eef2f7 100%)",
            }}
        >
            <Container maxWidth="sm">
                <Typography
                    variant="h3"
                    fontWeight={700}
                    textAlign="center"
                    mb={5}
                    sx={{
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Contact Us
                </Typography>

                <Paper
                    sx={{
                        p: 5,
                        borderRadius: 4,
                        backdropFilter: "blur(12px)",
                        backgroundColor:
                            theme.palette.mode === "dark"
                                ? alpha(theme.palette.background.paper, 0.7)
                                : alpha("#fff", 0.95),
                    }}
                >
                    <Stack spacing={3}>
                        <TextField label="Your Name" fullWidth />
                        <TextField label="Email" fullWidth type="email" />
                        <TextField
                            label="Message"
                            multiline
                            rows={4}
                            fullWidth
                        />
                        <Button
                            variant="contained"
                            size="large"
                            sx={{ borderRadius: 3 }}
                        >
                            Send Message
                        </Button>
                        <Typography color="text.secondary">
                            Or email us at:{" "}
                            <Link
                                href="mailto:itmesainad@gmail.com"
                                target="_self"
                                underline="hover"
                                sx={{ color: "primary.main", fontWeight: 500 }}
                            >
                                itmesainad@gmail.com
                            </Link>
                        </Typography>
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
}
