import logo from './logo.svg';
import './App.css';
import InstallPWA from './InstallPWA';
import BahrainButton from './Components/BahrainButton';
import { useEffect, useState } from 'react';
import useGeoLocation from "react-ipgeolocation";
function App() {
  const location = useGeoLocation();
console.log(location.country);
console.log(location)
  // const [country, setCountry] = useState("");
  // useEffect(() => {
  //   fetch("https://geolocation-db.com/json/")
  //     .then((res) => res.json())
  //     .then((data) => setCountry(data.country_name))
  //     .catch((err) => console.error("Error fetching location:", err));
  // }, []);
  // console.log(country)
  return (
    <div className="App">
    {/* <h1>Welcome to My PWA</h1>
    <p>Enjoy a fast, offline experience.</p> */}
    <p>
Here is Your Country Code <h1>location</h1>
    </p>
    {/* <InstallPWA /> */}
    {/* <BahrainButton /> */}
  </div>
  );
}

export default App;
