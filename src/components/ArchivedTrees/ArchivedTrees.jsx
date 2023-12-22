// ArchivedTrees.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ArchivedTrees() {
    const [archivedTrees, setArchivedTrees] = useState([]);

    useEffect(() => {
        async function fetchArchivedTrees() {
            try {
                const response = await axios.get('http://localhost:8080/api/tree/archive');
                const parsedData = response.data.map(tree => JSON.parse(tree));
                setArchivedTrees(parsedData);
            } catch (error) {
                console.error('Error fetching archived trees:', error);
            }
        }

        fetchArchivedTrees();
    }, []);

    return (
        <div>
            <h1>Archived Binary Trees</h1>
            {archivedTrees.map((tree, index) => (
                <div key={index}>
                    <h3>Binary Tree {index + 1}</h3>
                    <pre>{JSON.stringify(tree, null, 2)}</pre>
                </div>
            ))}
        </div>
    );
}

export default ArchivedTrees;
