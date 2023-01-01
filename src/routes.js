import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home } from './components/home';
import { Contact } from './components/posts';
import Header from './components/header';
import { MainLayout } from './hoc/mainLayout';

const MyRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};

export default MyRouter;
