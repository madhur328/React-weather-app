import './App.css';
import LeftPanel from './components/LeftPanel';
import Header from './components/Header';
import WeatherReports from './components/WeatherReports';
import Statistics from './components/Statistics';
import { ModalProvider } from './components/Modal';
import WeatherVideos from './components/WeatherVideos';

function App() {
  return (
    <ModalProvider>
      <div className="weather_app">
        <LeftPanel/>
        <div className="main-body_app">
          <Header />
          <div class="main-content_app">
            <WeatherReports />
            <Statistics />
            <WeatherVideos/>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
}

export default App;
