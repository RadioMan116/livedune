import './styles/global.scss';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import store from './store';
import MainLayout from './layout/MainLayout';
import Signin from './pages/signin';
import Signup from './pages/signup';
import Forget from './pages/forget';

let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate
        loading={null}
        persistor={persistor}
      >
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
      </PersistGate>
    </Provider>
  );
}

export default App;
