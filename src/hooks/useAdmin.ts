import {useSelector} from "react-redux";

export function useAdmin() {
    const { page, per_page, total, items } = useSelector(state => state.admin);
    return {
        page,
        per_page,
        total,
        items
    }
}