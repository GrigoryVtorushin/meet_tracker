import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IMeeting {
    created_at: string,
    updated_at: string,
    id: string,
    title: string,
    duration: string,
    speakers_count: number,
}
interface IMeetingsStatePayload {
    meetings: IMeeting[]
}

const initialState: IMeetingsStatePayload = {
    meetings: []
}

const meetingsSlice = createSlice({
    name: 'meetings',
    initialState,
    reducers: {
        fetchMeetingsSuccess(state, action: PayloadAction<IMeetingsStatePayload>) {
            state.meetings = action.payload.meetings
        }
    }
})

export const { fetchMeetingsSuccess } = meetingsSlice.actions
export default meetingsSlice.reducer