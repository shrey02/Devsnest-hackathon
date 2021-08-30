import './App.css';
import Field from './Field';
import WeatherCard from './WeatherCard';
import Scene from './Scene';

function App() {
  return (
    <div className="App">
      <Scene/>
      <div style={{ fontSize: 50, color: 'white', fontFamily: 'Roboto Slab, serif' }}>Weather App</div>
      <Field />
      <WeatherCard />
    </div>
  );
}

export default App;
