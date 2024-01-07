import {
  Box,
  IconButton,
  Paper,
  SpeedDial,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { CaffeineIntake } from "../types/caffeineIntake";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { newIntakeMenuItem } from ".";

const data: CaffeineIntake[] = [
  {
    id: "1",
    date: 1704525704858,
    source: "Coffee",
    content: 100,
  },
  {
    id: "2",
    date: 1704535704858,
    source: "Tea",
    content: 50,
  },
  {
    id: "3",
    date: 1704545704858,
    source: "Energy Drink",
    content: 150,
  },
  {
    id: "4",
    date: 1704555704858,
    source: "Caffeine Pills",
    content: 200,
  },
];

export default function IntakeLog() {
  const navigate = useNavigate();
  const handleNewIntakeClick = () => {
    navigate(newIntakeMenuItem.url);
  };
  const handleEditIntakeClick = (intakeId: string) => {
    navigate(`${newIntakeMenuItem.url}/${intakeId}`);
  };
  const handleDeleteIntakeClick = (intakeId: string) => {
    // TODO: implement intake editing
  };

  return (
    <Box sx={{ m: 2 }}>
      <h1>Intake Log</h1>
      <SpeedDial
        onClick={handleNewIntakeClick}
        ariaLabel="New Intake"
        icon={<AddIcon />}
        sx={{ position: "absolute", bottom: 16, right: 16 }}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Intake</TableCell>
              <TableCell align="center">Edit</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(({ id, date, source, content }) => (
              <TableRow key={id}>
                <TableCell>{moment(date).calendar()}</TableCell>
                <TableCell>{source}</TableCell>
                <TableCell align="right">{`${content} mg`}</TableCell>
                <TableCell align="center">
                  {
                    <IconButton
                      onClick={() => handleEditIntakeClick(id)}
                      size="small"
                      aria-label="edit"
                    >
                      <EditIcon fontSize="inherit" />
                    </IconButton>
                  }
                </TableCell>
                <TableCell align="center">
                  {
                    <IconButton
                      onClick={() => handleDeleteIntakeClick(id)}
                      size="small"
                      aria-label="delete"
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
