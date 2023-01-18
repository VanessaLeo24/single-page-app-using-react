import React from 'react';
import {Routes, Route} from "react-router-dom";
import Navigation from './components/Navigation';
import HomePageWrapper from './pages/HomePage';
import AddPage from './pages/AddPage';
import DetailPage from './pages/DetailPage';
import NotFoundPage from './pages/NotFoundPage';


function App() {
  return (
    <div className="app-container">        
        <Navigation />
        
        <main>
          <Routes>
              <Route path='/' element={<HomePageWrapper />} />
              <Route path='/add' element={<AddPage />} />
              <Route path='/notes/:id' element={<DetailPage />} />
              <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
    </div>
  );
}

export default App;
