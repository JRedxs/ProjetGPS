import './App.css';
import TravelForm from './components/Form';
import Map from './components/Map';
import FetchData from './components/Fetch';
import ConnectDatabase from './components/DataBase';


function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>Système de navigation en React</h1>
      </div>
      <TravelForm></TravelForm>
      <Map></Map>
      <FetchData></FetchData>
      <ConnectDatabase/>
    </div>
  );
}
export default App;

