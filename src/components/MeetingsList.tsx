import {DotMenuIcon} from "../assets/dot-menu-icon.tsx";
import CustomModal from "./CustomModal.tsx";
import {Button} from "./tailframes/button.tsx";
import {useMeetings} from "../hooks/useMeetings.ts";
import {useState} from "react";
import MeetingPreview from "./MeetingPreview.tsx";


const MeetingsList = ({ activeMeeting, className }) => {

    const { meetings } = useMeetings();
    const [isModalOpen, setIsModalOpen] = useState(false);


    return(
        <div className={className}>
            {
                meetings.map(meeting => <MeetingPreview meeting={meeting} />)
            }
        </div>
    )
};

export default MeetingsList;