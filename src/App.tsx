import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Typography } from "@mui/material";
import RoutesApp from "./routes/routes";

function App() {
  return (
    <Router>
      <div className="App">
      
      
        <RoutesApp />
      </div>
    </Router>
  );
}

export default App;
