import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import {useEffect} from "react";
import {useAppDispatch} from "./hooks/useAppDispatch.ts";
import {checkAuth} from "./store/auth/authActionCreator.ts";
import {fetchMeetings} from "./store/meetings/meetingsActionCreator.ts";
import {useMeetings} from "./hooks/useMeetings.ts";
import {useAuth} from "./hooks/useAuth.ts";
import ResetPasswordPage from "./pages/ResetPasswordPage.tsx";

function App() {

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (localStorage.getItem('token')){
            dispatch(checkAuth())
            dispatch(fetchMeetings())
        }
    }, []);

  return (
    <BrowserRouter>
      <Routes>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/signin'} element={<SignInPage/>}/>
          <Route path={'/signup'} element={<SignUpPage/>}/>
          <Route path={'/reset_password'} element={<ResetPasswordPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
