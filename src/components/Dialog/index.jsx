import React from "react";
import {
  Button,
  Dialog as MUIDialog,
  DialogActions,
  DialogContent,
  DialogTitle, IconButton
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import "./styles.scss";

const Dialog = ({isOpen, title, children, onClose, onSave}) => {
  return (
    <MUIDialog open={isOpen} className="dialog">
      <DialogTitle className="dialog__title">
        <span>{title}</span>
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className="dialog__content">{children}</DialogContent>
      <DialogActions>
        <Button onClick={onSave}>Сохранить</Button>
      </DialogActions>
    </MUIDialog>
  );
};

export default Dialog;
