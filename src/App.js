import logo from "./mui-logo.png";
import "./App.css";
import {
  Button,
  ButtonGroup,
  Checkbox,
  FormControlLabel,
  // TextField,
  Typography,
  Container,
  Paper,
  Grid,
  AppBar,
  Toolbar,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import "fontsource-roboto";

function App() {
  const [checked, setChecked] = useState(true);

  const CheckboxExample = () => {
    return (
      <FormControlLabel
        style={{ marginTop: 5 }}
        control={
          <Checkbox
            icon={<SaveIcon />}
            checkedIcon={<SaveIcon />}
            checked={checked}
            onChange={(e) => {
              setChecked(e.target.checked);
            }}
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          />
        }
        label="Testing Checkbox"
      />
    );
  };

  const theme = createTheme({
    typography: {
      subtitle1: {
        marginBottom: 15,
      },
      h3: {
        fontSize: 40,
      },
    },
    palette: {
      secondary: {
        main: pink[500],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div className="App">
          <header className="App-header">
            <AppBar>
              <Toolbar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6"> My MUI App</Typography>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>

            <Typography style={{ marginTop: 15 }} variant="h3" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learning to use Material UI
            </Typography>

            <Grid
              container
              spacing={2}
              style={{ justifyContent: "center", marginTop: 5 }}
            >
              <Grid item xs={3} sm={5} lg={3}>
                <Paper style={{ height: 100, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={5} lg={3}>
                <Paper style={{ height: 100, width: "100%" }} />
              </Grid>
              <Grid item xs={3} sm={10} lg={3}>
                <Paper style={{ height: 100, width: "100%" }} />
              </Grid>
            </Grid>
            {/* <TextField
              label="Email"
              color="error"
              variant="filled"
              type="email"
              placeholder="test@test.com"
            /> */}
            <img
              style={{ marginBottom: 20, marginTop: 20, height: 300 }}
              src={logo}
              className="App-logo"
              alt="logo"
            />
            <ButtonGroup variant="contained" size="large">
              <Button startIcon={<AddIcon />} color="primary">
                Add
              </Button>
              <Button startIcon={<DeleteIcon />} color="secondary">
                Discard
              </Button>
            </ButtonGroup>
            <CheckboxExample />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
