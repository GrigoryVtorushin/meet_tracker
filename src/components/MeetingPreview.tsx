import {DotMenuIcon} from "../assets/dot-menu-icon.tsx";
import CustomModal from "./CustomModal.tsx";
import {Button} from "./tailframes/button.tsx";
import {useRef, useState} from "react";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {
    deleteMeeting,
    fetchMeetings,
    getMeetingById,
    updateMeetingTitle
} from "../store/meetings/meetingsActionCreator.ts";
import {useMeetings} from "../hooks/useMeetings.ts";
import {EditIcon} from "../assets/edit-icon.tsx";
import {DeleteIcon} from "../assets/delete-icon.tsx";

const MeetingPreview = ({meeting}) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showDotMenu, setShowDotMenu] = useState(false);
    const [showContext, setShowContext] = useState(false);
    const [coords, setCoords] = useState({x: 0, y: 0});
    const dispatch = useAppDispatch();
    const {currentMeeting} = useMeetings();
    const color = currentMeeting !== null && currentMeeting.id === meeting.id ? 'bg-zinc-700 ' : 'bg-zinc-900';

    const [editTitle, setEditTitle] = useState(false);
    const ref = useRef(null);
    const [title, setTitle] = useState('');
    const editMeetingTitle = async () => {
        await dispatch(updateMeetingTitle(meeting.id, title))
        await dispatch(fetchMeetings())
    }

    return (
        <div>
            <div
                onMouseEnter={() => setShowDotMenu(true)}
                onMouseLeave={() => setShowDotMenu(false)}
                onClick={() => dispatch(getMeetingById(meeting.id))}
                className={`rounded-lg mr-2 px-4 py-2 mb-2 cursor-pointer transition duration-300 ${color}`}
            >
                <div className={'flex justify-between '}>
                    <div className={'max-w-64 overflow-x-hidden text-nowrap'}>
                        {editTitle
                            ? <input
                                type={"text"}
                                disabled={!editTitle}
                                className={`${color} duration-300`}
                                defaultValue={meeting.title}
                                ref={ref}
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
                            :
                            meeting.title
                        }


                    </div>
                    <DotMenuIcon
                        className={` ${(currentMeeting !== null && currentMeeting.id === meeting.id || showDotMenu) ? 'stroke-zinc-100' : 'stroke-zinc-900'} hover:stroke-zinc-400 cursor-pointer active:stroke-zinc-100 transition duration-150`}
                        onClick={(e) => {
                            e.stopPropagation()
                            setShowContext(true)
                            setCoords({
                                x: e.clientX,
                                y: e.clientY
                            })
                        }}
                    />
                </div>

            </div>

            <div hidden={!showContext} className={'h-lvh w-dvw absolute top-0 left-0'} onClick={() => setShowContext(false)}>
                <div style={{top: coords.y, left: coords.x}} className={'bg-zinc-800 rounded-xl fixed font-semibold text-sm px-2 py-2 z-50'}>
                    <div
                        className={'flex cursor-pointer items-center px-2 py-2 rounded-lg transition duration-150 hover:bg-zinc-700'}
                        onClick={() => {
                            setEditTitle(true)
                            setTimeout(() => {
                                ref.current.focus();
                            }, 0)
                        }}
                    >
                        <EditIcon className={'w-6 pr-2'}/>
                        <div>
                            Переименовать
                        </div>
                    </div>
                    <div className={'flex cursor-pointer items-center px-2 py-2 rounded-lg transition duration-150 hover:bg-zinc-700'}
                         onClick={(e) => {
                             setIsModalOpen(true)
                         }}
                    >
                        <DeleteIcon className={'stroke-red-500 w-6 pr-2'} />
                        <div className={'text-red-500'}>Удалить</div>
                    </div>
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
        </div>

    );
};

export default MeetingPreview;