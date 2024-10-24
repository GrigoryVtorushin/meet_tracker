
import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage/>}/>
        <Route path={'/signin'} element={<SignInPage/>}/>
        <Route path={'/signup'} element={<SignUpPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
