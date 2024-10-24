import {Label} from "../components/label.tsx";
import {Input} from "../components/input.tsx";
import {UserIcon} from "../assets/user-icon.tsx";
import {LockIcon} from "../assets/lock-icon.tsx";
import {Button} from "../components/button.tsx";
import {Link} from "react-router-dom";


const SignUpPage = () => {
    return (
        <div>
            <div className={'flex justify-center h-lvh items-center h-lvh'}>
                <div style={{maxHeight: 522}}>
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
                            />
                        </div>

                        <Button className={'w-full mt-12'} variant="primary">
                            Войти
                        </Button>

                    </div>

                    <div className={'mt-12 flex justify-center items-center'}>
                        Уже есть аккаунт?
                        <Button className={'text-sm ml-2 hover:stroke-blue-800 hover:text-blue-800'} variant="text" size="medium">
                            <Link to={'/signin'}>Войти</Link>
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUpPage;