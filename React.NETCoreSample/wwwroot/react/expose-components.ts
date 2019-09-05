import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";

import TestComponent from "./testComponent/test";

declare var global: any;

global["React"] = React;
global["ReactDOM"] = ReactDOM;
global["ReactDOMServer"] = ReactDOMServer;

global["TestComponent"] = TestComponent;
