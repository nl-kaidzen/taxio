import React from "react";
import "./App.css";
import {
    Box,
    Container,
    CssBaseline,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import { NewDeclaration } from "./pages/NewDeclaration";
import {SupportButton} from "./components/SupportButton";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <CssBaseline />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          overflow: "auto",
        }}
      >
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: "500px",
                }}
              >
                <NewDeclaration />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}>
            <Container maxWidth="sm" sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem'
            }}>
                <Typography variant="body1">
                    Hey! if you like this service, you can support me :)
                </Typography>
                <SupportButton />
            </Container>
        </Box>
    </Box>
  );
}

export default App;
