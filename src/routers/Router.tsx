import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';

const Router = (): ReactElement => (
  <Routes>
    <Route path="*" element={<MainPage/>}/>
  </Routes>
);

export {Router};
