import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import { DefaultLayout } from "./Components/index_import";
import Login from "./Components/Page/Login";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<DefaultLayout />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
