import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
  alpha,
} from "@mui/material";

import {
  Download,
  PlayCircle,
  Image as ImageIcon,
  HighQuality,
} from "@mui/icons-material";

export default function ResultCard({ result, onDownload }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const getTypeIcon = () => {
    if (result.type === "video" || result.type === "reel") {
      return <PlayCircle fontSize="small" />;
    }
    return <ImageIcon fontSize="small" />;
  };

  // const getPlatformColor = (platform) => {
  //   switch (platform.toLowerCase()===) {
  //     case "instagram":
  //       return "#E4405F";
  //     case "facebook":
  //       return "#1877F2";
  //     case "youtube":
  //       return "#FF0000";
  //     case "whatsapp":
  //       return "#25D366";
  //     default:
  //       return theme.palette.primary.main;
  //   }
  // };
  const getPlatformColor = (platform) => {
  if (!platform) return theme.palette.primary.main; // prevent crash

  const p = platform.toLowerCase();

  switch (p) {
    case "instagram":
      return "#E4405F";
    case "facebook":
      return "#1877F2";
    case "youtube":
      return "#FF0000";
    case "whatsapp":
      return "#25D366";
    default:
      return theme.palette.primary.main;
  }
};


  return (
    <Card
      elevation={2}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: `1px solid ${
          theme.palette.mode === "dark"
            ? "rgba(255,255,255,0.08)"
            : "rgba(0,0,0,0.08)"
        }`,
        transition: "all .3s",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow:
            theme.palette.mode === "dark"
              ? "0 10px 35px rgba(0,0,0,0.5)"
              : "0 10px 35px rgba(0,0,0,0.12)",
        },
      }}
    >
      {/* Thumbnail */}
      <Box sx={{ position: "relative", paddingTop: "56.25%" }}>
        <CardMedia
          component="img"
          image={result.thumbnail}
          alt={result.title}
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Platform badge */}
        <Chip
          label={result.platform||"Unknown"}
          size="small"
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            color: "white",
            fontWeight: 600,
            backgroundColor: alpha(getPlatformColor(result.platform), 0.95),
          }}
        />

        {/* type badge */}
        <Box
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: "rgba(0,0,0,.7)",
            color: "white",
            borderRadius: 1,
            px: 1.5,
            py: 0.5,
            display: "flex",
            alignItems: "center",
            gap: 0.5,
          }}
        >
          {getTypeIcon()}
          <Typography variant="caption" sx={{ fontWeight: 600 }}>
            {result.type}
          </Typography>
        </Box>
      </Box>

      {/* Content */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Stack spacing={1.5}>
          {/* title */}
          <Typography
            variant="subtitle1"
            sx={{
              fontWeight: 600,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              minHeight: "48px",
            }}
          >
            {result.title}
          </Typography>

          {/* metadata chips */}
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip
              icon={<HighQuality />}
              label={result.resolution}
              size="small"
            />
            <Chip label={(result.format|| "mp4").toUpperCase()} size="small" />
            <Chip label={result.size} size="small" />
          </Stack>

          {/* download button */}
          <Button
            fullWidth
            variant="contained"
            startIcon={<Download />}
            onClick={() => window.open(result.url, "_blank")}
            sx={{
              fontWeight: 700,
              background: "linear-gradient(135deg,#6366f1,#ec4899)",
              "&:hover": {
                background: "linear-gradient(135deg,#4f46e5,#db2777)",
              },
            }}
          >
            Download Now
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}
