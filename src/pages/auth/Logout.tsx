import { Box, Button } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const auth = getAuth();
  signOut(auth).catch((error) => {
    // TODO: Show error
    console.log("error", error);
  });

  const navigate = useNavigate();

  return (
    <Box sx={{ m: 2 }}>
      <h1>You are logged out</h1>
      <Button variant="contained" onClick={() => navigate("/")}>
        Go Home
      </Button>
    </Box>
  );
}
