import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import React from 'react';
import { createRoot } from 'react-dom/client';
import SearchApp from './SearchApp/SearchApp';
import AppDnD from './AppStart/AppDnD';
import './index.css';
import LandingPage from './TopicsLandingPage/LandingPage';
import ProductHeatmap from './RatingHeatMap/ProductHeatmap';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<LandingPage/>} />
      <Route path="/drag-n-drop" element={<AppDnD/>} />
      <Route path="/search-app" element={<SearchApp/>} />
      <Route path="/rating-n-heatmap" element={<ProductHeatmap/>} />
      <Route path="/" element={<Navigate to="/dashboard"/>}/>
      <Route path="*" element={<Navigate to="/dashboard"/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);