import './App.css';
import { BrowserRouter as Router, useNavigate } from 'react-router-dom';
import { useReducer } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { fetchAPI, submitAPI } from './Api';

function App() {
  const initializeTimes = () => fetchAPI(new Date());
  const updateTimes = (state, action) => fetchAPI(action);
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    const success = submitAPI(formData);
    if (success) {
      navigate('/confirmed');
    }
  };

  return (
    <div className="App">
      <Header />
      <Main
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
      <Footer />
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
