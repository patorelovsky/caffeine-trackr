import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

export default function NewIntake() {
  const currDate = new Date().toISOString();

  const [date, setDate] = useState(currDate.substring(0, 10));
  const [time, setTime] = useState(currDate.substring(11, 16));
  const [source, setSource] = useState("");
  const [content, setContent] = useState(0);

  const handleAddNewIntake = () => {
    // TODO: Add new intake logic
  };

  return (
    <Box sx={{ m: 2 }}>
      <h1>Register</h1>
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
      <Button
        variant="contained"
        onClick={handleAddNewIntake}
        endIcon={<SendIcon />}
      >
        Add New Intake
      </Button>
    </Box>
  );
}
