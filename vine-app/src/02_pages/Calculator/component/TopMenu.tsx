import React from "react";
import {Stepper, Step, StepLabel} from "@mui/material";

const TopMenu = () => {
  const steps = ["Загрузка", "Объекты", "Конфигуратор", "Результаты"];

  return (
    <>
      <Stepper
        activeStep={0}
        alternativeLabel
        // nonLinear
        sx={{m: 0, p: 0, width: "100%", justifyContent: "space-between"}}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </>
  );
};

export default TopMenu;
