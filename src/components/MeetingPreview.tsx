import {DotMenuIcon} from "../assets/dot-menu-icon.tsx";
import CustomModal from "./CustomModal.tsx";
import {Button} from "./tailframes/button.tsx";
import {useState} from "react";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {deleteMeeting, fetchMeetings} from "../store/meetings/meetingsActionCreator.ts";

const MeetingPreview = ({meeting}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useAppDispatch();


    return (
        <>
            <div className={`bg-zinc-700 rounded-lg px-4 py-2 mb-2 cursor-pointer`} key={meeting.title}>
                <div className={'flex justify-between '}>
                    <div>
                        {meeting.title}
                    </div>
                    <DotMenuIcon className={'hover:stroke-zinc-400 cursor-pointer active:stroke-zinc-500 transition duration-300'} onClick={() => setIsModalOpen(true)}/>

                </div>
            </div>

            <CustomModal
                active={isModalOpen}
                setActive={setIsModalOpen}
            >
                <div>
                    <h1 className={'text-2xl font-semibold mb-8'}>Удалить расшифровку?</h1>
                    <div className={'mb-10'}>
                        <div>
                            Вы действительно хотите удалить расшифровку «{meeting.title}»?
                        </div>
                        <div>
                            Это действие необратимо.
                        </div>
                    </div>

                    <div className={'flex sm:flex-row flex-col justify-end'}>
                        <Button
                            className={'sm:w-1/4 text-black bg-white hover:bg-zinc-400 active:bg-zinc-500 active:duration-75 sm:mr-3 sm:mb-0 mb-3'}
                            onClick={() => setIsModalOpen(false)}
                        >
                            Отменить
                        </Button>
                        <Button
                            className={'sm:w-1/4 bg-red-500 hover:bg-red-700 active:bg-red-800 active:duration-75'}
                            onClick={async () => {
                                await dispatch(deleteMeeting(meeting.id));
                                await dispatch(fetchMeetings())
                                setIsModalOpen(false);
                            }}
                        >
                            Удалить
                        </Button>
                    </div>
                </div>
            </CustomModal>
        </>

    );
};

export default MeetingPreview;