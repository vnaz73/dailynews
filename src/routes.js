import react from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './components/home';
import { Contact } from './components/posts';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
