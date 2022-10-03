import React from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";

import "./navigation.scss";
import { NavLink } from "react-router-dom";

const links = [
  {
    path: "/",
    title: "Документы",
  },
  {
    path: "/annualInspection",
    title: "Сведения о ежегодном осмотре",
  },
  {
    path: "/vaccination",
    title: "Вакцинация",
  },
  {
    path: "/record",
    title: "Запись к врачу",
  },
  {
    path: "/sickLeave",
    title: "Больничный лист",
  },
  {
    path: "/bloodDonation",
    title: "Сдача крови",
  },
];

function Navigation({ onClose, open }) {
  return (
    <Drawer open={open} onClose={onClose}>
      <div className="navigation">
        <List component="nav">
          {links.map((link) => (
            <ListItemButton onClick={onClose} key={link.path}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <NavLink className="link" to={link.path}>
                <ListItemText primary={link.title} />
              </NavLink>
            </ListItemButton>
          ))}
        </List>
      </div>
    </Drawer>
  );
}

export default Navigation;
