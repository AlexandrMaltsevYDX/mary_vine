import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Button,
  CardContent,
  CardHeader,
  CardMedia,
  SxProps,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import { grey } from "@mui/material/colors";
import { styles } from "./ContentBlock.styles";

// ! add color for title

interface ContentBlockInterface {
  title: string;
  children: React.ReactNode;
}

const ContentBlock: React.FC<ContentBlockInterface> = ({
  title,
  children,
}) => {
  return (
    <Card sx={styles?.ContentBlock}>
      <CardHeader
        title={title}
        sx={{
          alignItems: "flex-start",
        }}
      />
      {children}
    </Card>
  );
};

export default ContentBlock;
