
import {BrowserRouter,Routes,Route,} from "react-router-dom"
import Landing from "./components/Landing"
import './App.css';

function App() {
  return (

   <div className="bodyApp">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
      </Routes>
    </BrowserRouter>
   </div>
      
  );
}

export default App;
