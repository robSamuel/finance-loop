import logo from './logo.svg';
import './App.css';
import './assets/scss/main.scss';
import Layout from './components/Layout';

const App = () => {
  return (
    <Layout>
      <header className="App-header">
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
      </header>
    </Layout>
  );
}

export default App;
