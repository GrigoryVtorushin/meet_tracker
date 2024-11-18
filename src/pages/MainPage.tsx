import UploadFile from "../components/UploadFile.tsx";
import LeftMenu from "../components/LeftMenu.tsx";
import {useState} from "react";
import {BurgerIcon} from "../assets/burger-icon.tsx";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../hooks/useAppDispatch.ts";
import FileProcessing from "../components/FileProcessing.tsx";
import Meeting from "../components/Meeting.tsx";
import {useAuth} from "../hooks/useAuth.ts";
import {useMeetings} from "../hooks/useMeetings.ts";

const MainPage = () => {
    const [showLeftMenu, setShowLeftMenu] = useState(true);
    const [processingStarted, setProcessingStarted] = useState(false)
    const [renderUpdate, setRenderUpdate] = useState(0)
    const { isAuth } = useAuth();
    const {currentMeeting} = useMeetings();
    return isAuth ? (
        <div className={'flex flex-row '}>
            <div className={`bg-zinc-900 h-lvh max-w-96 transition-all duration-300 ${showLeftMenu ? 'translate-x-0 basis-2/5 fixed md:relative' : '-translate-x-full fixed'} `}>
                <LeftMenu
                    setShowLeftMenu={setShowLeftMenu}
                />
            </div>
            {!showLeftMenu &&
                <div className={'m-5 mt-9 fixed'}>
                    <BurgerIcon
                        className={'hover:stroke-zinc-400 ease-in-out duration-150 cursor-pointer'}
                        onClick={() => setShowLeftMenu(true)}
                    />
                </div>
            }


            {currentMeeting
                ?
                <div className={'h-lvh w-full mx-0 sm:mx-4'}>
                    <Meeting className={'flex w-full'} meeting={currentMeeting}/>
                </div>
                :
                <div className={'h-lvh w-full mx-0 sm:mx-4'}>
                    {processingStarted && <FileProcessing setProcessingStarted={setProcessingStarted} className={`flex w-full h-full `}/>}
                    {!processingStarted && <UploadFile key={renderUpdate} renderUpdate={renderUpdate} setRenderUpdate={setRenderUpdate} setProcessingStarted={setProcessingStarted}/>}
                </div>
            }


        </div>
    ): <Navigate replace to={'signin'}/>;
};

export default MainPage;