import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import { Formulario } from './components/Form/Formulario';
import { Idea } from './components/Idea/Idea';

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
      <Idea />
      <Formulario />
    </div>
  );
}

export default App;
