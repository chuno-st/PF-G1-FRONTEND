
import {Routes,Route,} from "react-router-dom"
import Landing from "./components/Landing/Landing"
import './App.css';

function App() {
  return (

   <div className="bodyApp">

      <Routes>
        <Route path="/" element={<Landing/>} />
      </Routes>

   </div>
      
  );
}

export default App;
