import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RFlow from "./RFlow";
import Chart from "./Charts";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/flow' element={<RFlow />} />
                <Route path='/charts' element={<Chart />} />
            </Routes>
        </Router>
    )
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
