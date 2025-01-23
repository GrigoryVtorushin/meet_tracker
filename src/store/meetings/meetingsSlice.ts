import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface IMeetingPreview {
    created_at: string,
    updated_at: string,
    id: string,
    title: string,
    duration: string,
    speakers_count: number,
}

interface IDiarizationItem {
    starts_at: string,
    ends_at: string,
    text: string,
    speaker: {
        name: string,
        id: string,
    },
}

interface ISpeakerSummarizationItem {
    text: string,
    speaker: {
        name: string,
        id: string,
    },
}

export interface IMeeting {
    created_at: string,
    updated_at: string,
    title: string,
    id: string,
    duration: string,
    file_url: string,
    diarization: {
        status: string,
        result: IDiarizationItem[]
    },
    general_summarization: {
        status: string,
        result: {
            text: string
        }
    },
    speaker_summarization: {
        status: string,
        result: ISpeakerSummarizationItem[]
    },
    author_id: string
}

interface IMeetingsStatePayload {
    meetings: IMeetingPreview[],
    currentMeeting : IMeeting
}

const initialState: IMeetingsStatePayload = {
    meetings: [],
    currentMeeting: null
}

const meetingsSlice = createSlice({
    name: 'meetings',
    initialState,
    reducers: {
        fetchMeetingsSuccess(state, action: PayloadAction<IMeetingsStatePayload>) {
            state.meetings = action.payload.meetings
        },

        getMeetingByIdSuccess (state, action: PayloadAction<IMeetingsStatePayload>) {
            state.currentMeeting = action.payload.currentMeeting
        },

        resetCurrentMeeting (state) {
            state.currentMeeting = null
        },

        resetMeetingState (state) {
            state.meetings = []
            state.currentMeeting = null
        },

        getMeetingDiarizationSuccess (state, action: PayloadAction<IMeetingsStatePayload>) {
            state.currentMeeting.diarization = action.payload
        },

        setMeetingGeneralSummarization (state, action: PayloadAction<IMeetingsStatePayload>) {
            state.currentMeeting.general_summarization = action.payload
        },

        setMeetingSpeakerSummarization (state, action: PayloadAction<IMeetingsStatePayload>) {
            state.currentMeeting.speaker_summarization = action.payload
        },
    }
})

export const { fetchMeetingsSuccess,
    getMeetingByIdSuccess,
    resetCurrentMeeting,
    resetMeetingState,
    getMeetingDiarizationSuccess,
    setMeetingSpeakerSummarization,
    setMeetingGeneralSummarization,
} = meetingsSlice.actions
export default meetingsSlice.reducer