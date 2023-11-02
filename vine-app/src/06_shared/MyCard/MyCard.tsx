import Card from "@mui/material/Card";

import IconButton from "@mui/material/IconButton";

import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { CardMedia } from "@mui/material";

export default function MyCard() {
  function fetchCharacterData(characterId) {
    const url = `https://rickandmortyapi.com/api/character/${characterId}`;

    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const { name, gender, species, image } = data;
        console.log(`Name: ${name}`);
        console.log(`Gender: ${gender}`);
        console.log(`Species: ${species}`);
        console.log(`Image: ${image}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  return (
    <Card sx={{ display: "flex", width: "400px" }}>
      {/* <CardMedia></CardMedia> */}
      <IconButton
        onClick={() => fetchCharacterData(1)}
        aria-label="play/pause"
      >
        <PlayArrowIcon sx={{ height: 38, width: 38 }} />
      </IconButton>
    </Card>
  );
}