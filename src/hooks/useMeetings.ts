import {useAppSelector} from "./useAppDispatch.ts";

export function useMeetings() {
    const { meetings, currentMeeting } = useAppSelector(state => state.meetings)
    return {
        meetings,
        currentMeeting
    };
}