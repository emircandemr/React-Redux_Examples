import './App.css';

import { BrowserRouter as Router, Switch, Route,Link, Routes} from "react-router-dom";

import HomePage from './pages/Home/HomePage';
import DetailPage from './pages/Details/DetailPage';

function App() {
  return (
    <div className="App">

        <Routes>
        {/* //exact path is used to match the path exactly */}
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/detail/:char_id" element={<DetailPage/>} />

        </Routes>

    </div>
  );
}

export default App;
