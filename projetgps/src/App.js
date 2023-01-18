import './App.css';
import InputSearch from './components/InputSearch';
import Map from './components/Map';
import ConnectDatabase from './components/DataBase';

function App() {
  return (
    <div className="App">
      <InputSearch></InputSearch>
      <Map></Map>
      <ConnectDatabase/>
    </div>
  );

  
}

export default App;
