import {Label} from "../components/tailframes/label.tsx";
import {Input} from "../components/tailframes/input.tsx";
import {UserIcon} from "../assets/user-icon.tsx";
import {useState} from "react";
import {Button} from "../components/tailframes/button.tsx";

const ResetPasswordPage = () => {
    const [emailError, setEmailError] = useState('');
    const [email, setEmail] = useState('');
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

    return (
        <div className={'w-full h-lvh flex justify-center items-center '}>
            <div>
                <h1 className={'text-3xl font-bold text-center'}>Восстановление пароля</h1>
                <div className={'text-gray-400 max-w-sm text-md my-4 text-center'}>
                    Мы отправим код для сброса пароля на Вашу электронную почту.
                </div>
                <div className={'flex justify-center'}>
                    <div className={'my-4 w-4/6'}>
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
                        <Button className={'mt-12 w-full'}>
                            Отправить код
                        </Button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ResetPasswordPage;