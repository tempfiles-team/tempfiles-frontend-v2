import { Outlet, Route, Routes } from 'react-router-dom';
import React from 'react';

import { MainPage } from './pages';
import { DefaultLayout } from './components';

export const App: React.FC = () => {
  return (
    <Routes >
      <Route
        element={
          <DefaultLayout>
            <Outlet />
          </DefaultLayout>
        }
      >
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
};

export default App;
