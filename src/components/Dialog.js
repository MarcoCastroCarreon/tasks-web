import React from "react";
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const CustomDialog = ({ open, onClose, title, itemsList }) => {
  const handleListClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <Dialog
      onClose={onClose}
      open={open}
    >
      <DialogTitle bc>{title}</DialogTitle>
      <List>
        {itemsList &&
          itemsList.map((item) => (
            <ListItem color="primary" key={item.id} button onClick={() => handleListClick(item.url)}>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
      </List>
    </Dialog>
  );
};

export default CustomDialog;
