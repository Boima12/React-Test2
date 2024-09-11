import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.jsx'
import './index.css'


import Co_Page1 from "./pages/page1";
import Co_Page2 from "./pages/page2";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/React-Test2/">
      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/pages/page1" element={<Co_Page1 />} />
        <Route path="/pages/page2" element={<Co_Page2 />} />

      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
