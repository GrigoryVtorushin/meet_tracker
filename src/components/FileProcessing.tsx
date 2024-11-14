import {EditIcon} from "../assets/edit-icon.tsx";
import {DeleteIcon} from "../assets/delete-icon.tsx";
import {TimeIcon} from "../assets/time-icon.tsx";
import {CalendarIcon} from "../assets/calendar-icon.tsx"
import {UsersIcon} from "../assets/users-icon.tsx";

const FileProcessing = ({className}) => {
    return (
        <div className={className}>
            <div className={` mt-24 m-auto rounded-3xl bg-zinc-900 p-10 max-w-5xl h-full sm:${'left-0 sm:h-5/6 sm:mt-10 w-full'}`}>
                <div className={'text-white flex justify-between'}>
                    <h1 className={'text-xl font-semibold sm:text-2xl'}>Название собрания</h1>
                    <div className={'flex'}>
                        <EditIcon className={'hover:stroke-zinc-400 active:stroke-zinc-500 ease-in-out duration-150 cursor-pointer mr-6 '} />
                        <DeleteIcon className={'hover:stroke-zinc-400 active:stroke-zinc-500 ease-in-out duration-150 cursor-pointer'} />
                    </div>
                </div>

                <div className={'text-gray-500 flex mt-2'}>
                    <div className={'flex mr-4'}>
                        <CalendarIcon/>
                        <div className={'ml-1'}>Дата</div>
                    </div>
                    <div className={'flex mr-4'}>
                        <TimeIcon/>
                        <div className={'ml-1'}>Длительность записи </div>
                    </div>
                    <div className={'flex mr-4'}>
                        <UsersIcon/>
                        <div className={'ml-1'}>Количество спикеров</div>
                    </div>
                </div>

                <div className={'w-full h-full flex'}>
                    <div className={'m-auto max-w-md text-center'}>
                        <div className={'flex justify-center mb-3'}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none">
                                <path d="M51 28C51 26.3431 49.6569 25 48 25C46.3431 25 45 26.3431 45 28H51ZM48 49.1764H45C45 49.972 45.3161 50.7351 45.8787 51.2977L48 49.1764ZM58.7023 64.1213C59.8739 65.2929 61.7733 65.2929 62.9449 64.1213C64.1165 62.9497 64.1165 61.0503 62.9449 59.8787L58.7023 64.1213ZM81 48C81 66.2254 66.2254 81 48 81V87C69.5391 87 87 69.5391 87 48H81ZM48 81C29.7746 81 15 66.2254 15 48H9C9 69.5391 26.4609 87 48 87V81ZM15 48C15 29.7746 29.7746 15 48 15V9C26.4609 9 9 26.4609 9 48H15ZM48 15C66.2254 15 81 29.7746 81 48H87C87 26.4609 69.5391 9 48 9V15ZM45 28V49.1764H51V28H45ZM45.8787 51.2977L58.7023 64.1213L62.9449 59.8787L50.1213 47.0551L45.8787 51.2977Z" fill="#9CA3AF"/>
                            </svg>
                        </div>

                        <h2 className={'text-white text-xl mb-3'}>Идет обработка файла...</h2>
                        <div className={'text-gray-400 mb-3'}>
                            Мы пришлем на Вашу почту письмо, как файл обработается.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FileProcessing;