import { Link } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";

export const Header = () => {
  return (
    <Box
      sx={{
        pt: 2,
        pb: 2,
        zIndex: 2,
        boxShadow: 5,
        width: "100vw",
        position: "fixed",
        backgroundColor: "white",
      }}
    >
      <Container>
        <Box display="flex" justifyContent="space-between">
          <Typography>
            <Link to="/">Tech Bytes</Link>
          </Typography>
          <Box>
            <Link to="/about">About</Link>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/about">About</Link>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/about">About</Link>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <Link to="/about">About</Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
