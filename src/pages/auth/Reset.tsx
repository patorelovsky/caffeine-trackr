import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

export default function Reset() {
  const [email, setEmail] = useState("");
  const handleReset = () => {
    // TODO: Handle password reset
  };

  return (
    <Box sx={{ m: 2 }}>
      <h1>Reset password</h1>
      <TextField
        label="Email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        sx={{ display: "block", mb: 1 }}
      ></TextField>
      <Button variant="contained" onClick={handleReset}>
        Reset password
      </Button>
    </Box>
  );
}
