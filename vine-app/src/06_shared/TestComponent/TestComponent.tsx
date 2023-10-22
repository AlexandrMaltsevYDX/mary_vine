import React from "react";
import styles from "./TestComponent.module.scss";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar, getSidbarData } from "~features/SideBar/SideBarSlice";
import { RootState } from "~store/store";


const TestComponent: React.FC = () => {
  const dispatch = useDispatch();

  const isSideBarExpanded = useSelector(
    (state: RootState) => state.sideBar.expanded
  );

  const sideBarData = useSelector(
    (state: RootState) => state.sideBar.data
  );

  return (
    <div className = {styles.TestComponent}>
      <h2>{`bool is ${isSideBarExpanded}`}</h2>
      <h2>{sideBarData.join(" ")}</h2>
      <Button onClick={() => dispatch(toggleSideBar())} variant="outlined" startIcon={<DeleteIcon /> } endIcon={<SendIcon />}>
        Example
      </Button>
      <Button onClick={() => dispatch(getSidbarData(["dddddddd"]))} variant="outlined" startIcon={<DeleteIcon /> } endIcon={<SendIcon />}>
        Example
      </Button>
      
    </div>
  );
};

export default TestComponent;
