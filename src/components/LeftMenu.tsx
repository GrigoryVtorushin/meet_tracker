import {CircleArrowLeftIcon} from "../assets/circle-arrow-left-icon.tsx";
import {Button} from "./tailframes/button.tsx";
import {BurgerIcon} from "../assets/burger-icon.tsx";
import clsx from "clsx";

const LeftMenu = ({ setShowLeftMenu }) => {

    return (
        <div className={'px-5 py-8 h-full flex flex-col'}>
            <div className={'flex justify-between'}>

                <BurgerIcon
                    className={'hover:stroke-zinc-400 ease-in-out duration-150 cursor-pointer'}
                    onClick={() => setShowLeftMenu(false)}
                />

                <div className={'flex items-center'}>
                    <img src={'./src/assets/Avatar.svg'} alt={'avatar'}/>
                    <div className={'font-bold pl-2'}>Почта</div>
                </div>
                <div className={'flex items-center'}>
                    <CircleArrowLeftIcon className={'hover:stroke-zinc-400 ease-in-out duration-150 cursor-pointer'}/>
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