import {AppDispatch} from "../store.ts";
import $api from "../../axios";
import {
    fetchMeetingsSuccess,
    getMeetingByIdSuccess,
    getMeetingDiarizationSuccess,
    getMeetingGeneralSummarizationSuccess,
    getMeetingSpeakerSummarizationSuccess,
    setMeetingGeneralSummarization,
    setMeetingSpeakerSummarization
} from "./meetingsSlice.ts";

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

export const getMeetingById = (meetingId) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await $api.get(`/meetings/${meetingId}`)
            dispatch(getMeetingByIdSuccess({
                currentMeeting: response.data
            }))
            console.log(response.data)
        } catch (error) {
            console.log(error())
        }
    }
}

export const updateMeetingTitle = (meetingId: string, title: string) => {
    return async () => {
        try {
            await $api.put(`/meetings/${meetingId}`, {
                title: title
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const updateSpeakerName = (speakerId: string, newName: string) => {
    return async () => {
        try {
            await $api.put(`/speakers/${speakerId}`, {
                name: newName
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export const getMeetingDiarization = (meetingId: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await $api.get(`/meetings/${meetingId}/diarization`);
            dispatch(getMeetingDiarizationSuccess(response.data));
        } catch (error) {
            console.log(error)
        }
    }
}

export const getMeetingGeneralSummarization = (meetingId: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await $api.get(`/meetings/${meetingId}/general_summarization`);
            dispatch(setMeetingGeneralSummarization(response.data));
        } catch (error) {
            console.log(error)
        }
    }
}

export const getMeetingSpeakerSummarization = (meetingId: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await $api.get(`/meetings/${meetingId}/speaker_summarization`);
            dispatch(setMeetingSpeakerSummarization(response.data));
        } catch (error) {
            console.log(error)
        }
    }
}

export const createMeetingGeneralSummarization = (meetingId: string, sentencesCount: number) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await $api.post(`/meetings/${meetingId}/general_summarization`, {
                sentences_count: sentencesCount
            });
            dispatch(setMeetingGeneralSummarization(response.data));
        } catch (error) {
            console.log(error)
        }
    }
}

export const createMeetingSpeakerSummarization = (meetingId: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const response = await $api.post(`/meetings/${meetingId}/speaker_summarization`);
            dispatch(setMeetingSpeakerSummarization(response.data));
        } catch (error) {
            console.log(error)
        }
    }
}