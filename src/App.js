// import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Table from "./components/Table.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import MananTable from "./components/Table.js";
import EnhancedTable from "./components/Table.js";

function App() {
  return (
    <div>
      {/* <Routes>
        <Route path="" element={<Form />}>
          
        </Route>
        <Route path="Table" element={<Table />}></Route>
      </Routes> */}
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="Table" element={<EnhancedTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
