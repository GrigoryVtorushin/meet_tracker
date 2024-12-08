import {EditIcon} from "../assets/edit-icon.tsx";
import {DeleteIcon} from "../assets/delete-icon.tsx";
import {CalendarIcon} from "../assets/calendar-icon.tsx";
import {TimeIcon} from "../assets/time-icon.tsx";
import {UsersIcon} from "../assets/users-icon.tsx";
import {Tabs} from "./tailframes/tabs/tabs.tsx";
import {useEffect, useRef, useState} from "react";
import {Input} from "./tailframes/input.tsx";
import {Button} from "./tailframes/button.tsx";
import {
    deleteMeeting,
    fetchMeetings,
    getMeetingDiarization,
    updateMeetingTitle
} from "../store/meetings/meetingsActionCreator.ts";
import CustomModal from "./CustomModal.tsx";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {resetCurrentMeeting} from "../store/meetings/meetingsSlice.ts";
import DiarizationItem from "./DiarizationItem.tsx";
import Summarization from "./Summarization.tsx";
import Lottie from "lottie-react";
import timeAnimatedIcon from "../assets/time-animated-icon.json";
import FileProcessing from "./FileProcessing.tsx";
import FileProcessingError from "./FileProcessingError.tsx";

const Meeting = ({className, meeting, setProcessingStarted}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editTitle, setEditTitle] = useState(false);
    const [title, setTitle] = useState('');
    const dispatch = useAppDispatch();
    const ref = useRef(null);
    useEffect(() => {
        setTitle(meeting.title)
    }, [meeting.title]);
    const editMeetingTitle = async () => {
        await dispatch(updateMeetingTitle(meeting.id, title))
        await dispatch(fetchMeetings())
    }
    const [showSummarization, setShowSummarization] = useState(false);

    const [renderUpdate, setRenderUpdate] = useState(1);

    useEffect(() => {
        let interval;
        if (meeting.diarization.status === 'IN_PROGRESS'){
            interval = setInterval(() => {
                dispatch(getMeetingDiarization(meeting.id));
            }, 10000);
        }
        return () => clearInterval(interval)
    }, [meeting.diarization.status]);

    useEffect(() => {
        setRenderUpdate(renderUpdate + 1)
    }, [meeting]);

    return (
        <div className={className} style={{height: '93%'}}>
            <div className={'m-auto lg:flex mt-20 h-full max-w-7xl w-full lg:mt-10'}>
                <div className={`bg-zinc-900 p-8 rounded-2xl ${meeting.diarization.status === 'IN_PROGRESS' && 'w-full h-full'}`}>
                    <div className={'text-white flex justify-between'}>
                        <input
                            type={"text"}
                            ref={ref}
                            value={title}
                            className={'bg-zinc-900 text-xl font-semibold sm:text-2xl max-w-56 sm:max-w-full'}
                            disabled={!editTitle}
                            onChange={e => setTitle(e.target.value)}
                            onBlur={() => {
                                setEditTitle(false)
                                editMeetingTitle();
                            }}
                            onKeyUp={(event) => {
                                if (event.key == 'Enter') {
                                    setEditTitle(false)
                                    editMeetingTitle();
                                }
                            }}
                        />
                        <div className={'flex'}>
                            <EditIcon
                                className={'hover:stroke-zinc-400 active:stroke-zinc-500 ease-in-out duration-150 cursor-pointer mr-6 '}
                                onClick={() => {
                                    setEditTitle(true);
                                    setTimeout(() => {
                                        ref.current.focus();
                                    }, 1)
                                }}
                            />
                            <DeleteIcon
                                className={'hover:stroke-zinc-400 active:stroke-zinc-500 ease-in-out duration-150 cursor-pointer'}
                                onClick={() => setIsModalOpen(true)}
                            />
                        </div>
                    </div>

                    <div className={'text-gray-500 flex mt-2'}>
                        <div className={'flex mr-4'}>
                            <CalendarIcon/>
                            <div className={'ml-1'}>{meeting.updated_at.substring(0, 10)}</div>
                        </div>
                        <div className={'flex mr-4'}>
                            <TimeIcon/>
                            <div className={'ml-1'}>{meeting.duration.substring(0, 8)}</div>
                        </div>
                        <div className={'flex mr-4'}>
                            <UsersIcon/>
                            <div className={'ml-1'}>5</div>
                        </div>
                    </div>

                    <div className={'mt-10 h-4/5 overflow-y-auto '} key={renderUpdate}>
                        {meeting.diarization.status === 'IN_PROGRESS' && <FileProcessing />}

                        {meeting.diarization.status === 'DONE' && meeting.diarization.result.map((d, index) => <DiarizationItem renderUpdate={renderUpdate} setRenderUpdate={setRenderUpdate} key={index} d={d} meetingId={meeting.id}/>)}

                        {meeting.diarization.status === 'ERROR' && <FileProcessingError/>}

                    </div>

                </div>

                <div hidden={meeting.diarization.length === 0} className={'w-full bg-zinc-800 py-8 px-6 lg:hidden fixed -bottom-1 rounded-t-xl'}>
                    <Button className={'w-full bg-white text-black hover:bg-zinc-400 active:bg-zinc-500 active:duration-75'} onClick={() => setShowSummarization(true)}>
                        Создать сводку
                    </Button>
                </div>

                <div hidden={meeting.diarization.length === 0} className={'basis-1/3 min-w-96'}>
                    <Summarization className={'bg-zinc-900 p-8 rounded-2xl ml-5 max-lg:hidden h-full'}/>
                    <Summarization setShowSummarization={setShowSummarization} className={`bg-zinc-900 top-0 p-8 w-dvw h-lvh lg:hidden transition-all duration-300 fixed  ${showSummarization ? 'translate-y-0 ' : 'translate-y-full'}`}/>
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
                                dispatch(resetCurrentMeeting())
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
        </div>
    );
};

export default Meeting;