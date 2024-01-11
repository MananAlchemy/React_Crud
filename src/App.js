// import logo from "./logo.svg";
import "./App.css";
import Form from "./components/Form.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      {/* Other components */}
      <Form />
      <ToastContainer />
    </div>
  );
}

export default App;
