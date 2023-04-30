import React from 'react';
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import SendIcon from '@mui/icons-material/Send';

import './navigation.scss';
import { NavLink } from 'react-router-dom';

const links = [
  // {
  //   path: '/documents',
  //   title: 'Документы',
  // },
  {
    path: '/personalInfo',
    title: 'Личный кабинет',
  },
  {
    path: '/news',
    title: 'Новости',
  },
  {
    path: '/annualInspection',
    title: 'Сведения о ежегодном осмотре',
  },
  {
    path: '/record',
    title: 'Запись к врачу',
  },
  // {
  //   path: '/sickLeave',
  //   title: 'Больничный лист',
  // },
  {
    path: '/bloodDonation',
    title: 'Сдача крови',
  },
  {
    path: '/medicalExamination',
    title: 'Мед. осмотр',
  },
  {
    path: '/graphic',
    title: 'График мед. осмотров ',
  },
  {
    path: '/dispensary',
    title: 'Профилакторий',
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
