
import LetsStart from "../components/LetsStart.tsx";
import LeftMenu from "../components/LeftMenu.tsx";
import {useState} from "react";
import {BurgerIcon} from "../assets/burger-icon.tsx";
import clsx from "clsx";


const MainPage = () => {
    const [showLeftMenu, setShowLeftMenu] = useState(true)

    return (
        <div className={'flex flex-row'}>
            <div style={{backgroundColor: '#18181B'}} className={` h-lvh transition-all duration-300 ${showLeftMenu ? 'translate-x-0 basis-1/4 fixed sm:relative' : '-translate-x-full fixed'}`}>
                <LeftMenu
                    setShowLeftMenu={setShowLeftMenu}
                />
            </div>
            {!showLeftMenu &&
                <div className={'m-5 mt-8 fixed'}>
                    <BurgerIcon
                        className={'hover:stroke-zinc-400 ease-in-out duration-150 cursor-pointer'}
                        onClick={() => setShowLeftMenu(true)}
                    />
                </div>
            }

            <div className={'h-lvh w-full mx-4'}>
                <LetsStart/>
            </div>
        </div>
    );
};

export default MainPage;