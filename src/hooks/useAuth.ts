import {useSelector} from "react-redux";

export function useAuth() {
    const {email, accessToken, id} = useSelector(state => state.user);

    return {
        isAuth: !!accessToken,
        email,
        accessToken,
        id,
    };
}