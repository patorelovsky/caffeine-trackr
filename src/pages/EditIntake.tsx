import { Box } from "@mui/material";
import IntakeForm from "../components/IntakeForm";
import { useParams } from "react-router-dom";

type EditIntakeParams = {
  intakeId: string;
};

export default function EditIntake() {
  const { intakeId } = useParams<EditIntakeParams>();

  return (
    <Box sx={{ m: 2 }}>
      <h1>Edit Intake</h1>
      <IntakeForm intake={{ id: intakeId }} />
    </Box>
  );
}
