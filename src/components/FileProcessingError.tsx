import {Button} from "./tailframes/button.tsx";

const FileProcessingError = () => {
    return (
        <div className={'w-full h-full flex'}>
            <div className={'m-auto max-w-md text-center'}>
                <div className={'flex justify-center mb-3'}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"
                         fill="none">
                        <path
                            d="M63.1748 63.7476C62.1044 60.5428 60.0464 57.7596 57.2964 55.796C54.5464 53.8328 51.2456 52.7904 47.8668 52.8184C44.488 52.8464 41.2048 53.9436 38.488 55.952C35.771 57.9608 33.7596 60.778 32.7422 64M84 48C84 67.8824 67.8824 84 48 84C28.1178 84 12 67.8824 12 48C12 28.1178 28.1178 12 48 12C67.8824 12 84 28.1178 84 48ZM40 38C40 41.3136 37.3137 44 34 44C30.6863 44 28 41.3136 28 38C28 34.6863 30.6863 32 34 32C37.3137 32 40 34.6863 40 38ZM68 38C68 41.3136 65.3136 44 62 44C58.6864 44 56 41.3136 56 38C56 34.6863 58.6864 32 62 32C65.3136 32 68 34.6863 68 38Z"
                            stroke="#9CA3AF" stroke-width="6" stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>
                </div>

                <h2 className={'text-white text-xl mb-3'}>Произошла ошибка</h2>
                <div className={'text-gray-400 mb-3'}>
                    Не удалось обработать файл. Попробуйте снова.
                </div>
                <Button
                    className={`text-white max-w-80 w-full my-8 hover:bg-zinc-400 hover:border-zinc-400 active:bg-zinc-500 active:duration-75`}
                    variant={"outlined"}
                >
                    Попробовать снова
                </Button>
                <div className={'text-gray-400 underline cursor-pointer'}>
                    Выбрать другой файл
                </div>

            </div>
        </div>
    );
};

export default FileProcessingError;