import {
  Dialog,
  DialogContent,
  CircularProgress,
  Typography,
  Box,
  Button
} from "@mui/material";

export default function DownloadModal({ open, onClose, status }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { borderRadius: 3, p: 3, minWidth: 300, textAlign: "center" },
      }}
    >
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          
          {status === "loading" && (
            <CircularProgress sx={{ alignSelf: "center" }} />
          )}

          {status === "error" && (
            <>
              <Typography>Error fetching media</Typography>
              <Button onClick={onClose}>Close</Button>
            </>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
}
