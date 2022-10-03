import React from "react";

import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

const visits = [
  {
    hospital: " г. Новокуйбышевск, ул. Осипенко 12",
    date: "01.05.2021",
  },
  {
    hospital: " г. Новокуйбышевск, ул. Пирагова 1",
    date: "18.12.2021",
  },
  {
    hospital: " г. Новокуйбышевск, ул. Победы 75б",
    date: "01.02.2022",
  },
];

function AllVisits() {
  return (
    <div>
      <List>
        {visits.map((visit) => (
          <ListItem key={Math.random()}>
            <ListItemAvatar>
              <Avatar>
                <HealthAndSafetyIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={visit.hospital} secondary={visit.date} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default AllVisits;
