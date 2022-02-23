import './App.css';
import React,{useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import AddUser from './components/AddUser/AddUser';
import ClassSlider from './components/ClassSlider/ClassSlider';
import AddCat from './components/AddCat/AddCat';
import Reusable from './components/Reusable/Reusable';
import CountUpdate from './components/Reusable/CountUpdate';
import Loading from './components/Loading/Loading';
import CheckBox from './components/AddUser/CheckBox';
import Dynamic_input from './components/Dynamic_input/Dynamic_input';

function App() {

  const [ajay,setAjay] = useState(0);

  return (
    <>  
 
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddUser ll="props" />} />
      <Route path="/class" element={<ClassSlider ll={ajay} />} />
      <Route path='/addcat' element={<AddCat />} />
      <Route path='/reuse' element={<Reusable />} />
      <Route path='/use' element={<CountUpdate />} />
      <Route path='/dynamic_input' element={<Dynamic_input />} />

      <Route path='/load' element={<Loading />} />
      <Route path='/checkbox' element={<CheckBox />} />
    </Routes>
   
  </BrowserRouter>
  </>

  );
}

export default App;
