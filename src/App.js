import logo from './logo.svg';
import './App.css';
import InstallPWA from './InstallPWA';
import BahrainButton from './Components/BahrainButton';

function App() {
  return (
    <div className="App">
    <h1>Welcome to My PWA</h1>
    <p>Enjoy a fast, offline experience.</p>
    {/* <InstallPWA /> */}
    <BahrainButton />
  </div>
  );
}

export default App;
