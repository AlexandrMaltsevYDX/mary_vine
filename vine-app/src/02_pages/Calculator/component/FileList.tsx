import {FC, MouseEvent, useState} from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {Avatar, Button} from "@mui/material";
import SortIcon from "@mui/icons-material/Sort";
import IconButton from "@mui/material/IconButton";

import {InputLabel, MenuItem} from "@mui/material";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import {SxProps} from "@mui/material";
import {useGetTestDataQuery} from "~store/Calculator/CalculatorSlice";

// interface QueryParams {
//   column_name: string;
//   order: "asc" | "desc";
// }

const ascIconStyle: SxProps = {
  transform: "scaleY(-1)",
};

const descIconStyle: SxProps = {
  transform: "scaleY(1)",
};

interface iconStyleInterface {
  asc: SxProps;
  desc: SxProps;
}

const iconStyle = {
  asc: ascIconStyle,
  desc: descIconStyle,
};

const DataTable: FC = () => {
  const [columnName, setColumnName] = useState("id");
  const [order, setOrder] = useState("asc");

  // const [token, setToken] = useLocalStorageState('token', 'TEST_TOKEN')

  const {data, isLoading} = useGetTestDataQuery({});

  const handleSortByColumn = (event: SelectChangeEvent): void => {
    setColumnName(event.target.value as string);
  };

  //   const handleSortByOrder = () => {
  //     console.log(data?.count);
  //     order === "desc" ? setOrder("asc") : setOrder("desc");
  //   };

  const handleSortByColumnOrder = (event: MouseEvent<HTMLElement>) => {
    const columnName = event.currentTarget.textContent; // or textContent
    setColumnName(columnName as string);
    order === "desc" ? setOrder("asc") : setOrder("desc");
  };

  if (isLoading) return <p>... Loading</p>;
  return (
    <>
      <TableContainer component={Paper} sx={{mt: 4, maxWidth: 250}}>
        <Table sx={{maxWidth: 250}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell onClick={e => handleSortByColumnOrder(e)}>
                <IconButton>
                  <SortIcon sx={iconStyle[order as keyof iconStyleInterface]} />
                </IconButton>
                id
              </TableCell>
              <TableCell align="right">filename</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": {border: 0},
                }}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right" scope="row">
                  {row.filename}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default DataTable;
