import React, { useState } from "react";
import { useGetAllUsersQuery } from "~store/RickMorty/service.ts";
import { InputLabel, MenuItem, } from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface QueryParams {
  column_name: string;
  order: "asc" | "desc";
}

const UsersTest: React.FC = () => {
  const [columnName, setColumnName] = useState("");
  const [order, setOrder] = useState("desc");

  const { data, isLoading } = useGetAllUsersQuery({ column_name: columnName, order: order } as QueryParams);

  const handleSortByColumn = (event: SelectChangeEvent) => {
    setColumnName(event.target.value as string);
  };

  const handleSortByOrder = () => {
    (order === "desc" ? setOrder("asc") : setOrder("desc"))
  }
  if (isLoading) return <p>... Loading</p>;
  return (
    <>
      <InputLabel id="demo-simple-select-label">Sort by Column</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={columnName}
        label="Age"
        onChange={handleSortByColumn}
      >
        <MenuItem value={"id"}>id</MenuItem>
        <MenuItem value={"name"}>name</MenuItem>
      </Select>
      <button onClick={() => handleSortByOrder()}>{order}</button>
      {data?.map((row, index) => (
        <div key={index}>
          <p>{row.id}</p>
          <p>{row.name}</p>
          <img alt={"avatar"} style={{ maxWidth: "100px", borderRadius: "50px" }} src={row.avatar} />
        </div>
      ))}
    </>
  );
};

export default UsersTest;