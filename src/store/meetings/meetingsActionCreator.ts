import {AppDispatch} from "../store.ts";
import $api from "../../axios";
import {fetchMeetingsSuccess} from "./meetingsSlice.ts";


export const fetchMeetings = () => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await $api.get('/meetings')
            dispatch(fetchMeetingsSuccess({
                meetings: response.data
            }))
        } catch (error) {
            console.log(error)
        }
    }
}

export const deleteMeeting = (meetingId) => {
    return async () => {
        try {
            await $api.delete(`/meetings/${meetingId}`)
        } catch (error) {
            console.log(error)
        }
    }
}
