import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Blog from './pages/Blogs'; // Correct import path

function App() {
  return (
    <Routes>
      {/* The Layout wraps all routes */}
      <Route path="/" element={<Layout />}>
        {/* Nested route for Blog */}
        <Route path="blogs" element={<Blog />} />
        {/* Add other routes here as needed */}
      </Route>
    </Routes>
  );
}

export default App;
