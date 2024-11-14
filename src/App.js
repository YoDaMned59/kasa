import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Home, Error } from './pages';
import { Header } from './components';

function App() {
  return (
    <Router>
    <Header />
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="*"
        element={<Error />}
      />
    </Routes>
    {/*<Footer />*/}
  </Router>
  );
}

export default App;
