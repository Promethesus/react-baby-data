import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Histograms from './pages/Histograms';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/histograms" element={<Histograms />}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

