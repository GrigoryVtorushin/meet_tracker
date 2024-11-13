
import {Input} from "../components/tailframes/input.tsx";
import {UserIcon} from "../assets/user-icon.tsx";
import {Label} from "../components/tailframes/label.tsx";
import {Button} from "../components/tailframes/button.tsx";
import {LockIcon} from "../assets/lock-icon.tsx";
import {Link, Navigate} from "react-router-dom";
import {useState} from "react";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {login} from "../store/auth/authActionCreator.ts";
import {useAuth} from "../hooks/useAuth.ts";
const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('')
    const dispatch = useAppDispatch();
    const {isAuth, logError} = useAuth();
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            email: email,
            password: password
        }))
    }
    const validateEmail = () => {
        if (email.length == 0) {
            setEmailError('Это обязательное поле')
        }
        else if (email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            setEmailError('')
        }
        else {
            setEmailError('Почта введена неверно')
        }
    }

    return !isAuth ? (
        <div className={'flex justify-center h-lvh items-center'}>
            <form style={{maxHeight: 522}}>
                <div style={{width: 300}}>
                    <div className={'flex justify-center'}>
                        <img src={'./src/assets/logo.svg'} alt={'MEET TRACKER'}/>
                    </div>


                    <div className={' mt-7'}>
                        <Label className={'text-xs'}>Почта</Label>
                        <Input
                            style={{color: "black"}}
                            id="email"
                            placeholder="Введите почту"
                            helperText={emailError}
                            startAdornment={<UserIcon stroke="inherit" />}
                            containerClassName="max-w-sm"
                            onChange={e => setEmail(e.target.value)}
                            onBlurCapture={validateEmail}
                            error={!!emailError}
                        />
                    </div>

                    <div className={'mt-4'}>
                        <Label className={'text-xs'}>Пароль</Label>
                        <Input
                            style={{color: "black"}}
                            id="password"
                            placeholder="Введите пароль"
                            startAdornment={<LockIcon stroke="inherit" />}
                            containerClassName="max-w-sm"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <div className={'text-red-600 mt-4'}>
                        {logError}
                    </div>

                    <Button
                        className={'w-full mt-24'}
                        variant="primary"
                        type={"submit"}
                        onClick={onSubmit}
                    >
                        Войти
                    </Button>

                </div>

                <div className={'mt-12 flex justify-center items-center'}>
                    Еще нет аккаунта?
                    <Button className={'text-sm ml-1 hover:stroke-blue-800 hover:text-blue-800'} variant="text" size="medium">
                        <Link to={'/signup'}>Зарегистрироваться</Link>
                    </Button>
                </div>
            </form>

        </div>
    ): <Navigate replace to={'/'}/>;
};

export default SignInPage;