import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function Reset() {
  const [email, setEmail] = useState("");
  const auth = getAuth();
  const handleReset = () => {
    sendPasswordResetEmail(auth, email).catch((error) => {
      // TODO: Show error
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("An error has occurred: ", errorCode, errorMessage);
    });
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
