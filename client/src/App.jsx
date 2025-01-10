import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThreeScene from "./components/ThreeScene";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
    return (
        <ErrorBoundary>
            <Router>
                <Routes>
                    <Route path="/" element={<ThreeScene />} />
                </Routes>
            </Router>
        </ErrorBoundary>
    );
};

export default App;


