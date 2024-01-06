import { Box, TextField } from "@mui/material";
import { useState } from "react";
import { CaffeineIntake } from "../types/caffeineIntake";

type IntakeFormParams = {
  intake: Partial<CaffeineIntake>;
};

export default function IntakeForm({ intake }: IntakeFormParams) {
  const dateISO = new Date(intake.date || new Date()).toISOString();
  const [date, setDate] = useState(dateISO.substring(0, 10));
  const [time, setTime] = useState(dateISO.substring(11, 16));
  const [source, setSource] = useState(intake.source || "");
  const [content, setContent] = useState(intake.content || "");

  return (
    <Box sx={{ mb: 1, maxWidth: 500 }}>
      <TextField
        fullWidth
        label="Date"
        variant="outlined"
        required
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        sx={{ mb: 1 }}
      />
      <TextField
        fullWidth
        label="Time"
        variant="outlined"
        required
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        sx={{ mb: 1 }}
      />
      <TextField
        fullWidth
        label="Source"
        variant="outlined"
        required
        type="text"
        value={source}
        onChange={(e) => setSource(e.target.value)}
        sx={{ mb: 1 }}
      />
      <TextField
        fullWidth
        label="Content"
        variant="outlined"
        required
        type="number"
        value={content}
        InputProps={{ inputProps: { min: 1 } }}
        onChange={(e) => setContent(parseInt(e.target.value) || 1)}
      />
    </Box>
  );
}
