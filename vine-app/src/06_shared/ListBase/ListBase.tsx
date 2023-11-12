import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Button } from "@mui/material";
import { numberValueSorting } from "./features/SortingColumnValue";
import SortIcon from "@mui/icons-material/Sort";
import IconButton from "@mui/material/IconButton";
import { useGetChartersQuery } from "~store/RickMorty/service";

export default function DataTable() {
  // const [data, setData] = React.useState([]);


  //пагинация сортинг фильтрация на бэк

  // const sort = ( nameCol, data) => {
  //    const mapa = {
  //     str: strValueSorting,
  //     numb: numberValueSorting,
  //     date: dateSortValueSorting,
  //    }
  //   return mapa()
  // }








  const { data , error, isLoading } = useGetChartersQuery();
  // React.useEffect(() => {
  //   fetch("https://rickandmortyapi.com/api/character/", {})
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data.results);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  const nameSort = () => {
    // numberValueSorting(data, "asc", "name"); // use callback
  };
  if (isLoading) return <p>... Loading</p>
  return (
    <>
      <Button onClick={() => nameSort()}>Жопа</Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: 20 }}>id</TableCell>
              <TableCell align="right">image</TableCell>
              <TableCell align="right">
                <IconButton onClick={() => nameSort()}>
                  <SortIcon />
                </IconButton>
                name
              </TableCell>
              <TableCell align="right">status</TableCell>
              <TableCell align="right">species</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.results.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right" sx={{ display: "flex" }}>
                  <Avatar alt={row.name} src={row.image} />
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
                <TableCell align="right">{row.species}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
