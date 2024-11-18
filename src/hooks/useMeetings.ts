import {useAppSelector} from "./useAppDispatch.ts";

export function useMeetings() {
    const { meetings } = useAppSelector(state => state.meetings)
    return {
        meetings
    };
}