import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    TextField,
    InputAdornment,
    Stack,
    useTheme,
    alpha,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";
import ArticleIcon from "@mui/icons-material/Article";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
// import { Link } from "react-router-dom";
import { Link } from "@mui/material";


export default function HelpCenter() {
    const theme = useTheme();

    const categories = [
        {
            icon: <LiveHelpIcon fontSize="large" />,
            title: "Getting Started",
            desc: "Learn how to use QuickDownload quickly and efficiently.",
        },
        {
            icon: <ArticleIcon fontSize="large" />,
            title: "Legal & Policies",
            desc: "Understand our policies, terms and compliance guidelines.",
        },
        {
            icon: <ContactSupportIcon fontSize="large" />,
            title: "Contact Support",
            desc: "Need help? Reach out to our support team anytime.",
        },
    ];

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
            <Container maxWidth="lg">
                {/* Header */}
                <Typography
                    variant="h3"
                    textAlign="center"
                    fontWeight={700}
                    mb={3}
                    sx={{
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    Help Center
                </Typography>

                <Typography
                    textAlign="center"
                    color="text.secondary"
                    mb={5}
                >
                    Find answers, guides, and support resources.
                </Typography>

                {/* Search Box */}
                <Box mb={6} maxWidth="600px" mx="auto">
                    <TextField
                        fullWidth
                        placeholder="Search help articles..."
                        variant="outlined"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            sx: { borderRadius: 3 },
                        }}
                    />
                </Box>

                {/* Categories */}
                <Grid container spacing={4}>
                    {categories.map((item) => (
                        <Grid item xs={12} md={4} key={item.title}>
                            <Paper
                                sx={{
                                    p: 4,
                                    textAlign: "center",
                                    borderRadius: 4,
                                    backdropFilter: "blur(12px)",
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
                                        transform: "translateY(-6px)",
                                    },
                                }}
                            >
                                <Box color="primary.main" mb={2}>
                                    {item.icon}
                                </Box>

                                <Typography fontWeight={600} mb={1}>
                                    {item.title}
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    {item.desc}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* Contact Info */}
                <Stack alignItems="center" mt={8} spacing={2}>
                    <Typography variant="h6" fontWeight={600}>
                        Still Need Help?
                    </Typography>
                    
                    <Typography color="text.secondary">
                        Contact us at:{" "}
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
            </Container>
        </Box>
    );
}
