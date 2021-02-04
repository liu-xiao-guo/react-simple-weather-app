import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";

import { init as initApm } from '@elastic/apm-rum'
var apm = initApm({

  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'weather',

  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: 'http://localhost:8200',

  // Set service version (required for source map feature)
  serviceVersion: '1'
})

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root"),
);
