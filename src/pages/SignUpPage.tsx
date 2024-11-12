import {Label} from "../components/tailframes/label.tsx";
import {Input} from "../components/tailframes/input.tsx";
import {UserIcon} from "../assets/user-icon.tsx";
import {LockIcon} from "../assets/lock-icon.tsx";
import {Button} from "../components/tailframes/button.tsx";
import {Link} from "react-router-dom";
import {useState} from "react";
import {register} from "../store/auth/authActionCreator.ts";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {AppDispatch} from "../store/store.ts";


const SignUpPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const dispatch = useAppDispatch()
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(register({
            email: email,
            password: password,
        }))
    }
    return (
        <div>
            <div className={'flex justify-center h-lvh items-center h-lvh'}>
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
                                startAdornment={<UserIcon stroke="inherit" />}
                                containerClassName="max-w-sm"
                                onChange={e => setEmail(e.target.value)}
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
                                required
                                minLength={8}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <div className={'mt-4'}>
                            <Label className={'text-xs'}>Повторите пароль</Label>
                            <Input
                                style={{color: "black"}}
                                id="repeatpassword"
                                placeholder="Повторите пароль"
                                startAdornment={<LockIcon stroke="inherit" />}
                                containerClassName="max-w-sm"
                                required
                                minLength={8}
                                onChange={e => setConfirmPassword(e.target.value)}
                            />
                        </div>

                        <Button
                            type={"submit"}
                            className={'w-full mt-12'}
                            variant="primary"
                            onClick={onSubmit}
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
    );
};

export default SignUpPage;