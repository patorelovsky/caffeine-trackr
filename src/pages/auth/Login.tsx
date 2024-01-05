import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    // TODO: sign in logic
  };

  return (
    <Box sx={{ m: 2 }}>
      <Box sx={{ mb: 1 }}>
        <h1>Login</h1>
        <TextField
          label="Email"
          variant="outlined"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          variant="outlined"
          required
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Box>
      <Button variant="contained" onClick={handleLogin} endIcon={<SendIcon />}>
        Log In
      </Button>
    </Box>
  );
}
