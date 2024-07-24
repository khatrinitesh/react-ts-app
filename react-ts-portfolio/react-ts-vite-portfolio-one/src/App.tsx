import React, { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './layout/MainLayout';

import Intro from './pages/Intro';
import Blog from './pages/Blog';
import Uses from './pages/Uses';
import Contact from './pages/Contact';
import Error from './pages/Error';
import ThemeToggle from './components/ThemeToggle';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Intro/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/uses" element={<Uses/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <ThemeToggle/>
    </Router>
  );
}

export default App;