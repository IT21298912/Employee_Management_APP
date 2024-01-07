import { useState } from 'react'
import './App.css'
import Helloword from './Helloword'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmployeeComponent from './component/EmployeeComponent';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
      <Routes>
        {/* //http://localhost:3000 */}
        <Route path='/' element={<ListEmployeeComponent/>}></Route>
        {/* //http://localhost:3000/employee */}
        <Route path='/employee' element={<ListEmployeeComponent/>}></Route>
         {/* //http://localhost:3000/add-employee */}
        <Route path='/add-employee' element={<EmployeeComponent/>}></Route>
      </Routes>
      
      <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
