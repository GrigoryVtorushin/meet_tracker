import {Avatar} from "./tailframes/avatar.tsx";
import {EditIcon} from "../assets/edit-icon.tsx";

const DiarizationItem = ({ d }) => {
    return (
        <div className={'flex mb-4'}>
            <div className={'mr-4'}>
                <Avatar text={'Аа'} />
            </div>
            <div>
                <div className={'flex items-center'}>
                    <h1 className={'font-semibold mr-4'}>Спикер 1</h1>
                    <EditIcon className={' stroke-zinc-400 hover:stroke-zinc-500 active:stroke-zinc-600 ease-in-out duration-150 cursor-pointer w-5 mr-4'}/>
                    <div className={'text-gray-400 text-xs'}>00:01</div>
                </div>
                <div className={'font-light'}>
                    На конференции выступил первый спикер, поделившийся своими знаниями и опытом с аудиторией. Его презентация была интересной и познавательной, вызывая много вопросов и обсуждений среди участников. Первый спикер профессионально подошел к своему выступлению, держа внимание аудитории на протяжении всего времени.
                </div>
            </div>
        </div>
    );
};

export default DiarizationItem;