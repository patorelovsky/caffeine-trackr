import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Alert,
  AlertTitle,
  Box,
  CircularProgress,
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
import moment from "moment";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { editIntakeMenuItem, newIntakeMenuItem } from ".";
import { fetchIntakes, useAppDispatch, useAppSelector } from "../redux";

export default function IntakeLog() {
  const navigate = useNavigate();
  const handleNewIntakeClick = () => {
    navigate(newIntakeMenuItem.url);
  };
  const handleEditIntakeClick = (intakeId: string) => {
    navigate(`${editIntakeMenuItem.url}/${intakeId}`);
  };
  const handleDeleteIntakeClick = (intakeId: string) => {
    // TODO: implement intake editing
  };

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchIntakes());
  }, [dispatch]);

  const { isLoading, error, data } = useAppSelector(({ intakes }) => intakes);

  return isLoading ? (
    <Box sx={{ display: "flex", height: 100 }}>
      <CircularProgress sx={{ m: "auto" }} />
    </Box>
  ) : error ? (
    <Alert severity="error">
      <AlertTitle>{error.name}</AlertTitle>
      {error.message}
    </Alert>
  ) : (
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
            {data?.map(({ id, date, source, content }) => (
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
