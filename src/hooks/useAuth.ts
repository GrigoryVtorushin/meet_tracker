
import {useAppSelector} from "./useAppDispatch.ts";

export function useAuth() {
    const { accessToken, isAuth, user, logError } = useAppSelector(state => state.auth)
    return {
        accessToken,
        isAuth,
        user,
        logError
    };
}