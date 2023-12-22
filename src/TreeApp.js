// TreeApp.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NumberEntry from './components/NumberInput/NumberInput';
import ArchivedTrees from './components/ArchivedTrees/ArchivedTrees';

function TreeApp() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<NumberEntry />} />
                <Route path="/number-entry" element={<NumberEntry />} />
                <Route path="/archived-trees" element={<ArchivedTrees />} />
            </Routes>
        </Router>
    );
}

export default TreeApp;
