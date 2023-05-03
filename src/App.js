import './Css/App.css';
import {  Routes, Route } from "react-router-dom";
import Landing from './Pages/Landing';
import Event from './Pages/Event';
import Event2 from './Pages/Event2';



function App() {
  
  return (
    <Routes>
      <Route  path='/' element={<Landing/>} />
      <Route path='/okey101' element={<Event></Event>} /> 
      <Route path='/okey104' element={<Event2></Event2>} > 
      
      
      </Route>

    </Routes>

  );
}

export default App;
