import {Checkbox} from "./tailframes/checkbox.tsx";
import {Button} from "./tailframes/button.tsx";
import {DeleteIcon} from "../assets/delete-icon.tsx";
import CustomModal from "./CustomModal.tsx";
import {useState} from "react";
import {useAppDispatch} from "../hooks/useAppDispatch.ts";
import {banUser, changeUserRole, unBanUser} from "../store/admin/adminActionCreator.ts";
import {setUsers} from "../store/admin/adminSlice.ts";
import {useAdmin} from "../hooks/useAdmin.ts";

const UserListItem = ({ user }) => {

    const dispatch = useAppDispatch();

    const [role, setRole] = useState(user.role);

    const {items} = useAdmin();
    const changeRole = () => {
        if (role === 'ADMIN') {
            setRole('MANAGER')
            dispatch(changeUserRole(user.id, 'MANAGER'));
        }
        else {
            setRole('ADMIN')
            dispatch(changeUserRole(user.id, 'ADMIN'))
        }
    }

    const banUserById = async (id: string) => {
        setShowConfirmBan(false);
        await dispatch(banUser(id));
        await dispatch(setUsers({
            items: items.filter(i => i.id !== user.id)
        }));
    }

    const unBan = async (id: string) => {
        await dispatch(unBanUser(id));
        await dispatch(setUsers({
            items: items.filter(i => i.id !== user.id)
        }));
    }

    const [showConfirmBan, setShowConfirmBan] = useState(false);

    return (
        <div className={'flex p-2 justify-between'}>
            <div className={'flex items-center'}>
                <Checkbox id={user.id}/>
                <div className={'ml-4'}>
                    <div>{user.email}</div>
                    <div className={'text-sm text-gray-400'}>Зарегистрирован в 20.01.2024</div>
                </div>
                <div
                    hidden={role !== 'ADMIN'}
                    className={'py-1 px-3 text-xs bg-zinc-700 rounded-2xl ml-4'}
                >
                    Администратор
                </div>
            </div>

            <div className={'flex'}>
                {!user.is_banned && <Button
                    className={'text-white duration-150 hover:bg-zinc-400 hover:border-zinc-400 active:bg-zinc-500'}
                    variant={"outlined"}
                    onClick={changeRole}
                >
                    {
                        role === 'ADMIN' ? <div>Снять права администратора</div> : <div>Назначить администратором</div>
                    }
                </Button>}

                {user.is_banned && <Button
                    className={'text-white duration-150 hover:bg-zinc-400 hover:border-zinc-400 active:bg-zinc-500'}
                    variant={"outlined"}
                    onClick={() => unBan(user.id)}
                >
                   Разблокировать
                </Button>}

                <DeleteIcon
                    className={`ml-4 stroke-red-500 hover:stroke-red-700 duration-150 cursor-pointer ${user.is_banned && 'hidden'}`}
                    onClick={() => setShowConfirmBan(true)}
                />
            </div>

            <CustomModal active={showConfirmBan} setActive={setShowConfirmBan}>
                <div className={'z-50'}>
                    <h1 className={'text-2xl font-semibold mb-8'}>Заблокировать пользователя?</h1>
                    <div className={'mb-10'}>
                        <div>
                            Вы действительно хотите заблокировать пользователя {user.email}?
                        </div>

                    </div>

                    <div className={'flex sm:flex-row flex-col justify-end'}>
                        <Button className={'sm:w-1/4 text-black bg-white hover:bg-zinc-400 active:bg-zinc-500 sm:mr-3 sm:mb-0 mb-3'} onClick={() => setShowConfirmBan(false)}>
                            Отмена
                        </Button>
                        <Button
                            className={'sm:w-1/4 bg-red-500 hover:bg-red-700 active:bg-red-800'}
                            onClick={() => banUserById(user.id)}
                        >
                            Заблокировать
                        </Button>
                    </div>
                </div>
            </CustomModal>
        </div>
    );
};

export default UserListItem;