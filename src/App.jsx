import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeLayout from "./components/HomeLayout"
import HomePage from "./components/Home"


export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout/>}>
          <Route index element={<HomePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}