import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Greeting from './components/Greeting';
import Menu from './components/Menu';
import Login from './components/Login';
import Register from './components/Register';
import Developers from './components/Developers';
import DeveloperForm from './components/DeveloperForm';
import Developer from './components/Developer';
import store from './redux/configureStore';
import 'react-toastify/dist/ReactToastify.css';
import './styles/App.css';

const App = () => (
  <div className="app-container">
    <Provider store={store}>
      <Router>
        <Menu />
        <Routes>
          <Route exact="true" path="/" element={<Greeting />} />
          <Route exact="true" path="/login" element={<Login />} />
          <Route exact="true" path="/register" element={<Register />} />
          <Route exact="true" path="/developers" element={<Developers />} />
          <Route exact="true" path="/developer/:id" element={<Developer />} />
          <Route exact="true" path="/developer/new" element={<DeveloperForm />} />
          <Route exact="true" path="/developer/update/:id" element={<DeveloperForm />} />
        </Routes>
      </Router>
    </Provider>
    <ToastContainer 
      position='top-right'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  </div>
);

export default App;
