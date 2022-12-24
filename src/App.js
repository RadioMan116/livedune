import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const renderPaths = (paths, Element) =>
      paths.map(path => (
          <Route
              key={path}
              path={path}
              element={Element}
          />
      ));
    return (
        <BrowserRouter>
            <Routes>
                    {renderPaths(['loyalty', 'application'], <Loyalty />)}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
