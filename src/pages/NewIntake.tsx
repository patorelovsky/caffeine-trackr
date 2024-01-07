import SendIcon from "@mui/icons-material/Send";
import { Box, Button } from "@mui/material";
import IntakeForm from "../components/IntakeForm";

export default function NewIntake() {
  const handleAddNewIntake = () => {
    // TODO: Add new intake logic
  };

  return (
    <Box sx={{ m: 2 }}>
      <h1>Register</h1>
      <IntakeForm intake={{ date: new Date().getTime() }} />
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
