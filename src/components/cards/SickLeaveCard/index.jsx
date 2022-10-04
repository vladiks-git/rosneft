import React from "react";
import Typography from "@mui/material/Typography";
import { CardHeader, Box, Stack} from "@mui/material";
import { CardContent } from "../../../ui-kit";

const SickLeaveCard = ({ sickLeaveItem }) => {
  return (
    <CardContent sx={{ boxShadow: "4px 4px 8px 0px rgba(34, 60, 80, 0.2)" }}>
      <h4>Больничный лист</h4>
        <div className="sick-leave__card">
          <Typography sx={{ fontSize: 16, fontWeight: 600 }} color="primary">
            Сотрудник:
          </Typography>
          <Stack direction="row" gap={0.5} alignItems="center">
            <Typography color="text.secondary" variant="body2">ФИО:</Typography>
            <Typography variant="body2">{sickLeaveItem.patientName}</Typography>
          </Stack>
          <Stack direction="row" gap={0.5} alignItems="center">
            <Typography color="text.secondary" variant="body2">Дата рождения:</Typography>
            <Typography variant="body2">{sickLeaveItem.patientDob} г.</Typography>
          </Stack>
          <Stack direction="row" gap={0.5} alignItems="center">
            <Typography color="text.secondary" variant="body2">СНИЛС:</Typography>
            <Typography variant="body2">{sickLeaveItem.patientSnils}</Typography>
          </Stack>
        </div>
        <Box>
          <Typography sx={{ fontSize: 16, fontWeight: 600 }} color="primary">
            Освобожден от работы:
          </Typography>
          <Stack direction="row" gap={0.5} alignItems="center">
            <Typography color="text.secondary" variant="body2">Период:</Typography>
            <Typography variant="body2">{sickLeaveItem.period}</Typography>
          </Stack>
          <Stack direction="row" gap={0.5} alignItems="center">
            <Typography color="text.secondary" variant="body2">ФИО врача:</Typography>
            <Typography variant="body2">{sickLeaveItem.doctorName}</Typography>
          </Stack>
          <Stack direction="row" gap={0.5} alignItems="center">
            <Typography color="text.secondary" variant="body2">Причина:</Typography>
            <Typography variant="body2">{sickLeaveItem.reason}</Typography>
          </Stack>
          <Stack direction="row" gap={0.5} alignItems="center">
            <Typography color="text.secondary" variant="body2">Дата выдачи:</Typography>
            <Typography variant="body2">{sickLeaveItem.date} г.</Typography>
          </Stack>
        </Box>
    </CardContent>

  );
};

export default SickLeaveCard;
