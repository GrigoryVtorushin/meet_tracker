import {DotMenuIcon} from "../assets/dot-menu-icon.tsx";
import CustomModal from "./CustomModal.tsx";
import {Button} from "./tailframes/button.tsx";
import {useMeetings} from "../hooks/useMeetings.ts";
import {useState} from "react";
import MeetingPreview from "./MeetingPreview.tsx";


const MeetingsList = ({ className }) => {
    const { meetings } = useMeetings();

    return(
        <div className={className}>
            {
                meetings.map(meeting => <MeetingPreview meeting={meeting} key={meeting.id}/>)
            }
        </div>
    )
};

export default MeetingsList;