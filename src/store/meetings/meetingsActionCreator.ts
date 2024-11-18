import {AppDispatch} from "../store.ts";
import $api from "../../axios";
import {fetchMeetingsSuccess, getMeetingByIdSuccess} from "./meetingsSlice.ts";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;


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
        } catch (error) {
            console.log(error())
        }
    }
}

export const updateMeetingTitle = (meetingId, title) => {
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