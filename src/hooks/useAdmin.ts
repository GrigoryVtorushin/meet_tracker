import {useSelector} from "react-redux";

export function useAdmin() {
    const { page, per_page, total, items, sttModels, llmModels } = useSelector(state => state.admin);
    return {
        page,
        per_page,
        total,
        items,
        sttModels,
        llmModels
    }
}