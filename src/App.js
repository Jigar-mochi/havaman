import Navbar from './Components/Navbar';
import Weather from './Components/Weather';
import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import News from './Components/News';
import { Fragment } from 'react';
import Scrollbutton from './Components/Scrollbutton';

function App() {
  const pagesize = 18
  const apikey = process.env.REACT_APP_APIKEYOFNEWS

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Weather />} />
          <Route path="health" element={<News pagesize={pagesize} country='in' category="health" apikey={apikey} />} />
          <Route path="news" element={<News pagesize={pagesize} country='in' category="general" apikey={apikey} />} />
          <Route path="science" element={<News pagesize={pagesize} country='in' category="science" apikey={apikey} />} />
          <Route path="technology" element={<News pagesize={pagesize} country='in' category="technology" apikey={apikey} />} />
        </Routes>
      </BrowserRouter>
      <Fragment>
        <Scrollbutton />
      </Fragment>
    </div>
  );
}

export default App;
