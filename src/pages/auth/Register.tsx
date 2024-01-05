import { Box, Button, TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Registered user: ", user);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error ocured: ", errorCode, errorMessage);
      });
  };

  return (
    <Box sx={{ m: 2 }}>
      <Box sx={{ mb: 1 }}>
        <h1>Register</h1>
        <TextField
          label="Email"
          variant="outlined"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ display: "block", mb: 1 }}
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
      <Button
        variant="contained"
        onClick={handleRegister}
        endIcon={<SendIcon />}
      >
        Register
      </Button>
    </Box>
  );
}
