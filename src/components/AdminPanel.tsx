import {CloseIcon} from "../assets/close-icon.tsx";
import {useEffect, useState} from "react";
import {Input} from "./tailframes/input.tsx";
import {SearchIcon} from "../assets/search-icon.tsx";
import {Select} from "./tailframes/select/select.tsx";
import {useAdmin} from "../hooks/useAdmin.ts";
import {getUsers} from "../store/admin/adminActionCreator.ts";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import UserListItem from "./UserListItem.tsx";
import useDebounce from "../hooks/useDebounce.ts";

const AdminPanel = ({setShowAdminPanel, showAdminPanel}) => {

    const { items } = useAdmin();
    const dispatch = useAppDispatch();

    const [option, setOption] = useState(1);
    const [filter, setFilter] = useState(1);
    const [searchedEmail, setSearchedEmail] = useState('');
    const [page, setPage] = useState(1);

    const searchByEmail = useDebounce((value) => {
        setSearchedEmail(value);
    }, 400)


    useEffect(() => {
        switch (filter) {
            case 1:
                dispatch(getUsers(page, 100, `${searchedEmail && `&email=${searchedEmail}`}`, '', false));
                break;
            case 2:
                dispatch(getUsers(page, 100, `${searchedEmail && `&email=${searchedEmail}`}`, '&role=ADMIN', false));
                break;
            case 3:
                dispatch(getUsers(page, 100, `${searchedEmail && `&email=${searchedEmail}`}`, '', true));
                break;
        }

    }, [filter, searchedEmail]);

    return (
        <div
            className={`fixed w-dvw h-lvh top-0 left-0 bg-zinc-800 flex ${showAdminPanel ? 'pointer-events-auto' : 'opacity-0 pointer-events-none'} duration-150`}>
            <div className={'basis-1/3 bg-zinc-900 max-w-96 p-8'}>
                <CloseIcon className={'w-8 h-8 hover:stroke-zinc-400 duration-150 cursor-pointer'}
                           onClick={() => setShowAdminPanel(false)}/>

                <h1 className={'font-semibold text-xl my-8'}>Панель администратора</h1>

                <div className={''}>
                    <div
                        className={`rounded-xl duration-150 px-4 py-2 mb-2 cursor-pointer ${option === 1 ? 'bg-zinc-700' : 'hover:bg-zinc-800'}`}
                        onClick={() => setOption(1)}
                    >
                        Пользователи
                    </div>
                    <div
                        className={`rounded-xl duration-150 px-4 py-2 mb-2 cursor-pointer ${option === 2 ? 'bg-zinc-700' : 'hover:bg-zinc-800'}`}
                        onClick={() => setOption(2)}
                    >
                        Нейронки
                    </div>
                    <div
                        className={`rounded-xl duration-150 px-4 py-2 mb-2 cursor-pointer ${option === 3 ? 'bg-zinc-700' : 'hover:bg-zinc-800'}`}
                        onClick={() => setOption(3)}
                    >
                        Аудио
                    </div>
                    <div
                        className={`rounded-xl duration-150 px-4 py-2 cursor-pointer ${option === 4 ? 'bg-zinc-700' : 'hover:bg-zinc-800'}`}
                        onClick={() => setOption(4)}
                    >
                        Почта
                    </div>
                </div>
            </div>

            <div className={'flex justify-center p-8 basis-3/4'}>
                <div className={'w-full max-w-5xl mt-14 '}>
                    {option === 1 && <div className={'h-full'}>
                        <Input
                            className={'text-black'}
                            placeholder={'Найти аккаунт '}
                            startAdornment={<SearchIcon/>}
                            onChange={(event) => searchByEmail(event.target.value)}
                        />

                        <div className={'flex mt-10 gap-6 '}>
                            <div
                                onClick={() => {
                                    setFilter(1);
                                }}
                                className={`border-b-2 cursor-pointer duration-150 ${filter === 1 ? 'border-white' : 'text-gray-500 border-zinc-800'} `}
                            >
                                Все пользователи
                            </div>
                            <div
                                onClick={() => setFilter(2)}
                                className={`border-b-2 cursor-pointer duration-150 ${filter === 2 ? 'border-white' : 'text-gray-500 border-zinc-800'} `}
                            >
                                Администраторы
                            </div>
                            <div
                                onClick={() => setFilter(3)}
                                className={`border-b-2 cursor-pointer duration-150 ${filter === 3 ? 'border-white' : 'text-gray-500 border-zinc-800'} `}
                            >
                                Заблокированные
                            </div>
                        </div>

                        <div className={'h-5/6 overflow-y-auto mt-7'}>
                            {items.map((user) => <UserListItem user={user} key={user.id}/>)}
                        </div>

                    </div>}

                    {option === 2 && <div className={'mt-14'}>
                        <div>
                            <h1 className={'font-semibold text-xl'}>Speech to text</h1>
                            <div className={'flex justify-between mt-5 py-2'}>
                                <div>Модель</div>
                                <div id={'speech-to-text'} className={'w-40'}>
                                    <Select
                                        dropdownPortalContainerId="speech-to-text"
                                        value={'whisper'}
                                        options={[
                                            {
                                                label: 'Whisper',
                                                value: 'whisper'
                                            },
                                            {
                                                label: 'Whisper1',
                                                value: 'whisper1'
                                            }
                                        ]}
                                    />
                                </div>

                            </div>
                        </div>

                        <div className={'mt-14'}>
                            <h1 className={'font-semibold text-xl'}>LLM модель</h1>
                            <div className={'flex justify-between mt-5 py-2'}>
                                <div>Модель</div>
                                <div id={'llm'} className={'w-40'}>
                                    <Select
                                        dropdownPortalContainerId="llm"
                                        value={'GPT-4o'}
                                        options={[
                                            {
                                                label: 'GPT-4o',
                                                value: 'GPT-4o'
                                            },
                                            {
                                                label: 'GPT-4',
                                                value: 'GPT-4'
                                            }
                                        ]}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>}

                    {option === 3 && <div>

                    </div>}

                    {option === 4 && <div>

                    </div>}
                </div>
            </div>
        </div>
    );
};

export default AdminPanel;