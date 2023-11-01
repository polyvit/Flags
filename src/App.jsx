import { Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import { Header } from './components/Header';
import { Main } from './components/Main';

import HomePage from './pages/HomePage';
import Details  from './pages/Details';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Fragment>
      <Header />
      <Main>
        <Routes>
          <Route exact path="/" element={
            <HomePage />
          } />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </Fragment>
  );
}

export default App;
