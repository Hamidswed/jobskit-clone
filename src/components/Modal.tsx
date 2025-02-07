"use client";

import { Box, Modal as MuiModal, Typography, IconButton } from "@mui/material";
import { CloseRounded as CloseIcon } from "@mui/icons-material";
import useMediaQuery from "@mui/material/useMediaQuery";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useTheme } from "@mui/material/styles";
import { createPortal } from "react-dom";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  description?: string;
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  description = "",
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const ref = useOutsideClick(onClose);

  return (
    open &&
    createPortal(
      <MuiModal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <Box
          ref={ref}
          sx={{
            backgroundColor: theme.palette.background.paper,
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            maxWidth: isMobile ? "calc(100vw - 32px)" : 500,
            maxHeight: "calc(100vh - 32px)",
            overflow: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: `1px solid ${theme.palette.divider}`,
              pb: 2,
              mb: 3,
            }}
          >
            <Box>
              <Typography variant="h6" id="modal-title">
                {title}
              </Typography>
              <Typography variant="body2" id="modal-description" color="text.secondary">
                {description}
              </Typography>
            </Box>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          {children}
        </Box>
      </MuiModal>,
      document.body
    )
  );
};

export default Modal;
