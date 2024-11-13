import {Label} from "../components/tailframes/label.tsx";
import {Input} from "../components/tailframes/input.tsx";
import {UserIcon} from "../assets/user-icon.tsx";
import {LockIcon} from "../assets/lock-icon.tsx";
import {Button} from "../components/tailframes/button.tsx";
import {Link, Navigate} from "react-router-dom";
import {useState} from "react";
import {register} from "../store/auth/authActionCreator.ts";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {AppDispatch} from "../store/store.ts";
import {useAuth} from "../hooks/useAuth.ts";

const SignUpPage = () => {
    const {isAuth} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useAppDispatch()
    const [error, setError] = useState('')
    const [emailError, setEmailError] = useState('')

    const onSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword){
            dispatch(register({
                email: email,
                password: password,
            }))
        }
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
        };
    }
    const checkPasswordError = (pswd, confirmPswd) => {
        if (pswd.length < 8) {
            setError('Пароль должен содержать как минимум 8 символов')
        }
        else if (pswd !== confirmPswd) {
            setError('Пароли не совпадают')
        }
        else {
            setError('')
        }
    }

    return !isAuth ? (
        <div>
            <div className={'flex justify-center h-lvh items-center h-lvh'}>
                <form style={{maxHeight: 522}} onSubmit={onSubmit}>
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
                                helperText={error}
                                startAdornment={<LockIcon stroke="inherit" />}
                                containerClassName="max-w-sm"
                                required
                                error={!!error}
                                onChange={e => {
                                    setPassword(e.target.value);
                                    checkPasswordError(e.target.value, confirmPassword)
                                }}
                            />
                        </div>

                        <div className={'mt-4'}>
                            <Label className={'text-xs'}>Повторите пароль</Label>
                            <Input
                                style={{color: "black"}}
                                id="repeatpassword"
                                placeholder="Повторите пароль"
                                helperText={error}
                                startAdornment={<LockIcon stroke="inherit" />}
                                containerClassName="max-w-sm"
                                required
                                error={!!error}

                                onChange={e => {
                                    setConfirmPassword(e.target.value);
                                    checkPasswordError(password, e.target.value);
                                }}
                            />
                        </div>

                        <Button
                            type={"submit"}
                            className={'w-full mt-12'}
                            variant="primary"
                            disabled={!!error || !!emailError || !email.length || !password.length || !confirmPassword.length}
                        >
                            Зарегистрироваться
                        </Button>

                    </div>

                    <div className={'mt-12 flex justify-center items-center'}>
                        Уже есть аккаунт?
                        <Button className={'text-sm ml-2 hover:stroke-blue-800 hover:text-blue-800'} variant="text" size="medium">
                            <Link to={'/signin'}>Войти</Link>
                        </Button>
                    </div>
                </form>

            </div>
        </div>
    ): <Navigate replace to={'/'}/>;
};

export default SignUpPage;