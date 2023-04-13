import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import { Form } from './components/Form/Form';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </Router>
       
      </header> */}
      <Form />
    </div>
  );
}

export default App;
