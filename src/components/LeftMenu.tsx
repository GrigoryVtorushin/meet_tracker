import {CircleArrowLeftIcon} from "../assets/circle-arrow-left-icon.tsx";
import {Button} from "./tailframes/button.tsx";
import {BurgerIcon} from "../assets/burger-icon.tsx";
import clsx from "clsx";
import {useAuth} from "../hooks/useAuth.ts";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {logout} from "../store/auth/authSlice.ts";
import {useState} from "react";

const LeftMenu = ({ setShowLeftMenu }) => {
    const dispatch = useAppDispatch()
    const { user } = useAuth();
    const handleLogout = () => {
        dispatch(logout())
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div className={'px-5 py-8 h-full flex flex-col'}>
            <div className={'flex justify-between'}>

                <BurgerIcon
                    className={'hover:stroke-zinc-400 ease-in-out duration-150 cursor-pointer'}
                    onClick={() => setShowLeftMenu(false)}
                />

                <div className={'flex items-center'}>
                    <img src={'./src/assets/Avatar.svg'} alt={'avatar'}/>
                    <div className={'font-bold pl-2'}>{user.email}</div>
                </div>
                <div className={'flex items-center'}>
                    <CircleArrowLeftIcon onClick={handleLogout} className={'hover:stroke-zinc-400 ease-in-out duration-150 cursor-pointer'}/>
                </div>
            </div>

            <div className={'py-10'}>
                <Button size={"medium"} className={'w-full text-black bg-white hover:bg-zinc-400 active:bg-zinc-500'}>
                    Новая расшифровка
                </Button>
            </div>

            <div>

            </div>

            <div className={'mt-auto'}>
                <img className={'w-1/2'} src={'./src/assets/logo.svg'} alt={'MEET TRACKER'}/>
                <div className={'w-auto'} style={{fontSize: 14, color: '#737373', fontWeight: 400}}>
                    <p className={''}>Команда «ВИЗ» и УЦСБ</p>
                    <p>2024</p>
                </div>
            </div>

        </div>
    );
};

export default LeftMenu;