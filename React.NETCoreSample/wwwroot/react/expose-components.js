"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const server_1 = __importDefault(require("react-dom/server"));
const test_1 = __importDefault(require("./testComponent/test"));
global["React"] = react_1.default;
global["ReactDOM"] = react_dom_1.default;
global["ReactDOMServer"] = server_1.default;
global["TestComponent"] = test_1.default;
