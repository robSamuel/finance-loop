import logo from './logo.svg';
import './App.css';
import './assets/scss/main.scss';
import { BrowserRouter } from 'react-router-dom'
import Layout from './components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Finanzaaaaaaaaas I
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
