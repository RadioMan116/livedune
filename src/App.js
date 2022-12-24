import './styles/global.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from './layout/MainLayout';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Forget from './pages/forget';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<MainLayout />}
        >
          <Route
            index
            element={<Signin />}
          />
          <Route
            path='signup'
            element={<Signup />}
          />{' '}
          <Route
            path='forget'
            element={<Forget />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
