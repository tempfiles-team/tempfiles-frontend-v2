import { Route, Routes } from 'react-router-dom';
import React from 'react';

import { MainPage } from './pages';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default App;
