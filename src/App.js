import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';
import store from './redux/configureStore';

const App = () => (
  <Provider store={store}>
    <Router>
      <Routes>
        <Route exact="true" path="/" element={<Greeting />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
