import {Avatar} from "./tailframes/avatar.tsx";
import {EditIcon} from "../assets/edit-icon.tsx";
import {useRef, useState} from "react";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {getMeetingById, getMeetingDiarization, updateSpeakerName} from "../store/meetings/meetingsActionCreator.ts";

const DiarizationItem = ({ d, meetingId, renderUpdate, setRenderUpdate }) => {

    const [isEditSpeakerName, setIsEditSpeakerName] = useState(false);

    const [newName, setNewName] = useState('');

    const dispatch = useAppDispatch();
    const editSpeakerName = async () => {
        await dispatch(updateSpeakerName(d.speaker.id, newName));
        await dispatch(getMeetingById(meetingId));
        setRenderUpdate(renderUpdate + 1)
    }

    const ref = useRef(null);

    return (
        <div className={'flex mb-4'}>
            <div className={'mr-4'}>
                <Avatar text={d.speaker.name.split('')[0][0]} />
            </div>
            <div>
                <div className={'flex items-center'}>
                    <h1 className={'font-semibold mr-4'}>
                        <input
                            disabled={!isEditSpeakerName}
                            ref={ref}
                            className={'bg-zinc-900'}
                            defaultValue={d.speaker.name}
                            onChange={(event) => setNewName(event.target.value)}
                            onBlur={() => {
                                setIsEditSpeakerName(false)
                                editSpeakerName();
                            }}
                            onKeyUp={(event) => {
                                if (event.key == 'Enter') {
                                    setIsEditSpeakerName(false)
                                    editSpeakerName();
                                }
                            }}
                        />
                    </h1>
                    <EditIcon
                        className={' stroke-zinc-400 hover:stroke-zinc-500 active:stroke-zinc-600 ease-in-out duration-150 cursor-pointer w-5 mr-4'}
                        onClick={() => {
                            setIsEditSpeakerName(true);
                            setTimeout(() => {
                                ref.current.focus();
                            }, 0)
                        }}
                    />
                    <div className={'text-gray-400 text-xs'}>{d.starts_at && d.starts_at}</div>
                </div>
                <div className={'font-light'}>
                    {d.text}
                </div>
            </div>
        </div>
    );
};

export default DiarizationItem;