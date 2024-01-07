import { useState } from 'react'
import './App.css'
import Helloword from './Helloword'
import 'bootstrap/dist/css/bootstrap.min.css';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import HeaderComponent from './component/HeaderComponent';
import FooterComponent from './component/FooterComponent';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent/>
      <ListEmployeeComponent/>
      <FooterComponent/>
    </>
  )
}

export default App
