import {EditIcon} from "../assets/edit-icon.tsx";
import {DeleteIcon} from "../assets/delete-icon.tsx";
import {CalendarIcon} from "../assets/calendar-icon.tsx";
import {TimeIcon} from "../assets/time-icon.tsx";
import {UsersIcon} from "../assets/users-icon.tsx";
import {Tabs} from "./tailframes/tabs/tabs.tsx";
import {useState} from "react";
import {Input} from "./tailframes/input.tsx";
import {Button} from "./tailframes/button.tsx";

const Meeting = ({className}) => {

    const [selectedTab, setSelectedTab] = useState(1)

    return (
        <div className={className}>
            <div className={'m-auto flex mt-10 h-full max-w-7xl w-full'}>
                <div className={'bg-zinc-900 p-8 rounded-2xl w-2/3'}>
                    <div className={'text-white flex justify-between'}>
                        <h1 className={'text-xl font-semibold sm:text-2xl'}>Название собрания</h1>
                        <div className={'flex'}>
                            <EditIcon
                                className={'hover:stroke-zinc-400 active:stroke-zinc-500 ease-in-out duration-150 cursor-pointer mr-6 '}/>
                            <DeleteIcon
                                className={'hover:stroke-zinc-400 active:stroke-zinc-500 ease-in-out duration-150 cursor-pointer'}/>
                        </div>
                    </div>

                    <div className={'text-gray-500 flex mt-2'}>
                        <div className={'flex mr-4'}>
                            <CalendarIcon/>
                            <div className={'ml-1'}>Дата</div>
                        </div>
                        <div className={'flex mr-4'}>
                            <TimeIcon/>
                            <div className={'ml-1'}>Длительность записи</div>
                        </div>
                        <div className={'flex mr-4'}>
                            <UsersIcon/>
                            <div className={'ml-1'}>Количество спикеров</div>
                        </div>
                    </div>

                    <div className={'mt-16'}>
                        Содержимое собрания
                    </div>
                </div>

                <div className={'bg-zinc-900 p-8 rounded-2xl ml-5 w-1/3'}>
                    <h1 className={'text-xl font-semibold sm:text-2xl mb-6'}>Сводка</h1>
                    <div className={'flex text-center cursor-pointer'}>
                        <div className={`w-1/2 p-2 transition duration-300 ${selectedTab === 1 ? 'border-b-2' : 'text-gray-500'}`} onClick={() => setSelectedTab(1)}>Общая</div>
                        <div className={`w-1/2 p-2 transition duration-300 ${selectedTab === 2 ? 'border-b-2' : 'text-gray-500'}`} onClick={() => setSelectedTab(2)}>По спикерам</div>
                    </div>
                    {selectedTab === 1
                        ? <div>
                            <div className={'text-gray-500 text-sm mt-10 mb-4'}>
                                Введите количество предложений для создания краткой сводки расшифровки собрания.
                                Если ничего не укажете, то будет сформирована подробная сводка.
                            </div>
                            <Input
                                className={'text-black'}
                                placeholder={'Введите количество предложений.'}
                            />
                            <Button className={'w-full text-black bg-white hover:bg-zinc-400 active:bg-zinc-500 mt-8'}>
                                Создать сводку
                            </Button>
                        </div>

                        : <div>

                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Meeting;