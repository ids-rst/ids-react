import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import './assets/css/style.css';

function App() {
  return (
    <>
      <Header/>
      <Navigation/>
    </>
  );
}

export default App;
