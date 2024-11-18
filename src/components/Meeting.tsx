import {EditIcon} from "../assets/edit-icon.tsx";
import {DeleteIcon} from "../assets/delete-icon.tsx";
import {CalendarIcon} from "../assets/calendar-icon.tsx";
import {TimeIcon} from "../assets/time-icon.tsx";
import {UsersIcon} from "../assets/users-icon.tsx";
import {Tabs} from "./tailframes/tabs/tabs.tsx";
import {useEffect, useRef, useState} from "react";
import {Input} from "./tailframes/input.tsx";
import {Button} from "./tailframes/button.tsx";
import {deleteMeeting, fetchMeetings, updateMeetingTitle} from "../store/meetings/meetingsActionCreator.ts";
import CustomModal from "./CustomModal.tsx";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {resetCurrentMeeting} from "../store/meetings/meetingsSlice.ts";
import DiarizationItem from "./DiarizationItem.tsx";

const Meeting = ({className, meeting}) => {

    const [selectedTab, setSelectedTab] = useState(1)
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
    return (
        <div className={className} style={{height: '93%'}}>
            <div className={'m-auto flex mt-10 h-full max-w-7xl w-full'}>
                <div className={'bg-zinc-900 p-8 rounded-2xl w-2/3'}>
                    <div className={'text-white flex justify-between'}>
                        <input
                            type={"text"}
                            ref={ref}
                            value={title}
                            className={'bg-zinc-900 text-xl font-semibold sm:text-2xl'}
                            disabled={!editTitle}
                            onChange={e => setTitle(e.target.value)}
                            onBlur={() => {
                                setEditTitle(false)
                                editMeetingTitle();
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
                            <div className={'ml-1'}>{meeting.updated_at}</div>
                        </div>
                        <div className={'flex mr-4'}>
                            <TimeIcon/>
                            <div className={'ml-1'}>{meeting.duration}</div>
                        </div>
                        <div className={'flex mr-4'}>
                            <UsersIcon/>
                            <div className={'ml-1'}>Количество спикеров</div>
                        </div>
                    </div>

                    <div className={'mt-16'}>
                        {/*{meeting.diarization.map(d => <DiarizationItem d={d} />)}*/}
                        <DiarizationItem/>
                        <DiarizationItem/>
                    </div>
                </div>

                <div className={'bg-zinc-900 p-8 rounded-2xl ml-5 w-1/3'}>
                    <h1 className={'text-xl font-semibold sm:text-2xl mb-6'}>Сводка</h1>
                    <div className={'flex text-center cursor-pointer'}>
                        <div className={`w-1/2 p-2 transition duration-300 ${selectedTab === 1 ? 'border-b-2' : 'text-gray-500'}`} onClick={() => setSelectedTab(1)}>Общая</div>
                        <div className={`w-1/2 p-2 transition duration-300 ${selectedTab === 2 ? 'border-b-2' : 'text-gray-500'}`} onClick={() => setSelectedTab(2)}>По спикерам</div>
                    </div>
                    {selectedTab === 1
                        ? <div>
                            <div className={'text-gray-500 text-sm mt-10 mb-4'}>
                                Введите количество предложений для создания краткой сводки расшифровки собрания.
                                Если ничего не укажете, то будет сформирована подробная сводка.
                            </div>
                            <Input
                                className={'text-black'}
                                placeholder={'Введите количество предложений.'}
                            />
                            <Button className={'w-full text-black bg-white hover:bg-zinc-400 active:bg-zinc-500 mt-8'}>
                                Создать сводку
                            </Button>
                        </div>

                        : <div>

                        </div>
                    }

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