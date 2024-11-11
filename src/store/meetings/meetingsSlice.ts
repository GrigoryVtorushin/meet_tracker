import {createSlice} from "@reduxjs/toolkit";
import {IMeeting} from "../../types/interfaces.ts";

interface IMeetingsState {
    meetings: IMeeting[];
    meeting: IMeeting;
    error: string | null;
    isSuccess: boolean;
}
export const initialState: IMeetingsState = {
    meetings: [],
    meeting: {} as IMeeting,
    error: null,
    isSuccess: false
}

const meetingsSlice = createSlice({
    name: 'meeting',
    initialState,
    reducers: {

    }
})