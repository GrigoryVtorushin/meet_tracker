
import {Input} from "../components/tailframes/input.tsx";
import {UserIcon} from "../assets/user-icon.tsx";
import {Label} from "../components/tailframes/label.tsx";
import {Button} from "../components/tailframes/button.tsx";
import {LockIcon} from "../assets/lock-icon.tsx";
import {Link} from "react-router-dom";
const SignInPage = () => {
    return (
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

                    <Button className={'w-full mt-28'} variant="primary">
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
    );
};

export default SignInPage;