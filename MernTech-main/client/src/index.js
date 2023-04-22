import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AuthContexProvider } from "./context/authContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
<script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.js"></script>
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContexProvider>
      <App />
    </AuthContexProvider>
  </React.StrictMode>
);
