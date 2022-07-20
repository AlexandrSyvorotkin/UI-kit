import './App.css';
import Header from "./Layout/Header";
import MainContent from "./Layout/MainContent";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path='/*' element={<MainContent/>}/>
        </Routes>
    </div>
  );
}

export default App;
