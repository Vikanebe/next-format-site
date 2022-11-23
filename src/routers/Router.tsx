import React, { ReactElement } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { ProjectsPage } from '../pages/ProjectsPage';
import { JobsPage } from "../pages/JobsPage";

const Router = (): ReactElement => (
  <Routes>
    <Route path="*" element={<MainPage/>}/>
    <Route path="/projects" element={<ProjectsPage/>}/>
    <Route path="/jobs" element={<JobsPage/>}/>
  </Routes>
);

export {Router};
