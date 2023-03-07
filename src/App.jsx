import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import BoardPage from "./pages/Board/Board.jsx";
import Calendar from "./pages/Calender/Calendar.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import DataGrid from "./pages/DataGrid/DataGrid.jsx";

const App = () => {
  return (
    <div id="dashboard">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="calender" element={<Calendar />} />
            <Route path="board" element={<BoardPage />} />
            <Route path="users" element={<DataGrid />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
