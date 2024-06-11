// react
import React from 'react';

// router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// components
import Home from './pages/Home';
import Details from './pages/Details';
import Error from './pages/Error';

function App() {
  return (
    <div className="max-w-screen-md m-auto">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detalhes/:id" element={<Details />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
