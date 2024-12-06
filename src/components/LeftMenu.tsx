import {CircleArrowLeftIcon} from "../assets/circle-arrow-left-icon.tsx";
import {Button} from "./tailframes/button.tsx";
import {BurgerIcon} from "../assets/burger-icon.tsx";
import {useAuth} from "../hooks/useAuth.ts";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {logout} from "../store/auth/authSlice.ts";
import {useEffect, useState} from "react";
import CustomModal from "./CustomModal.tsx";
import {useMeetings} from "../hooks/useMeetings.ts";
import MeetingsList from "./MeetingsList.tsx";
import {resetCurrentMeeting, resetMeetingState} from "../store/meetings/meetingsSlice.ts";
import {fetchMeetings} from "../store/meetings/meetingsActionCreator.ts";
import AdminPanel from "./AdminPanel.tsx";

const LeftMenu = ({ setShowLeftMenu }) => {
    const dispatch = useAppDispatch()
    const { user, accessToken } = useAuth();
    const { meetings, currentMeeting} = useMeetings();
    useEffect(() => {
        dispatch(fetchMeetings())
    }, [accessToken]);
    const handleLogout = () => {
        dispatch(logout())
        dispatch(resetMeetingState())
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showAdminPanel, setShowAdminPanel] = useState(false);

    return (

        <div className={'px-5 py-8 h-full flex flex-col z-50'}>
            <div className={'flex justify-between'}>
                <div className={'flex items-center'}>
                    <BurgerIcon
                        className={'hover:stroke-zinc-400 ease-in-out duration-150 cursor-pointer mr-2'}
                        onClick={() => setShowLeftMenu(false)}
                    />

                    <div className={'flex items-center'}>
                        <img src={'./src/assets/Avatar.svg'} alt={'avatar'}/>
                        <div className={'font-bold pl-2'}>{user.email}</div>
                    </div>
                </div>

                <div className={'flex items-center'}>
                    <CircleArrowLeftIcon onClick={() => setIsModalOpen(true)} className={'hover:stroke-zinc-400 ease-in-out duration-150 cursor-pointer'}/>
                </div>
            </div>

            <div className={'py-10'}>
                <Button size={"medium"} className={'w-full text-black bg-white hover:bg-zinc-400 active:bg-zinc-500'} onClick={() => {
                    dispatch(resetCurrentMeeting())
                }}>
                    Новая расшифровка
                </Button>
                <div
                    hidden={user.role !== 'ADMIN'}
                >
                    <Button
                        variant={"outlined"}
                        size={"medium"}
                        className={'w-full mt-4 text-white hover:bg-zinc-400 hover:border-zinc-400 active:bg-zinc-500'}
                        onClick={() => {
                            setShowAdminPanel(true)
                        }}
                    >
                        Панель администратора
                    </Button>
                </div>

            </div>

            <MeetingsList className={' mb-5 overflow-y-auto'}/>

            <div className={'mt-auto'}>
                <img className={'w-1/2'} src={'./src/assets/logo.svg'} alt={'MEET TRACKER'}/>
                <div className={'w-auto'} style={{fontSize: 14, color: '#737373', fontWeight: 400}}>
                    <p className={''}>Команда «ВИЗ» и УЦСБ</p>
                    <p>2024</p>
                </div>
            </div>
            <CustomModal
                active={isModalOpen}
                setActive={setIsModalOpen}
            >
                <div className={'z-50'}>
                    <h1 className={'text-2xl font-semibold mb-8'}>Выйти из аккаунта?</h1>
                    <div className={'mb-10'}>
                        <div>
                            Вы действительно хотите покинуть эту страницу?
                        </div>
                        <div>
                            Данные могут не сохраниться.
                        </div>
                    </div>

                    <div className={'flex sm:flex-row flex-col justify-end'}>
                        <Button className={'sm:w-1/4 text-black bg-white hover:bg-zinc-400 active:bg-zinc-500 sm:mr-3 sm:mb-0 mb-3'} onClick={() => setIsModalOpen(false)}>
                            Оставаться
                        </Button>
                        <Button className={'sm:w-1/4 bg-red-500 hover:bg-red-700 active:bg-red-800'} onClick={handleLogout}>
                            Выйти
                        </Button>
                    </div>
                </div>
            </CustomModal>

            <AdminPanel setShowAdminPanel={setShowAdminPanel} showAdminPanel={showAdminPanel}/>

        </div>
    );
};

export default LeftMenu;